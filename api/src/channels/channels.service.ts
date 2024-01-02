import { Injectable } from '@nestjs/common';
import { TwitchGetChannelDto } from './dto/get-channel.dto';
import { ChzzkChannel } from 'src/chzzk/dto/response.interface';

@Injectable()
export class ChannelsService {
  constructor() {}

  getChannelConverter(channelResponse: ChzzkChannel): TwitchGetChannelDto {
    const twitchChannelInfo: TwitchGetChannelDto = {
      broadcaster_id: channelResponse?.channelId,
      broadcaster_login: channelResponse?.channelName,
      broadcaster_name: channelResponse?.channelName,
      broadcaster_language: 'ko',
      game_id: 'todo:gameId',
      game_name: 'todo:gameName',
      title: 'todo:liveTitle',
      delay: 0,
      tags: [],
      content_classification_labels: [],
      is_branded_content: false,
    };

    return twitchChannelInfo;
  }
}
