import {
  Controller,
  Get,
  NotFoundException,
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
import { NotImplementedExceptionImplementSoonResponse } from 'src/common/common-response.dto';
import { TwitchGetChannelResponseDto } from './dto/get-channel.dto';
import { ChzzkService } from 'src/chzzk/chzzk.service';
import { GetChannelByIdParamsDto } from 'src/chzzk/dto/params.dto';
import { ChzzkChannel } from 'src/chzzk/dto/response.dto';

@Controller('helix/channels')
@ApiTags('Channels')
export class ChannelsController {
  constructor(
    private readonly channelsService: ChannelsService,
    private readonly chzzkService: ChzzkService,
  ) {}

  @Post('commercial')
  @ApiExcludeEndpoint()
  async commercial() {
    throw new NotImplementedException('WONT_IMPLEMENT');
  }

  @Get('ads')
  @ApiExcludeEndpoint()
  async ads() {
    throw new NotImplementedException('WONT_IMPLEMENT');
  }

  @Post('ads/schedule/snooze')
  @ApiExcludeEndpoint()
  async adsScheduleSnooze() {
    throw new NotImplementedException('WONT_IMPLEMENT');
  }

  @Get('')
  @ApiOperation({
    summary: 'Get Channel Information',
  })
  @ApiOkResponse({
    description: 'OK',
    type: TwitchGetChannelResponseDto,
  })
  @ApiQuery({
    name: 'broadcaster_id',
    required: true,
    explode: true,
    type: [String],
    description: '채널 ID 여러 개를 입력합니다',
  })
  async getChannel(
    @Query('broadcaster_id', ParseArrayPipe) broadcaster_ids: string[],
  ) {
    const uniqueBroadcasterIds = [...new Set(broadcaster_ids)];

    const chzzkResults = (await Promise.all(
      uniqueBroadcasterIds.map(async (id) => {
        const params: GetChannelByIdParamsDto = {
          channelId: id,
        };
        return await this.chzzkService.getChannelById(params);
      }),
    )) as ChzzkChannel[];

    // chzzkResults가 null인 경우에 대한 처리
    const chzzkResultsFiltered = chzzkResults.filter((chzzkResult) => {
      return chzzkResult !== null;
    });

    if (chzzkResultsFiltered.length === 0) {
      throw new NotFoundException('채널을 찾을 수 없습니다.');
    }

    const twitchResults = chzzkResults.map((chzzkResult) => {
      return this.channelsService.getChannelConverter(chzzkResult);
    });

    const response = {
      data: twitchResults,
    } as TwitchGetChannelResponseDto;

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
