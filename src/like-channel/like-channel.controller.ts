import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LikeChannelService } from './like-channel.service';

@Controller('like-channel')
export class LikeChannelController {
  constructor(private readonly likeChannelService: LikeChannelService) {}

  @Get()
  public getLikeChannel(
    @Query('platform') platformId: string,
    @Query('content') contentId: string,
  ) {
    if (!platformId || !contentId) {
      return [];
    }
    return this.likeChannelService.getLikeChannel(platformId, contentId);
  }

  @Post()
  public createLikeChannel(
    @Body('platform') platformId: string,
    @Body('content') contentId: string,
    @Body('rules') rules: any[],
  ) {
    return this.likeChannelService.createLikeChannel(
      platformId,
      contentId,
      rules,
    );
  }
}
