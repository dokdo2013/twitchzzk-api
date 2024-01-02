/**
 * Common options for all requests
 */
export class CommonOptionsDto {
  /**
   * Throw exception when error occurs
   */
  throwException: boolean = false;
}

export class CommonGetByIdParamsDto {
  /**
   * Channel ID
   */
  channelId: string;
}

export class ChzzkCommonResponse {
  /**
   * Response code
   */
  code: number;

  /**
   * Response message
   */
  message: string;

  /**
   * Response content
   * Override this property in child class
   */
  content: any;
}
