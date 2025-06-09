import Router from 'express'
import {deleteProductController, getProductController, updateProductPriceCategoryController, updateProductYearController } from '../controller/product.controller'

const route = Router()


route.get('/product', getProductController)
route.delete('/product/:id', deleteProductController)
route.patch("/product/productPage", updateProductPriceCategoryController)
route.patch("/product/demandPage", updateProductYearController)

export default route