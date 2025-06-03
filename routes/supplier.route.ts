import Router from 'express'
import { createSupplierController, getSupplierController } from '../controller/supplier.controller'

const route = Router()


route.post('/supplier', createSupplierController)
route.get("/supplier", getSupplierController)


export default route