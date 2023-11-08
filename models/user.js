const mongoose=require("mongoose")

const userSchema=mongoose.Schema(
    {
    email:{type:String,require:true},
    password:{type:String,require:true},
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      }
    }
)

module.exports=mongoose.model("User",userSchema)