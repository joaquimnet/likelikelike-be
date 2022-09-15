import { Controller, Get, Query } from '@nestjs/common';
import { PlatformsService } from './platforms.service';

@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformsService: PlatformsService) {}

  @Get()
  public getPlatformsByUser(@Query('user') userId?: string) {
    if (userId) {
      return this.platformsService.getPlatformsByUser(userId);
    }
    return this.platformsService.getAllPlatforms();
  }
}
