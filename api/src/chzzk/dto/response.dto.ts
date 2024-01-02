import { ChzzkCommonResponse } from './common.dto';

export class ChzzkGetChannelResponse extends ChzzkCommonResponse {
  /**
   * Override the content property of ChzzkCommonResponse
   */
  content: ChzzkChannel;
}

export class ChzzkChannel {
  channelId: string;

  channelName: string;

  channelImageUrl: string;

  verifiedMark: boolean;

  channelType: string;

  channelDescription: string;

  followerCount: number;

  openLive: boolean;
}

export class ChzzkGetLiveStatusResponse extends ChzzkCommonResponse {
  /**
   * Override the content property of ChzzkCommonResponse
   */
  content: ChzzkLiveStatus;
}

export class ChzzkLiveStatus {
  liveTitle: string;
  status: string;
  concurrentUserCount: number;
  accumulateCount: number;
  paidPromotion: boolean;
  adult: boolean;
  chatChannelId: string;
  categoryType: string;
  liveCategory: string;
  liveCategoryValue: string;
  livePollingStatusJson: string;
  faultStatus: string;
}
