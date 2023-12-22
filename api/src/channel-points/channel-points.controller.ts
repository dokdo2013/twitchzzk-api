import {
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Patch,
} from '@nestjs/common';
import { ChannelPointsService } from './channel-points.service';
import {
  ApiExcludeEndpoint,
  ApiNotImplementedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { NotImplementedExceptionWontImplementResponse } from 'src/common/common-response.dto';

@Controller('helix/channel_points')
@ApiTags('Channel Points')
export class ChannelPointsController {
  constructor(private readonly channelPointsService: ChannelPointsService) {}

  @Get('custom_rewards')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Get Custom Rewards',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedExceptionWontImplementResponse,
  })
  async getCustomRewards() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.channelPointsService.getCustomRewards();
  }

  @Delete('custom_rewards')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Delete Custom Reward',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedExceptionWontImplementResponse,
  })
  async deleteCustomReward() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.channelPointsService.deleteCustomReward();
  }

  @Get('custom_rewards')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Get Custom Reward',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedExceptionWontImplementResponse,
  })
  async getCustomReward() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.channelPointsService.getCustomReward();
  }

  @Get('custom_rewards/redemptions')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Get Custom Reward Redemptions',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedExceptionWontImplementResponse,
  })
  async getCustomRewardRedemptions() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.channelPointsService.getCustomRewardRedemptions();
  }

  @Patch('custom_rewards')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Update Custom Reward',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedExceptionWontImplementResponse,
  })
  async updateCustomReward() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.channelPointsService.updateCustomReward();
  }

  @Patch('custom_rewards/redemptions')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Update Redemption Status',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedExceptionWontImplementResponse,
  })
  async updateCustomRewardRedemptions() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.channelPointsService.updateCustomRewardRedemptions();
  }
}
