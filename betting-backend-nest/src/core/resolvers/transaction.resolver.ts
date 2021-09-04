import { Resolver, Mutation, Args, Query, ResolveField, Parent } from "@nestjs/graphql";
import { Transaction } from '../models/transaction';
import { TransactionDTO } from "../DTOs/create/transaction.dto";
import { TransactionService } from "../modules/transaction/transaction.service";
import { Shop } from '../models/shop';
import { ShopService } from '../modules/shop/shop.service';
import { UserService } from '../modules/user/user.service';
import { User } from "../models/user";
import { TransactionArg } from '../args/transaction.arg';
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "src/shared/guards/auth.guard";
import { RoleGuard } from "src/shared/guards/role.guard";
import { Role } from "src/shared/decorators/role.decorator";
import { CurrentUser } from "src/shared/decorators/current-user.decorator";

@Resolver(of => Transaction)
export class TransactionResolver {
  constructor(
    private transactionService: TransactionService,
    private shopService: ShopService,
    private userService: UserService
  ){}
  @Query(returns => [Transaction])
  transactions(@Args() args: TransactionArg) {
      return this.transactionService.findAll(args);
  }

  @Mutation(returns => Transaction)
  @UseGuards(GqlAuthGuard, RoleGuard)
  @Role('CASHIER')
  makeTransaction(
    @CurrentUser() user: User,
    @Args('transaction') transaction: TransactionDTO
    ) {
      return this.transactionService.makeTransaction(transaction, user);
  }

  @ResolveField(type => Shop)
  shop(@Parent() transaction) {
    return this.shopService.findOne({adminId: transaction.cashierId});  
  }

  @ResolveField(type => User)
  customer(@Parent() transaction){
    return this.userService.findById(transaction.customerId);
  }

  @ResolveField(type => User)
  cashier(@Parent() transaction) {
      return this.userService.findById(transaction.cashierId);
  }
}