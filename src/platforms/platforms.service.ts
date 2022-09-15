import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlatformDocument } from './platform.model';

@Injectable()
export class PlatformsService {
  constructor(
    @InjectModel('Platform') private platformModel: Model<PlatformDocument>,
  ) {}

  async getAllPlatforms() {
    return await this.platformModel.find();
  }

  async getPlatformsByUser(userId: string) {
    return await this.platformModel.find({ userId });
  }
}
