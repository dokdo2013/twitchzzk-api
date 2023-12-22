import { Controller, Get, NotImplementedException } from '@nestjs/common';
import { BitsService } from './bits.service';
import {
  ApiExcludeEndpoint,
  ApiNotImplementedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('helix/bits')
@ApiTags('Bits')
export class BitsController {
  constructor(private readonly bitsService: BitsService) {}

  @Get('leaderboard')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Get Bits Leaderboard',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedException,
  })
  async getBitsLeaderboard() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.bitsService.getBitsLeaderboard();
  }

  @Get('cheermotes')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Get Cheermotes',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedException,
  })
  async getCheermotes() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.bitsService.getCheermotes();
  }
}
