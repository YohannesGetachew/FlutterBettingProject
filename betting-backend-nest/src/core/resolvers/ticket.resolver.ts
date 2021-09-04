import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql';
import { Ticket, TicketStatus } from '../models/ticket';
import { TicketService } from '../modules/ticket/ticket.service';
import { TicketArg } from '../args/ticket.arg';
import { TicketDTO } from '../DTOs/create/ticket.dto';
import { UpdateTicketDTO } from '../DTOs/update/ticket.dto';
import { CurrentUser } from '../../shared/decorators/current-user.decorator';
import { User } from 'src/core/models';
import { ReportDetail } from '../models/report';
import { ReportArg } from '../args/report.arg';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/shared/guards/auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { Role } from 'src/shared/decorators/role.decorator';
import { UserService } from '../modules/user/user.service';
import { ShopService } from '../modules/shop/shop.service';
import { Shop } from '../models/shop';
import { BetService } from '../modules/bet/bet.service';
import { Bet } from '../models/bet';

@Resolver(of => Ticket)
export class TicketResolver {
    constructor(
        private ticketService: TicketService,
        private userService: UserService,
        private shopService: ShopService,
        private betService: BetService
        ) {}
    
    @Query(returns => [Ticket])
    tickets(@Args() args: TicketArg) {
        return this.ticketService.findAll(args);
    }

    @Query(returns => Ticket)
    ticket(@Args('id') id: string) {
        return this.ticketService.findById(id);
    }

    @Mutation(returns => Ticket)
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('CASHIER')
    duplicateTicket(@Args('id') id: string, @Args('stake') stake: number,  @CurrentUser() user: User){
        return this.ticketService.duplicateTicket(id, stake, user)
    }
    
    @Mutation(returns => Ticket)
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('CASHIER')
    payWonTicket(@Args('id') id: string,@CurrentUser() user: User){
        return this.ticketService.payWonTicket(id , user)
    }


    // CreateTicket
    // save, place
    @Mutation(returns => Ticket)
    saveTicket(@Args('input') input: TicketDTO) {
        return this.ticketService.saveTicket(input);
    }
    
    // user Auth Protected
    // only customer places here.
    @Mutation(returns => Ticket)
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('CUSTOMER')
    placeTicket(
        @CurrentUser() user: User,
        @Args('input') input: TicketDTO) {
        return this.ticketService.placeTicket(input, user);
    }

    // role protected
    @Mutation(returns => Ticket)
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('CASHIER')
    updateTicket(
        @CurrentUser() user: User,
        @Args('id') ticketId: string,
        @Args('updateInput') updateInput: UpdateTicketDTO) {
            return this.ticketService.updateTicket(ticketId, updateInput, user);
    }

    
    @Query(returns => [ReportDetail])
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('ADMIN')
    report(@Args() args: ReportArg) {
        return this.ticketService.getReport(args);
    }

    // what if the user is guest 
    @ResolveField(returns => User)
    user(@Parent() ticket) {
        return this.userService.findById(ticket.userID);
    }

    @ResolveField(returns => User)
    payer(@Parent() ticket) {
        return this.userService.findById(ticket.payerID);
    }

    // what if the shop is online
    @ResolveField(returns => Shop)
    shop(@Parent() ticket) {
        return this.shopService.findById(ticket.shopID);
    }

    @ResolveField(returns => [Bet])
    async bets(@Parent() ticket) {
        return await this.betService.findAll({ticketID: ticket._id});;
    }
    @Query(returns => Ticket)
    checkTicket(@Args("placementId") placementId: string) {
        return this.ticketService.findOne({placementID: placementId});
    }
}
