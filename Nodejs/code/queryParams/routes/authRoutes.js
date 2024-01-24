import express from 'express'
import { registerController } from '../controllers/authController.js'

const authRoutes = express.Router()

// register api
// api uri -->> /auth/register
// POST method

authRoutes.post('/register', registerController)

export default authRoutes