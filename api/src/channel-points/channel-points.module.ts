import { Module } from '@nestjs/common';
import { ChannelPointsController } from './channel-points.controller';
import { ChannelPointsService } from './channel-points.service';

@Module({
  controllers: [ChannelPointsController],
  providers: [ChannelPointsService],
})
export class ChannelPointsModule {}
