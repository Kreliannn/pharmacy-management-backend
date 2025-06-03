import { request } from "http";
import { transactionInterface, getTransactionInterface } from "../types/transaction.type";
import { Request, Response } from "express";
import { getTransactionService, createTransactionService } from "../services/transaction.service";

export const createTransactionController = async (request: Request, response: Response) => {
    const transaction: transactionInterface = request.body.transaction;
    await createTransactionService(transaction);
    const newTransaction = await getTransactionService();
    response.send(newTransaction)
}

export const getTransactionController = async (request: Request, response: Response) => {
    const transactions = await getTransactionService();
    response.send(transactions);
}











