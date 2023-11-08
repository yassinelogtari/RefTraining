const express=require("express")
const router=express.Router()

const catController=require("../controllers/category")


router.post("/addCat",catController.addaCategory)

module.exports=router