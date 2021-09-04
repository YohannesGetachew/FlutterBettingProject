import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { User, UserSchema } from '../../models';
import { UserResolver } from '../../resolvers/user.resolver';
import * as bcrypt from 'bcrypt';
import { ShopModule } from '../shop/shop.module';
@Module({
  imports: [
    forwardRef(()=>ShopModule),
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.pre('save', async function(next: Function) {
            // @ts-ignore
            this.password = await bcrypt.hash(this.password, 10);
            next();
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService]
})
export class UserModule { }
