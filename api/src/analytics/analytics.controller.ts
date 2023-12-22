import { Controller, Get, NotImplementedException } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import {
  ApiExcludeEndpoint,
  ApiNotImplementedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { NotImplementedExceptionWontImplementResponse } from 'src/common/common-response.dto';

@Controller('helix/analytics')
@ApiTags('Analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('extensions')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Get Extension Analytics',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedExceptionWontImplementResponse,
  })
  async getAnalyticsExtensions() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.analyticsService.getAnalyticsExtensions();
  }

  @Get('games')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Get Game Analytics',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedExceptionWontImplementResponse,
  })
  async getAnalyticsGames() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.analyticsService.getAnalyticsGames();
  }
}
