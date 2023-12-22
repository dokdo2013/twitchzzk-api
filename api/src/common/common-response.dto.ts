import { ApiProperty } from '@nestjs/swagger';

export class NotImplementedExceptionWontImplementResponse {
  @ApiProperty({
    description: 'Error message',
    example: 'WONT_IMPLEMENT',
  })
  message: string;

  @ApiProperty({
    description: 'Error name',
    example: 'Not Implemented',
  })
  error: string;

  @ApiProperty({
    description: 'HTTP status code',
    example: 501,
  })
  statusCode: number;
}

export class NotImplementedExceptionImplementSoonResponse {
  @ApiProperty({
    description: 'Error message',
    example: 'IMPLEMENT_SOON',
  })
  message: string;

  @ApiProperty({
    description: 'Error name',
    example: 'Not Implemented',
  })
  error: string;

  @ApiProperty({
    description: 'HTTP status code',
    example: 501,
  })
  statusCode: number;
}
