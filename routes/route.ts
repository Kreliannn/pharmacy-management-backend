import Router from 'express'
import supplierRoute from './supplier.route'
import productRoute from './product.route'
import transactionRoute from './transaction.route'

const routes = Router()

routes.use(supplierRoute)
routes.use(productRoute)
routes.use(transactionRoute)


export default routes