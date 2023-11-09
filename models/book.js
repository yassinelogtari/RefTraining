const mongoose=require("mongoose")
const {Schema}=mongoose

const bookSchema=mongoose.Schema({
    title:{type:String,require:true},
    author:{type:Schema.Types.ObjectId,ref:'Author'},
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
})

bookSchema.methods.findBooksTitle = function(cb) {
    return mongoose.model('Book').find({ title: this.title }, cb);
  };

bookSchema.statics.findtwoBooks = function(cb) {
    return mongoose.model('Book').find().limit(2)
  };

module.exports=mongoose.model("Book",bookSchema)