import { InputType, PartialType } from '@nestjs/graphql';
import { ShopDto } from '../create/shop.dto';
@InputType()
export class UpdateShopDTO extends PartialType(ShopDto) {}