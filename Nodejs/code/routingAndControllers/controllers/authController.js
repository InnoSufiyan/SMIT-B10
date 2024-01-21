import UsersSchema from '../models/user.js'

export const signupController = async (req, res) => {

    try {
        const { userName, userEmail, password } = req.body

        console.log(userName, "===>>> userName")
        console.log(typeof userName)

        // if (!userName || !userEmail || !password) return res.status(400).json({
        //     status: false,
        //     message: "Missing Fields"
        // })

        console.log(password, "====>>> password")

        if (password.length < 8) return res.status(400).json({
            status: false,
            message: "Password length should be minimum 8 characters"
        })

        const user = {
            userName: userName,
            email: userEmail,
            password: password
        }

        const userSchemaCheck = new UsersSchema(user)
        const usersSave = await userSchemaCheck.save()

        res.json({
            status: true,
            message: "Users Signed Up Successfully"
        })
    } catch (error) {
        res.json({
            status: false,
            message: error.message
        })
    }


}
export const loginController = async (req, res) => {
    try {
        const { userEmail, password } = req.body
        if (!userEmail || !password) return res.status(400).json({
            status: false,
            message: "Missing Fields"
        })

        const isUserExist = await UsersSchema.findOne({ email: userEmail })
        console.log(isUserExist, "====>>> isUserExist")
        if (isUserExist) {
            if (isUserExist.password === password) return res.status(200).json({
                status: true,
                message: "User Found"
            })

            res.status(400).json({
                status: false,
                message: "Invalid Credentials"
            })

        } else {
            res.status(400).json({
                status: false,
                message: "User Not Found"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Internal Server Error"
        })
    }
}
export const logoutController = (req, res) => {
    res.json({
        status: true,
        message: "Logout Successfully"
    })
}
export const forgetPasswordController = (req, res) => {
    res.json({
        status: true,
        message: "forget Password Successfully"
    })
}