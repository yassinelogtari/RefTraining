const express=require("express")
const router=express.Router()
const BookController=require("../controllers/book")
const auth=require("../middlewares/auth")

router.get("/",auth.loggedMiddleware,auth.isAdmin,BookController.fetchBook)
router.post("/add",BookController.addBook)
router.delete("/:id",BookController.deletBook)
router.put("/:id",BookController.updateBook)


module.exports=router