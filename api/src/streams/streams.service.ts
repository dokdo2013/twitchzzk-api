import { Injectable } from '@nestjs/common';
import { TwitchGetStreamsDto } from './dto/get-streams.dto';
import { ChzzkChannel, ChzzkLiveStatus } from 'src/chzzk/dto/response.dto';

@Injectable()
export class StreamsService {
  constructor() {}

  getLiveStatusConverter(
    channelInfo: ChzzkChannel,
    liveStatus: ChzzkLiveStatus,
  ): TwitchGetStreamsDto {
    const twitchStream: TwitchGetStreamsDto = {
      id: channelInfo?.channelId,
      user_id: channelInfo?.channelId,
      user_name: channelInfo?.channelName,
      game_id: liveStatus?.liveCategory,
      game_name: liveStatus?.liveCategoryValue,
      type: 'live',
      title: liveStatus?.liveTitle,
      tags: [],
      viewer_count: liveStatus?.concurrentUserCount,
      started_at: '2024-01-01T00:00:00Z',
      language: 'ko',
      thumbnail_url: 'todo:thumbnailUrl',
      tag_ids: [],
      is_mature: liveStatus?.adult,
    };

    return twitchStream;
  }
}
