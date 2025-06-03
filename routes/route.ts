import Router from 'express'
import supplierRoute from './supplier.route'

const routes = Router()

routes.use(supplierRoute)


export default routes