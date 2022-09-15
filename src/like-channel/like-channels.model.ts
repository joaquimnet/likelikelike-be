import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type LikeChannelDocument = LikeChannel & Document;

@Schema({
  timestamps: true,
})
export class LikeChannel {
  @Prop({ required: true })
  platformId: string;

  @Prop({ required: true })
  contentId: string;

  @Prop({ required: true })
  rules: { run(...args: any[]): boolean }[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const LikeChannelSchema = SchemaFactory.createForClass(LikeChannel);
