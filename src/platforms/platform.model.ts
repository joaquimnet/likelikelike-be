import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PlatformDocument = Platform & Document;

@Schema({
  timestamps: true,
})
export class Platform {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  userId: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const PlatformSchema = SchemaFactory.createForClass(Platform);
