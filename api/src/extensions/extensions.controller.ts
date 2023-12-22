import { Controller, Get, NotImplementedException } from '@nestjs/common';
import { ExtensionsService } from './extensions.service';
import {
  ApiExcludeEndpoint,
  ApiNotImplementedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('helix/extensions')
@ApiTags('Extensions')
export class ExtensionsController {
  constructor(private readonly extensionsService: ExtensionsService) {}

  @Get('transactions')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Get Extension Transactions',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedException,
  })
  async getTransactions() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.extensionsService.getBitsLeaderboard();
  }
}
