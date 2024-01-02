import { ApiProperty } from '@nestjs/swagger';

export class TwitchGetChannelDto {
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
    description: '채널 언어 (ko로 고정)',
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

export class TwitchGetChannelResponseDto {
  @ApiProperty({
    description: '채널 정보',
    type: [TwitchGetChannelDto],
  })
  data: TwitchGetChannelDto[];
}
