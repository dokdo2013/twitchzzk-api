import { ApiProperty } from '@nestjs/swagger';

export class getChannelDto {
  @ApiProperty({
    example: 'a1b2c3d4e5f6g7h8i9j0',
    description: '채널 ID',
    nullable: false,
  })
  channelId: string;

  @ApiProperty({
    example: '채널 이름',
    description: '채널 이름',
    nullable: false,
  })
  channelName: string;

  @ApiProperty({
    example:
      'https://nng-phinf.pstatic.net/MjAyMzEyMTVfMjYy/MDAxNzAyNjIwMzQ5NjE1.tVl6ew-9iBd3Z3fEG8iRmzCFbUpf3qKj_o1BSXWB73og.kqiVM7bjKl40zr9m52PqMdO6cZB6mIXYA7PRIM388mcg.JPEG/Symbol.jpg?type=f120_120_na',
    description: '채널 프로필 이미지 URL',
    nullable: true,
  })
  channelImageUrl: string;

  @ApiProperty({
    example: false,
    description: '채널 인증마크 여부',
    nullable: false,
  })
  verifiedMark: boolean;

  @ApiProperty({
    example: 'STREAMING',
    description: '채널 타입',
    nullable: false,
  })
  channelType: string;

  @ApiProperty({
    example: '채널 설명',
    description: '채널 설명',
    nullable: false,
  })
  channelDescription: string;

  @ApiProperty({
    example: 0,
    description: '채널 팔로워 수',
    nullable: false,
  })
  followerCount: number;

  @ApiProperty({
    example: true,
    description: 'LIVE 방송 실행가능 여부',
    nullable: false,
  })
  openLive: boolean;
}

export class getChannelResponseDto {
  @ApiProperty({
    description: '응답 코드',
  })
  code: number;

  @ApiProperty({
    description: '응답 메시지',
    nullable: true,
  })
  message: string;

  @ApiProperty({
    description: '채널 정보',
  })
  content: getChannelDto;
}

// {
// 	"broadcaster_id": "141981764",
// 	"broadcaster_login": "twitchdev",
// 	"broadcaster_name": "TwitchDev",
// 	"broadcaster_language": "en",
// 	"game_id": "509670",
// 	"game_name": "Science & Technology",
// 	"title": "TwitchDev Monthly Update // May 6, 2021",
// 	"delay": 0,
// 	"tags": ["DevsInTheKnow"],
// 	"content_classification_labels": ["Gambling", "DrugsIntoxication", "MatureGame"],
// 	"is_branded_content": false
// }

export class twitchGetChannelDto {
  @ApiProperty({
    example: '141981764',
    description: '채널 ID',
    nullable: false,
  })
  broadcaster_id: string;

  @ApiProperty({
    example: 'twitchdev',
    description: '채널 로그인 아이디',
    nullable: false,
  })
  broadcaster_login: string;

  @ApiProperty({
    example: 'TwitchDev',
    description: '채널 이름',
    nullable: false,
  })
  broadcaster_name: string;

  @ApiProperty({
    example: 'en',
    description: '채널 언어',
    nullable: false,
  })
  broadcaster_language: string;

  @ApiProperty({
    example: '509670',
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
    example: 'TwitchDev Monthly Update // May 6, 2021',
    description: '방송 제목',
    nullable: false,
  })
  title: string;

  @ApiProperty({
    example: 0,
    description: '방송 지연 시간',
    nullable: false,
  })
  delay: number;

  @ApiProperty({
    example: ['DevsInTheKnow'],
    description: '방송 태그',
    nullable: false,
  })
  tags: string[];

  @ApiProperty({
    example: ['Gambling', 'DrugsIntoxication', 'MatureGame'],
    description: '방송 컨텐츠 분류 레이블',
    nullable: false,
  })
  content_classification_labels: string[];

  @ApiProperty({
    example: false,
    description: '브랜드 컨텐츠 여부',
    nullable: false,
  })
  is_branded_content: boolean;
}

export class twitchGetChannelResponseDto {
  @ApiProperty({
    description: '채널 정보',
    type: [twitchGetChannelDto],
  })
  data: twitchGetChannelDto[];
}
