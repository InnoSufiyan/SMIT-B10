import express from 'express'
import {
    getProductsController,
    getProductController,
    addProductController,
    updateProductController,
    deleteProductController
} from '../controllers/productsController.js'

const productRoutes = express.Router()

// products get api
// api uri -->> /products
// GET method

productRoutes.get('/', getProductsController)

// product get api
// api uri -->> /products/sdadsadsads
// GET method
productRoutes.get('/:productId', getProductController)

// product add api
// api uri -->> /products
// POST method
productRoutes.post('/', addProductController)

// product update api
// api uri -->> /products/dadadadssads
// PUT method
productRoutes.put('/:id', updateProductController)

// product delete api
// api uri -->> /products/dadadadssads
// DELETE method
productRoutes.delete('/:id', deleteProductController)

export default productRoutes