import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Get()
  public getLikeCount(
    @Query('platform') platformId: string,
    @Query('content') contentId: string,
    @Query('user') userId: string,
  ) {
    return this.likesService.getLikeCount(platformId, contentId, userId);
  }

  @Post('platform/:platformId/content/:contentId/user/:userId')
  createLike(@Param() params) {
    return this.likesService.createLike(
      params.platformId,
      params.contentId,
      params.userId,
    );
  }

  @Delete('platform/:platformId/content/:contentId/user/:userId')
  deleteLike(@Param() params) {
    return this.likesService.deleteLike(
      params.platformId,
      params.contentId,
      params.userId,
    );
  }
}
