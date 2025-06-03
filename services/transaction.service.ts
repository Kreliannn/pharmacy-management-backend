import TransactionDb from "../model/transaction.model"
import { transactionInterface } from "../types/transaction.type"


export const createTransactionService = async (transaction: transactionInterface) => {
    await TransactionDb.create(transaction);
}

export const getTransactionService = async () => {
    const transactions = await TransactionDb.find();
    return transactions;
}





