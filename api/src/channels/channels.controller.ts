import {
  Controller,
  Get,
  NotImplementedException,
  ParseArrayPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ChannelsService } from './channels.service';
import {
  ApiExcludeEndpoint,
  ApiNotImplementedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import {
  NotImplementedExceptionImplementSoonResponse,
  NotImplementedExceptionWontImplementResponse,
} from 'src/common/common-response.dto';
import {
  getChannelDto,
  twitchGetChannelResponseDto,
} from './dto/get-channel.dto';

@Controller('helix/channels')
@ApiTags('Channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Post('commercial')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Start Commercial',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedExceptionWontImplementResponse,
  })
  async commercial() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.channelsService.commercial();
  }

  @Get('ads')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Get Ad Schedule',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedExceptionWontImplementResponse,
  })
  async ads() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.channelsService.ads();
  }

  @Post('ads/schedule/snooze')
  @ApiExcludeEndpoint()
  @ApiOperation({
    summary: 'Snooze Next Ad',
  })
  @ApiNotImplementedResponse({
    description: 'WONT_IMPLEMENT',
    type: NotImplementedExceptionWontImplementResponse,
  })
  async adsScheduleSnooze() {
    throw new NotImplementedException('WONT_IMPLEMENT');
    // return await this.channelsService.adsScheduleSnooze();
  }

  @Get('')
  @ApiOperation({
    summary: 'Get Channel Information',
  })
  @ApiOkResponse({
    description: 'OK',
    type: twitchGetChannelResponseDto,
  })
  @ApiQuery({
    name: 'broadcaster_id',
    required: true,
    explode: true,
    type: [String],
    description: '채널 ID 여러 개를 입력합니다',
  })
  async getChannelInformation(
    @Query('broadcaster_id', ParseArrayPipe) broadcaster_ids: string[],
  ) {
    const chzzkResults = (await Promise.all(
      broadcaster_ids.map(async (id) => {
        return (await this.channelsService.getChannel(id)).content;
      }),
    )) as getChannelDto[];

    const twitchResults = chzzkResults.map((chzzkResult) => {
      return this.channelsService.getChannelConverter(chzzkResult);
    });

    const response = {
      data: twitchResults,
    } as twitchGetChannelResponseDto;

    return response;
  }

  @Patch('')
  @ApiOperation({
    summary: 'Modify Channel Information',
    deprecated: true,
  })
  @ApiNotImplementedResponse({
    description: 'IMPLEMENT_SOON',
    type: NotImplementedExceptionImplementSoonResponse,
  })
  async modifyChannelInformation() {
    throw new NotImplementedException('IMPLEMENT_SOON');
    // return await this.channelsService.getChannelInformation();
  }

  @Get('editors')
  @ApiOperation({
    summary: 'Get Channel Editors',
    deprecated: true,
  })
  @ApiNotImplementedResponse({
    description: 'IMPLEMENT_SOON',
    type: NotImplementedExceptionImplementSoonResponse,
  })
  async getChannelEditors() {
    throw new NotImplementedException('IMPLEMENT_SOON');
    // return await this.channelsService.getChannelEditors();
  }

  @Get('followed')
  @ApiOperation({
    summary: 'Get Followed Channels',
    deprecated: true,
  })
  @ApiNotImplementedResponse({
    description: 'IMPLEMENT_SOON',
    type: NotImplementedExceptionImplementSoonResponse,
  })
  async getChannelFollowed() {
    throw new NotImplementedException('IMPLEMENT_SOON');
    // return await this.channelsService.getChannelFollowed();
  }

  @Get('followers')
  @ApiOperation({
    summary: 'Get Channel Followers',
    deprecated: true,
  })
  @ApiNotImplementedResponse({
    description: 'IMPLEMENT_SOON',
    type: NotImplementedExceptionImplementSoonResponse,
  })
  async getChannelFollowers() {
    throw new NotImplementedException('IMPLEMENT_SOON');
    // return await this.channelsService.getChannelFollowers();
  }
}
