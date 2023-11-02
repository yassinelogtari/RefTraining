const mongoose=require("mongoose")
const {Schema}=mongoose

const bookSchema=mongoose.Schema({
    title:{type:String,require:true},
    author:{type:Schema.Types.ObjectId,ref:'Author'},
    genre: { type: [String], required: true },
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
})

module.exports=mongoose.model("Book",bookSchema)