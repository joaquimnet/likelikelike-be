import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { KeysController } from './keys.controller';
import { KeysService } from './keys.service';
import { PlatformKey, PlatformKeySchema } from './platform-key.model';
import {
  PlatformUserKey,
  PlatformUserKeySchema,
} from './platform-user-key.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlatformKey.name, schema: PlatformKeySchema },
      { name: PlatformUserKey.name, schema: PlatformUserKeySchema },
    ]),
  ],
  controllers: [KeysController],
  providers: [KeysService],
})
export class KeysModule {}
