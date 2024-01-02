import { Module } from '@nestjs/common';
import { ChzzkService } from './chzzk.service';

@Module({
  providers: [ChzzkService],
  exports: [ChzzkService],
})
export class ChzzkModule {}
