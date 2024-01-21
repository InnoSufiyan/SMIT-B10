import express from "express"
import { authRoute } from "./routes/authRoute.js"
import dotenv from 'dotenv'
import { dbConnection } from "./utils/config.js"
const app = express()
dotenv.config()
app.use(express.json())

dbConnection()



app.use("/auth", authRoute)
// app.use("/jobs", jobsRoute)
// app.use("/categories", categoriesRoute)
// app.use("/filterations", filterationsRoute)
// app.use("/users", usersRoute)
// app.use("/blogs", blogsRoute)
// app.use("/tutorials", tutorialsRoute)
// app.use("/companies", companiesRoute)

// app.post("auth/signup", (req, res) => {
//     res.json({
//         status: true,
//         message: "Sign up successfully",
//         data: []
//     })
// })
// app.post("auth/login", (req, res) => {
//     res.json({
//         status: true,
//         message: "Login in successfully",
//         data: []
//     })
// })
// app.post("auth/logout", (req, res) => {
//     res.json({
//         status: true,
//         message: "Logout successfully"
//     })
// })
// app.post("auth/forgetPassword", (req, res) => {
//     res.json({
//         status: true,
//         message: "Password changed successfully"
//     })
// })
// app.get("jobs", (req, res) => {
//     res.json({
//         status: true,
//         message: "All Jobs Data get Successfully",
//         data: []
//     })
// })
// app.get("jobs/:jobId", (req, res) => {
//     const { jobId } = req.params           //{jobId: "dadasdasda"}
//     res.json({
//         status: true,
//         message: "Job Data get Successfully",
//         data: {}
//     })
// })
// app.delete("jobs/:jobId", (req, res) => {
//     const { jobId } = req.params           //{jobId: "dadasdasda"}
//     res.json({
//         status: true,
//         message: "Job Deleted Successfully",
//     })
// })
// app.put("jobs/:jobId", (req, res) => {
//     const { jobId } = req.params           //{jobId: "dadasdasda"}
//     res.json({
//         status: true,
//         message: "Job Deleted Successfully",
//     })
// })
// app.patch("jobs/:jobId", (req, res) => {
//     const { jobId } = req.params           //{jobId: "dadasdasda"}
//     res.json({
//         status: true,
//         message: "Job Deleted Successfully",
//     })
// })
// app.post("category", (req, res) => {
//     res.json({
//         status: true,
//         message: "Category created Successfully",
//         data: {}
//     })
// })
// app.get("category", (req, res) => {
//     res.json({
//         status: true,
//         message: "Category get Successfully",
//         data: []
//     })
// })
// app.get("category/:categoryId", (req, res) => {
//     const { categoryId } = req.params
//     res.json({
//         status: true,
//         message: "Category get Successfully",
//         data: []
//     })
// })
// app.put("category/:categoryId", (req, res) => {
//     const { categoryId } = req.params
//     res.json({
//         status: true,
//         message: "Category get Successfully",
//         data: []
//     })
// })
// app.patch("category/:categoryId", (req, res) => {
//     const { categoryId } = req.params
//     res.json({
//         status: true,
//         message: "Category get Successfully",
//         data: []
//     })
// })
// app.delete("category/:categoryId", (req, res) => {
//     const { categoryId } = req.params
//     res.json({
//         status: true,
//         message: "Category get Successfully",
//         data: []
//     })
// })

// const PORT = 8000
app.listen(process.env.PORT, () => {
    console.log(`Server is started at port number ${process.env.PORT}`)
})