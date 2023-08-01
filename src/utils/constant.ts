export class Constants {
  public static STOCK_FILE_NAME = 'stock.json';
  public static TRANSACTION_FILE_NAME = 'transactions.json';
}

export enum TransactionTypes {
  REFUND = 'refund',
  ORDER = 'order'
}

export interface Transaction {
  sku: string,
  type: TransactionTypes,
  qty: number,
}

export interface IApiResponse<T> {
  success: boolean;
  status?: number;
  message: string;
  data?: T;
  error?: any;
}