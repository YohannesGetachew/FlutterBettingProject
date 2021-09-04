import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Role, User } from '../../models';
import { BaseService } from '../../../shared/base.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from '../../DTOs/login.dto';
import { ShopService } from '../shop/shop.service';

// TODO register new user, find users by args, update user, delete user
@Injectable()
export class UserService extends BaseService<User> {
   constructor(
      @InjectModel('User') private userModel: Model<User>,
      private readonly shopService: ShopService,
      ) {
      super();
      this._model = this.userModel;
   }
   async update(id: string, item): Promise<User>{
      if(item.password) {
         item.password = await this.hashPassword(item.password);
      }
      return this.userModel
      .findByIdAndUpdate(Types.ObjectId(id), item, { new: true })
      .exec();
   }
   async updateProfileImage(id: string, image: string) {

     const details = {
       profileImage: String(image)
     }
     return this.update(id, details);
   }
   async updateBalance(id: string,  value: number) {
    const details = {
      accountBalance: value
    }
    return this.update(id, details);
   }
   async findByLogin(credentials: LoginDto): Promise<User> {
      const exist = await this.findOne({username: credentials.username});
  
      if (!exist) {
        throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
      }
  
      // compare passwords
      const areEqual = await this.comparePasswords(credentials.password, exist.password);
  
      if (!areEqual) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
      delete exist.password;
      return exist;
    }
    comparePasswords(currentPassword, userPassword): Promise<boolean> {
      return bcrypt.compare(currentPassword, userPassword);
    }
    hashPassword(password): Promise<string> {
      return bcrypt.hash(password, 10);
    }

    // customer deletes no one 
    // cashier deletes no one
    // admin deletes own shop cashiers
    // super admin deletes other super admins and customers and cashiers and admins
    async changeUserActive(currentUser: User, userToChangeActiveId: string){
      if (currentUser.role !== Role.SUPER_ADMIN && currentUser.role !== Role.ADMIN) {
         throw new HttpException(
           "You don't have permission",
           HttpStatus.UNAUTHORIZED,
         );
       }

     const userToChangeActive = await this.findById(userToChangeActiveId)
     if(!userToChangeActive){
         throw new HttpException( "User not found",HttpStatus.NOT_FOUND );
     }

     if(currentUser.role === Role.ADMIN ){
       if(userToChangeActive.role !== Role.CASHIER){
         throw new HttpException(
           "You don't have permission",
           HttpStatus.UNAUTHORIZED,
         );
        }else{
          const cashiersShop = await this.findCashiersShop(userToChangeActive.belongsToShop)
          if(currentUser._id.toString() !== cashiersShop.adminId){
            throw new HttpException(
              "Cashier doesn't belong to admin",
              HttpStatus.UNAUTHORIZED,
            );
          }
        }
     }

     if(userToChangeActive.role === Role.ADMIN){
       const shopOfAdmin = await this.shopService.findOne({adminId: userToChangeActive._id})
      if(!shopOfAdmin){
        throw new HttpException( "Admin's shop not found",HttpStatus.INTERNAL_SERVER_ERROR ); 
      }
      const updatedCashiers = await this.updateMany({belongsToShop: shopOfAdmin._id}, {isActive: false})
      if(!updatedCashiers){
        throw new HttpException( "Failed to make admin's cashiers inactive",HttpStatus.INTERNAL_SERVER_ERROR ); 
      }
     }
     
     const updatedUser = await this.update(userToChangeActiveId, {isActive: !userToChangeActive.isActive})

     if(!updatedUser){
         throw new HttpException( "Failed to delete user",HttpStatus.INTERNAL_SERVER_ERROR ); 
     }
     
     return 'Success'
   }

   async findCashiersShop(cashierShopId) {
    const cashiersShop = await this.shopService.findById(cashierShopId.belongsToShop)
    if(!cashiersShop){
      throw new HttpException(
        "Cashier's shop not found",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return cashiersShop
   }
}