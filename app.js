const express = require ("express")
const mongoose=require("mongoose")

const bookRoutes=require("./routes/book")
const userRouter=require("./routes/user")
const authorRouter=require("./routes/author")


mongoose
  .connect(
   "mongodb://127.0.0.1:27017/training"
  )
  .then(console.log("connected to mongodb"))
  .catch((err) => console.log(err));

const app = express()
app.use(express.json())


app.use("/api/book",bookRoutes)
app.use("/api/auth",userRouter)
app.use("/api/author",authorRouter)


module.exports = app
