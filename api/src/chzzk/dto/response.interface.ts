export interface ChzzkGetChannelResponse {
  code: number;

  message: string;

  content: ChzzkChannel;
}

export interface ChzzkChannel {
  channelId: string;

  channelName: string;

  channelImageUrl: string;

  verifiedMark: boolean;

  channelType: string;

  channelDescription: string;

  followerCount: number;

  openLive: boolean;
}
