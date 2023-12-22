import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChannelsModule } from './channels/channels.module';
import { BitsModule } from './bits/bits.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ExtensionsModule } from './extensions/extensions.module';

@Module({
  imports: [ChannelsModule, BitsModule, AnalyticsModule, ExtensionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
