import { Module } from '@nestjs/common';
import { BitsController } from './bits.controller';
import { BitsService } from './bits.service';

@Module({
  controllers: [BitsController],
  providers: [BitsService],
})
export class BitsModule {}
