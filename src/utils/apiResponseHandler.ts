import { Injectable, HttpStatus } from '@nestjs/common';
import { IApiResponse } from './constant';

@Injectable()
export class ApiResponseHandler {
  public handleSuccess(message: string, data: any | any[], status: HttpStatus): IApiResponse<any> {
    return {
      success: true,
      status: status,
      message,
      data,
    } as IApiResponse<any>;
  }

  public handleFailed(message: string, error: any, status: HttpStatus): IApiResponse<any> {
    return {
      success: false,
      status: status,
      message,
      error: error,
    } as IApiResponse<any>;
  }
}
