import { Test, TestingModule } from '@nestjs/testing';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { ApiResponseHandler } from '../../utils/apiResponseHandler';
import { error } from 'console';

describe('StockController', () => {
  let controller: StockController;
  let service: StockService;
  let apiResponseHandler: ApiResponseHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockController],
      providers: [StockService, ApiResponseHandler],
    }).compile();

    controller = module.get<StockController>(StockController);
    service = module.get<StockService>(StockService);
    apiResponseHandler = module.get<ApiResponseHandler>(ApiResponseHandler);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call getStockCount from Stock Service and handle succesful response', async () => {
    const skuCountResponse = { sku: 'sku', qty: 1 };
    const skuSuccessfulResponse = apiResponseHandler.handleSuccess(
      'Succesfully fetched stock details',
      skuCountResponse,
      200,
    );

    jest.spyOn(service, 'getStockCount').mockImplementation(async () => {
      return skuCountResponse;
    });

    expect(await controller.getStockCount('sku')).toMatchObject(skuSuccessfulResponse);
  });

  it('should call getStockCount from Stock Service and handle failed response', async () => {
    const skuCountResponse = { sku: 'sku', qty: 1 };
    const error = new Error('SKU not found');
    const skuFailedResponse = apiResponseHandler.handleFailed(
      'Stock details not found',
      error,
      404,
    );

    jest.spyOn(service, 'getStockCount').mockImplementation(async () => {
      throw error;
    });

    expect(await controller.getStockCount('sku')).toMatchObject(skuFailedResponse);
  });
});
