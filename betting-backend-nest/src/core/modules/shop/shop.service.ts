import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop } from '../../models/shop';
import { Model } from 'mongoose';
import { BaseService } from '../../../shared/base.service';
import { ShopDto } from 'src/core/DTOs/create/shop.dto';
import { UpdateShopDTO } from 'src/core/DTOs/update/shop.dto';

@Injectable()
export class ShopService extends BaseService<Shop> {
  constructor(@InjectModel(Shop.name) private ShopModel: Model<Shop>) {
    super();
    this._model = this.ShopModel;
  }

  async createShop (shopInput: ShopDto) {
    const adminShop = await this.findOne({adminId: shopInput.adminId})
    if(adminShop) {
      throw new HttpException('Admin already owns shop', HttpStatus.BAD_REQUEST)
    }
     const createdShop = await this.create(shopInput)

     if(!createdShop){
      throw new HttpException('Failed to create shop', HttpStatus.INTERNAL_SERVER_ERROR)
     }
     return createdShop
  }

  async updateShop (id: string,shopInput: UpdateShopDTO) {
    const shopToUpdate = await this.findById(id)
    const adminShop = await this.findOne({adminId: shopInput.adminId})
    if(!shopToUpdate || ! adminShop){
      throw new HttpException('Shop to update not found', HttpStatus.BAD_REQUEST)
    }
    if(shopToUpdate.adminId !== shopInput.adminId) {
      throw new HttpException('Admin already owns shop', HttpStatus.BAD_REQUEST)
    }
    const updatedShop = await this.update(id, shopInput)

    if(!updatedShop){
     throw new HttpException('Failed to create shop', HttpStatus.INTERNAL_SERVER_ERROR)
    }
    return updatedShop
 }
 
 
}
