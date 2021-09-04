import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Message } from "../models/message";
import { Role } from 'src/shared/decorators/role.decorator';
import { GqlAuthGuard } from "src/shared/guards/auth.guard";
import { RoleGuard } from "src/shared/guards/role.guard";
import { CurrentUser } from "src/shared/decorators/current-user.decorator";
import { User } from "../models";
import { MessageService } from "../modules/message/message.service";

@Resolver(of => Message)
export class MessageResolver {
    constructor(
        private messageService: MessageService,
    ){}

    @Query(returns => [Message])
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('CUSTOMER')
    messages(@CurrentUser() customer: User ){
        return this.messageService.findAll(customer);
    }

    @Mutation(returns => Message)
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('CUSTOMER')
    updateMessage( @CurrentUser() customer: User, @Args('id') id: string){
       return this.messageService.updateMessage(customer, id)
    }

}