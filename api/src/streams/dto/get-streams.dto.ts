import { ApiProperty } from '@nestjs/swagger';

export class TwitchGetStreamsDto {
  @ApiProperty({
    example: '141981764',
    description: '채널 ID',
    nullable: false,
  })
  id: string;

  @ApiProperty({
    example: 'twitchdev',
    description: '채널 로그인 아이디',
    nullable: false,
  })
  user_id: string;

  @ApiProperty({
    example: 'TwitchDev',
    description: '채널 이름',
    nullable: false,
  })
  user_name: string;

  @ApiProperty({
    example: '409940',
    description: '게임 ID',
    nullable: false,
  })
  game_id: string;

  @ApiProperty({
    example: 'Science & Technology',
    description: '게임 이름',
    nullable: false,
  })
  game_name: string;

  @ApiProperty({
    example: 'live',
    description: '방송 상태',
    nullable: false,
  })
  type: string;

  @ApiProperty({
    example: 'TwitchDev',
    description: '방송 제목',
    nullable: false,
  })
  title: string;

  @ApiProperty({
    example: ['English'],
    description: '태그',
    nullable: false,
  })
  tags: string[];

  @ApiProperty({
    example: 0,
    description: '시청자 수',
    nullable: false,
  })
  viewer_count: number;

  @ApiProperty({
    example: '2021-05-06T18:00:15Z',
    description: '방송 시작 시간',
    nullable: false,
  })
  started_at: string;

  @ApiProperty({
    example: 'en',
    description: '방송 언어',
    nullable: false,
  })
  language: string;

  @ApiProperty({
    example:
      'https://static-cdn.jtvnw.net/previews-ttv/live_user_twitchdev-440x248.jpg',
    description: '방송 썸네일',
    nullable: false,
  })
  thumbnail_url: string;

  @ApiProperty({
    example: [],
    description: '태그 ID',
    nullable: false,
  })
  tag_ids: string[];

  @ApiProperty({
    example: true,
    description: '성인 콘텐츠 여부',
    nullable: false,
  })
  is_mature: boolean;
}

export class TwitchGetStreamsResponseDto {
  @ApiProperty({
    description: '채널 정보',
    type: [TwitchGetStreamsDto],
  })
  data: TwitchGetStreamsDto[];

  @ApiProperty({
    example: {
      cursor: 'eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ==',
    },
    description: '커서',
    nullable: false,
  })
  pagination: {
    cursor?: string;
  };
}
