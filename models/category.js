const mongoose=require("mongoose")
const {Schema}=mongoose

const categorySchema=mongoose.Schema({
    title: {
        type: String,
        enum: ["Horror", "Mystery", "Science Fiction", "Romance", "Fantasy", "Thriller"],
        required: true,
      }
    
})

module.exports = mongoose.model("Category", categorySchema);