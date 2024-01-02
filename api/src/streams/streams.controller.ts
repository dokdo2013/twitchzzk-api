import {
  BadRequestException,
  Controller,
  Get,
  ParseArrayPipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { StreamsService } from './streams.service';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import {
  TwitchGetStreamsDto,
  TwitchGetStreamsResponseDto,
} from './dto/get-streams.dto';
import { ChzzkService } from 'src/chzzk/chzzk.service';
import {
  GetChannelByIdParamsDto,
  GetLiveStatusByIdParamsDto,
} from 'src/chzzk/dto/params.dto';
import { ChzzkLiveStatus } from 'src/chzzk/dto/response.dto';

@Controller('helix/streams')
@ApiTags('Streams')
export class StreamsController {
  constructor(
    private readonly streamsService: StreamsService,
    private readonly chzzkService: ChzzkService,
  ) {}

  @Get('')
  @ApiOperation({
    summary: 'Get Streams',
  })
  @ApiOkResponse({
    description: 'OK',
    type: TwitchGetStreamsResponseDto,
  })
  @ApiQuery({
    name: 'user_id',
    required: false,
    explode: true,
    type: [String],
    description: '채널 ID 여러 개를 입력합니다',
  })
  @ApiQuery({
    name: 'user_login',
    required: false,
    explode: true,
    type: [String],
    description: '채널 닉네임 여러 개를 입력합니다',
  })
  @ApiQuery({
    name: 'game_id',
    required: false,
    explode: true,
    type: [String],
    description: '게임 ID 여러 개를 입력합니다',
  })
  @ApiQuery({
    name: 'type',
    required: false,
    explode: true,
    type: String,
    description: '전체 조회시 all / 라이브만 조회시 live (default: all)',
  })
  @ApiQuery({
    name: 'language',
    required: false,
    explode: true,
    type: [String],
    description: '스트리밍 언어 태그 여러 개를 입력합니다',
  })
  @ApiQuery({
    name: 'first',
    required: false,
    explode: true,
    type: Number,
    description: '한 번에 조회할 스트리머 수를 입력합니다 (default: 20)',
  })
  @ApiQuery({
    name: 'before',
    required: false,
    explode: true,
    type: String,
    description: '커서를 이용해 이전 페이지를 조회합니다',
  })
  @ApiQuery({
    name: 'after',
    required: false,
    explode: true,
    type: String,
    description: '커서를 이용해 다음 페이지를 조회합니다',
  })
  async getStream(
    @Query('user_id', new ParseArrayPipe({ optional: true }))
    user_ids?: string[],
    @Query('user_login', new ParseArrayPipe({ optional: true }))
    user_logins?: string[],
    @Query('game_id', new ParseArrayPipe({ optional: true }))
    game_ids?: string[],
    @Query('type') type: 'all' | 'live' = 'all',
    @Query('language', new ParseArrayPipe({ optional: true }))
    languages?: string[],
    @Query('first', new ParseIntPipe({ optional: true })) first = 20,
    @Query('before') before?: string,
    @Query('after') after?: string,
  ): Promise<TwitchGetStreamsResponseDto> {
    // validate
    const uniqueUserIds = user_ids ? [...new Set(user_ids)] : undefined;
    const uniqueUserLogins = user_logins
      ? [...new Set(user_logins)]
      : undefined;
    const uniqueGameIds = game_ids ? [...new Set(game_ids)] : undefined;

    if (uniqueUserIds && uniqueUserLogins) {
      throw new BadRequestException(
        'user_id와 user_login은 동시에 사용할 수 없습니다.',
      );
    }
    if (uniqueUserIds && uniqueGameIds) {
      throw new BadRequestException(
        'user_id와 game_id는 동시에 사용할 수 없습니다.',
      );
    }
    if (uniqueUserLogins && uniqueGameIds) {
      throw new BadRequestException(
        'user_login과 game_id는 동시에 사용할 수 없습니다.',
      );
    }

    console.log(type, first, before, after);

    // FIXME: user_login/game_id/languages는 아직 미지원입니다.
    if (uniqueUserLogins) {
      throw new BadRequestException('user_login은 아직 미지원입니다.');
    }
    if (uniqueGameIds) {
      throw new BadRequestException('game_id는 아직 미지원입니다.');
    }
    if (languages) {
      throw new BadRequestException('languages는 아직 미지원입니다.');
    }

    // Logic Start
    const chzzkResults = (await Promise.all(
      uniqueUserIds.map(async (id) => {
        const params: GetLiveStatusByIdParamsDto = {
          channelId: id,
        };
        return await this.chzzkService.getLiveStatusById(params);
      }),
    )) as ChzzkLiveStatus[];

    const twitchResults: TwitchGetStreamsDto[] = [];
    for (let i = 0; i < chzzkResults.length; i++) {
      const chzzkResult = chzzkResults[i];
      const channelId = uniqueUserIds[i];
      const channelInfo = await this.chzzkService.getChannelById({
        channelId,
      } as GetChannelByIdParamsDto);

      twitchResults.push(
        this.streamsService.getLiveStatusConverter(channelInfo, chzzkResult),
      );
    }

    const response = {
      data: twitchResults,
      pagination: {},
    } as TwitchGetStreamsResponseDto;

    return response;
  }
}
