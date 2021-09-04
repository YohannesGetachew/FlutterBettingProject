import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/shared/decorators/current-user.decorator';
import { Role } from 'src/shared/decorators/role.decorator';
import { GqlAuthGuard } from 'src/shared/guards/auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { DepositRequestDto } from '../DTOs/create/depositRequest.dto';
import { UpdateDepositRequestDto } from '../DTOs/update/updateDepositRequest.dto';
import { User } from '../models';
import { DepositRequest} from '../models/depositRequest'
import { DepositRequestService } from '../modules/depositRequest/depositRequest.service';
import { UserService } from '../modules/user/user.service';

@Resolver(of => DepositRequest)
export class DepositRequestResolver {
    constructor(
        private depositRequestService: DepositRequestService,
        private userService: UserService
    ){}

   
    @Query(returns => [DepositRequest])
    depositRequests(){
        return this.depositRequestService.findAll();
    }

  
    @Mutation(returns => DepositRequest)
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('CUSTOMER')
    createDepositRequest( @CurrentUser() customer: User,@Args('depositRequestInput') depositRequestInput: DepositRequestDto){
       return this.depositRequestService.createDepositRequest(customer, depositRequestInput)
    }

    
    @Mutation(returns => DepositRequest)
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('CASHIER')
    confirmDepositRequest( @CurrentUser() cashier: User, @Args('id') depositRequestId: string, @Args('updateDepositRequestInput') updateDepositRequestInput: UpdateDepositRequestDto){
       return this.depositRequestService.confirmDepositRequest(cashier, depositRequestId, updateDepositRequestInput)
    }

    @Mutation(returns => DepositRequest)
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('CASHIER')
    denyDepositRequest(@CurrentUser() cashier: User, @Args('id') depositRequestId: string){
        return this.depositRequestService.denyDepositRequest(cashier, depositRequestId)
    }

    @Mutation(returns => String)
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('CASHIER')
    deleteDepositRequest(@CurrentUser() cashier: User, @Args('id') depositRequestId: string){
        return this.depositRequestService.deleteDepositRequest(cashier, depositRequestId)
    }

    @ResolveField(returns => User)
    customer(@Parent() depositRequest) {
        return this.userService.findById(depositRequest.customerId);
    }

}