import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { Constants, Transaction } from '../../utils/constant';
import { groupTransactionsByType } from '../../utils/groupTransactionsByType';

@Injectable()
export class StockService {
  getStockCount(sku: string): Promise<{ sku: string; qty: number }> {
    try {
      return this.processStocks(sku);
    } catch (error) {
      throw new Error(error);
    }
  }

  private async processStocks(sku: string) {
    const skuDetail = this.getSkuRecordsFromfile(
      sku,
      Constants.STOCK_FILE_NAME,
    );

    const skuDetailExists = skuDetail && skuDetail.length > 0;
    let totalQty = skuDetailExists ? skuDetail[0].stock : 0;

    const transactions: any = groupTransactionsByType(
      this.getSkuRecordsFromfile(sku, Constants.TRANSACTION_FILE_NAME),
      'type',
    );

    if (transactions && transactions.order && transactions.order.length > 0) {
      const orderQty = this.getQuantitySum(transactions.order, 'qty');
      const refundQty = this.getQuantitySum(transactions.refund, 'qty');
      totalQty = totalQty + orderQty - refundQty;
    } else {
      if (!skuDetailExists) {
        throw new Error('SKU doesnt exists');
      }
    }

    return {
      sku,
      qty: totalQty,
    };
  }

  private getSkuRecordsFromfile(sku: string, filename: string) {
    const data = JSON.parse(readFileSync(filename, 'utf-8'));
    return data.filter((record) => record.sku === sku);
  }

  private getQuantitySum(arr: Transaction[], key: string) {
    return arr.reduce((acc, current) => {
      return acc + current[key];
    }, 0);
  }
}
