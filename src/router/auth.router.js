const express = require("express")
const { login } = require("../controller/auth.controller")
const authRouter = express.Router()


authRouter.post( "/", login )


module.exports = authRouter