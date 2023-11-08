const mongoose=require("mongoose")
const {Schema}=mongoose

const categorySchema=mongoose.Schema({
    title: {
        type: String,
        required: true
      }
    
})

module.exports = mongoose.model("Category", categorySchema);