import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PlatformKeyDocument = PlatformKey & Document;

@Schema({
  timestamps: true,
})
export class PlatformKey {
  @Prop({ required: true })
  platformId: string;

  @Prop({ required: true })
  userId: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const PlatformKeySchema = SchemaFactory.createForClass(PlatformKey);
