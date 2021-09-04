import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Shop, ShopSchema } from '../../models/shop';
import { ShopService } from './shop.service';
import { ShopResolver } from '../../resolvers/shop.resolver';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Shop.name, schema: ShopSchema}]),
    forwardRef(()=>UserModule),
  ],
  providers: [ShopService, ShopResolver],
  exports: [
    ShopService
  ]
})
export class ShopModule {}
