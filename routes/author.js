const express=require("express")
const router=express.Router()

const authorController=require("../controllers/author")


router.post("/addauthor",authorController.addAuthor)

module.exports=router