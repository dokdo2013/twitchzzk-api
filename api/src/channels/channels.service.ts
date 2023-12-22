import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import {
  getChannelDto,
  getChannelResponseDto,
  twitchGetChannelDto,
} from './dto/get-channel.dto';

@Injectable()
export class ChannelsService {
  async getChannel(
    channelId: string,
    throwError = false,
  ): Promise<getChannelResponseDto> {
    const apiUrl = `https://api.chzzk.naver.com/service/v1/channels/${channelId}`;

    const response = await axios
      .get(apiUrl)
      .then((response) => {
        return response.data as getChannelResponseDto;
      })
      .catch((error) => {
        console.log(error);
        if (throwError) {
          throw new NotFoundException('채널을 찾을 수 없습니다.');
        }

        return {} as getChannelResponseDto;
      });

    return response;
  }

  getChannelConverter(channelResponse: getChannelDto): twitchGetChannelDto {
    const twitchChannelInfo: twitchGetChannelDto = {
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
