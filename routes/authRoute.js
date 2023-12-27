const express= require("express")
const { model } = require("mongoose")
const { createUser } = require("../controller/userControl")
const router= express.Router()


router.post("/register", createUser)

module.exports=router