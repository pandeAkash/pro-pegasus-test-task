import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { ApiResponseHandler } from '../../utils/apiResponseHandler';

@Module({
  controllers: [StockController],
  providers: [StockService, ApiResponseHandler]
})
export class StockModule {}
