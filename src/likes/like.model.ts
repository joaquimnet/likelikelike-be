import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type LikeDocument = Like & Document;

@Schema({
  timestamps: true,
})
export class Like {
  @Prop({ required: true })
  platformId: string;

  @Prop({ required: true })
  contentId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LikeChannel',
  })
  likeChannelId?: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const LikeSchema = SchemaFactory.createForClass(Like);
