import express from "express"
import { adminTestController, login, logout, register } from "../controllers/auth.controller.js"
import authMiddleware from "../middleware/auth.middleware.js"
import { isAdmin } from "../validators/admin.validator.js"

const authRouter = express.Router()

authRouter.post("/register",register)
authRouter.post("/login",login)
authRouter.post("/logout",authMiddleware,logout)

authRouter.post("/change-access",authMiddleware,isAdmin,adminTestController)


export default authRouter