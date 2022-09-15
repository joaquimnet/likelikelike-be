import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LikeChannelService } from 'src/like-channel/like-channel.service';
import { Like, LikeDocument } from './like.model';

@Injectable()
export class LikesService {
  constructor(
    private readonly likeChannelService: LikeChannelService,
    @InjectModel(Like.name) private likeModel: Model<LikeDocument>,
  ) {}

  async getLike(likeId: string) {
    return await this.likeModel.findById(likeId);
  }

  async getLikeCount(
    platformId: string,
    contentId: string,
    userId?: string,
  ): Promise<{
    platformId: string;
    contentId: string;
    userId?: string;
    lastLikedAt: Date;
    likes: number;
  }> {
    const likeCount = await this.likeModel.count({
      platformId,
      contentId,
      userId,
    });
    const latestLike = await this.likeModel
      .findOne({
        platformId,
        contentId,
        userId,
      })
      .sort({ createdAt: -1 })
      .select('createdAt');

    return {
      platformId,
      contentId,
      userId,
      lastLikedAt: latestLike.createdAt,
      likes: likeCount,
    };
  }

  async createLike(platformId: string, contentId: string, userId: string) {
    const existingLike = await this.likeModel.findOne({
      platformId,
      contentId,
      userId,
    });

    if (existingLike) {
      return existingLike;
    }

    const likeChannel = await this.likeChannelService.getLikeChannel(
      platformId,
      contentId,
    );

    if (likeChannel?.rules?.length) {
      const result = likeChannel.rules.every((rule) => {
        return rule.run(platformId, contentId, userId);
      });
      if (!result) {
        throw new BadRequestException('Likes channel rules failed');
      }
    }

    const like = await this.likeModel.create({ platformId, contentId, userId });

    return like;
  }

  async deleteLike(platformId: string, contentId: string, userId: string) {
    return await this.likeModel.deleteOne({ platformId, contentId, userId });
  }
}
