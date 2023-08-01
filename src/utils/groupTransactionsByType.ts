import { Transaction } from "./constant";

export const groupTransactionsByType = (transactions: Transaction[], key: string)=> {
  return transactions.reduce(function (transaction, x) {
    if (!transaction[x[key]]) {
      transaction[x[key]] = [];
    }
    transaction[x[key]].push(x);
    return transaction;
  }, {});
};
