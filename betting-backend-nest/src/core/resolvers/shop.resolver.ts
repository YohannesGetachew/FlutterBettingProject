import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Shop } from '../models/shop';
import { ShopService } from '../modules/shop/shop.service';
import { ShopDto } from '../DTOs/create/shop.dto';
import { User } from '../models/user';
import { UserService } from '../modules/user/user.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/shared/guards/auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { Role } from 'src/shared/decorators/role.decorator';
import { UpdateShopDTO } from '../DTOs/update/shop.dto';

@Resolver(of => Shop)
export class ShopResolver {
  constructor(
    private shopService: ShopService,
    private readonly userService: UserService
    ) {
  }
  // Online Shop - is the default shop and it's admin is the super-admin
  // ShopType - online, branch
  //
  @Query(returns => [Shop])
  shops() {
    return this.shopService.findAll({}); // args [admin]
  }

  @Query(returns => Shop)
  shop(@Args('id') id: string) {
    return this.shopService.findById(id); // args [admin]
  }

  // TODO create guard and add it here. only super admin can create, update shop
  @Mutation(returns => Shop)
  @UseGuards(GqlAuthGuard, RoleGuard)
  @Role('SUPER-ADMIN')
  createShop(@Args('shopInput') shopInput: ShopDto) {
    return this.shopService.createShop(shopInput);
  }

  @Mutation(returns => Shop)
  @UseGuards(GqlAuthGuard, RoleGuard)
  @Role('SUPER-ADMIN')
  updateShop(@Args('id') id: string, @Args('shopInput') shopInput: UpdateShopDTO) {
    return this.shopService.updateShop(id, shopInput);
  }


  @ResolveField(type => User)
  admin(@Parent() shop){
    return this.userService.findById(shop.adminId);
  }
  // TODO update the shop
}