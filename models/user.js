const mongoose=require("mongoose")

const userSchema=mongoose.Schema(
    {
    email:{type:String,require:true},
    password:{type:String,require:true}
    }
)

module.exports=mongoose.model("User",userSchema)