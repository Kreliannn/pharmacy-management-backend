import Router from 'express'
import { getTransactionController, createTransactionController } from '../controller/transaction.controller'

const route = Router()


route.post('/transaction', createTransactionController)
route.get("/transaction", getTransactionController)


export default route