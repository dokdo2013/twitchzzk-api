import { Module } from '@nestjs/common';
import { StreamsController } from './streams.controller';
import { StreamsService } from './streams.service';
import { ChzzkModule } from 'src/chzzk/chzzk.module';

@Module({
  imports: [ChzzkModule],
  controllers: [StreamsController],
  providers: [StreamsService],
})
export class StreamsModule {}
