import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PlatformUserKeyDocument = PlatformUserKey & Document;

@Schema({
  timestamps: true,
})
export class PlatformUserKey {
  @Prop({ required: true })
  platformId: string;

  @Prop({ required: true })
  userId: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const PlatformUserKeySchema =
  SchemaFactory.createForClass(PlatformUserKey);
