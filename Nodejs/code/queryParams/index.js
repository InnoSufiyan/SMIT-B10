import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import { dbConnection } from './utils/config.js'
const app = express()

dotenv.config()

dbConnection()

// app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/products", productRoutes)



app.listen(process.env.PORT, () => {
    console.log(`Server is working on port number ${process.env.PORT}`)
})