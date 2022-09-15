import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LikeChannel, LikeChannelDocument } from './like-channels.model';

@Injectable()
export class LikeChannelService {
  constructor(
    @InjectModel(LikeChannel.name)
    private likeChannelModel: Model<LikeChannelDocument>,
  ) {}

  async getLikeChannel(platformId: string, contentId: string) {
    return await this.likeChannelModel.findOne({ platformId, contentId });
  }

  async createLikeChannel(platformId: string, contentId: string, rules: any[]) {
    const existingLikeChannel = await this.likeChannelModel.findOne({
      platformId,
      contentId,
    });

    if (existingLikeChannel) {
      return existingLikeChannel;
    }

    const newLikeChannel = new this.likeChannelModel({
      platformId,
      contentId,
      rules,
    });

    return await newLikeChannel.save();
  }
}
