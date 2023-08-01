import { Controller, Get, Param, Query } from '@nestjs/common';
import { StockService } from './stock.service';
import { ApiResponseHandler } from '../../utils/apiResponseHandler';

@Controller('stock')
export class StockController {
  constructor(
    private readonly stockService: StockService,
    private readonly apiResponseHandler: ApiResponseHandler,
  ) {}

  @Get('/')
  async getStockCount(@Query('sku') sku: string) {
    try {
      const result = await this.stockService.getStockCount(sku);
      return this.apiResponseHandler.handleSuccess(
        'Succesfully fetched stock details',
        result,
        200,
      );
    } catch (error) {
      return this.apiResponseHandler.handleFailed(
        'Stock details not found',
        error,
        404,
      );
    }
  }
}
