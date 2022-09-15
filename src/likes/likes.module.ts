import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  LikeChannel,
  LikeChannelSchema,
} from '../like-channel/like-channels.model';
import { LikeChannelModule } from '../like-channel/like-channel.module';
import { LikeChannelService } from '../like-channel/like-channel.service';
import { Like, LikeSchema } from './like.model';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Like.name, schema: LikeSchema },
      { name: LikeChannel.name, schema: LikeChannelSchema },
    ]),
    LikeChannelModule,
  ],
  controllers: [LikesController],
  providers: [LikesService, LikeChannelService],
})
export class LikesModule {}
