import Router from 'express'
import supplierRoute from './supplier.route'
import productRoute from './product.route'

const routes = Router()

routes.use(supplierRoute)
routes.use(productRoute)


export default routes