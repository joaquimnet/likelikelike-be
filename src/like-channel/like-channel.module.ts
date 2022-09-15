import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LikeChannelController } from './like-channel.controller';
import { LikeChannelService } from './like-channel.service';
import { LikeChannel, LikeChannelSchema } from './like-channels.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LikeChannel.name, schema: LikeChannelSchema },
    ]),
  ],
  controllers: [LikeChannelController],
  providers: [LikeChannelService],
  exports: [LikeChannelService],
})
export class LikeChannelModule {}
