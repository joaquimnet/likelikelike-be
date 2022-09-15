import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LikesModule } from './likes/likes.module';
import { PlatformsModule } from './platforms/platforms.module';
import { LikeChannelModule } from './like-channel/like-channel.module';
import { UsersModule } from './users/users.module';
import { KeysModule } from './keys/keys.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    LikesModule,
    PlatformsModule,
    LikeChannelModule,
    UsersModule,
    KeysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
