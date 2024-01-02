import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { CommonOptionsDto } from './dto/common.dto';
import { GetChannelByIdParamsDto } from './dto/params.dto';
import {
  ChzzkChannel,
  ChzzkGetChannelResponse,
} from './dto/response.interface';

@Injectable()
export class ChzzkService {
  constructor() {}

  /**
   * Get Chzzk Channel Information by Channel ID
   * @param params
   * @param options
   * @returns ChzzkChannel | null
   */
  async getChannelById(
    params: GetChannelByIdParamsDto,
    options?: CommonOptionsDto,
  ): Promise<ChzzkChannel> {
    const apiUrl = `https://api.chzzk.naver.com/service/v1/channels/${params.channelId}`;

    const response = await axios
      .get(apiUrl)
      .then((response) => {
        if (response.data.content.channelId === null) {
          throw new NotFoundException('채널을 찾을 수 없습니다.');
        }

        return response.data as ChzzkGetChannelResponse;
      })
      .catch((error) => {
        if (options?.throwException) {
          throw new NotFoundException('채널을 찾을 수 없습니다.');
        }

        console.log(error);

        return {
          content: null,
        } as ChzzkGetChannelResponse;
      });

    return response.content;
  }
}
