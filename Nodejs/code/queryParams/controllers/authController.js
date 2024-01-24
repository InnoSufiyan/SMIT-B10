import User from '../models/Register.js'

export const registerController = async (req, res) => {
    try {
        const { userName, email, password } = req.body
        if (!userName || !email || !password) return res.json({
            status: false,
            message: "Missing fields"
        })

        const user = await User.create({
            userName,
            email,
            password
        })

        res.json({
            status: true,
            message: "User Registered Successfully",
            data: user
        })
    } catch (error) {
        res.json({
            status: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}