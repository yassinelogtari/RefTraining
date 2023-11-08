const mongoose = require ("mongoose")
const {Schema}=mongoose
const authorSchema = mongoose.Schema(
    {
        lastname: {type: String, required: true},
        firstname:{ type: String,required:true},
        nationality: { type :String,required :false},
    }
)
module.exports = mongoose.model("Author", authorSchema)