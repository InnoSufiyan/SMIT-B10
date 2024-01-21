export const signupController = (req, res) => {
      res.json({
        status: true,
        message: "Signup Successfully"
      })  
}
export const loginController = (req, res) => {
    res.json({
        status: true,
        message: "Login Successfully"
    })
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