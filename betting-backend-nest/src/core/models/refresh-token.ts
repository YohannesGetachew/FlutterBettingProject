import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Schema as _ } from 'mongoose';
import { Base } from './base';


@Schema({timestamps: true})
export class RefreshToken extends Base {
  @Prop({required: [true, 'Token value is required'], unique: true})
  value: string;

  @Prop()
  userId: _.Types.ObjectId | string;

  @Prop()
  expiresAt: Date;

  @Prop()
  clientId: string;

  @Prop()
  ipAddress: string;
}

export const RefereshTokenSchema = SchemaFactory.createForClass(RefreshToken);