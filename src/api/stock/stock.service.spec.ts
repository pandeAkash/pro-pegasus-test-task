import { Test, TestingModule } from '@nestjs/testing';
import { StockService } from './stock.service';

describe('StockService', () => {
  let service: StockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockService],
    }).compile();

    service = module.get<StockService>(StockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get stock count for existing sku', () => {
    expect(service.getStockCount('BGZ200017/86/40')).resolves.toMatchObject({ sku: 'BGZ200017/86/40', qty: 4875 });
  });

  it('should throw error if sku doesnt exists', async () => {
    try {
      await service.getStockCount('invalidSku');
    } catch (error) {
      expect(error.message).toBe('SKU doesnt exists');
    }
  });
});
