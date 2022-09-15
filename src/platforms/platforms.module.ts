import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PlatformsService } from './platforms.service';
import { PlatformsController } from './platforms.controller';
import { Platform, PlatformSchema } from './platform.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Platform', schema: PlatformSchema }]),
  ],
  providers: [PlatformsService],
  controllers: [PlatformsController],
  exports: [PlatformsService],
})
export class PlatformsModule {}
