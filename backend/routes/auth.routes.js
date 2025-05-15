const express = require("express");
const User = require("../models/User")
const router = express.Router();
const authController = require("../controllers/auth.controller.");
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.midddleware");
const {
  validateLogin,
  validateRegister,
  checkValidation,
} = require("../middleware/validate.middleware");


router.post("/register", validateRegister, checkValidation, authController.register)
router.post("/login", validateLogin, checkValidation, authController.login)

router.get("/me", authMiddleware, authController.getMe)
router.get("/admin", authMiddleware, adminMiddleware, (req, res) =>{
    res.send("this is admin route")
})

router.get("/users", async (req, res)=>{
    const users = await User.find()
    const usersNumber = users.length

    res.status(201).json({message: usersNumber })
})

router.get("/test", (req, res) =>{
    res.send("hello world i'm testing my backend")
})

module.exports = router

