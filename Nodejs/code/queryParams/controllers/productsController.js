import Product from '../models/Product.js'

export const getProductsController = async (req, res) => {

    try {
        const { name, price, rating, brand, postedBy } = req.query
        let products
        if (rating && postedBy) {
            products = await Product.find({
                rating: { $gte: rating },
                postedBy: postedBy
            })
        } else {
            products = await Product.find()
        }

        res.json({
            status: true,
            message: products.length ? "Get All Products" : "No Products Found",
            data: products
        })
    } catch (error) {
        res.json({
            status: false,
            message: "Internal Server Error",
            data: error.message
        })
    }
}

export const getProductController = async (req, res) => {
    const { productId } = req.params  //65b1422e7986dc14eb758818

    try {
        // const products = await Product.find({
        //     _id: productId     //65b1422e7986dc14eb758818
        // })
        const product = await Product.findById(productId)

        // {
        //     _id: "65b1422e7986dc14eb758818"
        // }

        res.json({
            status: true,
            message: "Get Single Product",
            data: product
        })
    } catch (error) {
        res.json({
            status: false,
            message: "Internal Server Error",
            data: error.message
        })
    }
}
export const addProductController = async (req, res) => {
    try {
        const { name,
            price,
            rating,
            brand,
            postedBy } = req.body
        if (!name, !price, !rating, !brand, !postedBy) {
            return res.json({
                status: false,
                message: "Missing Fields"
            })
        }

        const product = await Product.create({
            name,
            price,
            rating,
            brand,
            postedBy
        })

        res.json({
            status: true,
            message: "Product added succesfully",
            data: product
        })
    } catch (error) {
        res.json({
            status: false,
            message: "Internal Server Error",
            data: error.message
        })
    }
}
export const updateProductController = (req, res) => {
    res.json({
        status: true,
        message: "Update Product"

    })
}
export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params

        const deleteProduct = await Product.findByIdAndDelete(id)

        res.json({
            status: true,
            message: "Deleted Product Successfully",
            data: deleteProduct
        })
    } catch (error) {
        res.json({
            status: false,
            message: error.message
        })
    }
}