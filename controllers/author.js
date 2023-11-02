const Author= require("../models/author")


const addAuthor=(req,res)=>{
    const author=new Author(req.body)
    author.save().then(()=>{
        res.status(201).json({
            model:author,
            message:"author added!"
        })
    }).catch((error)=>{
        res.status(401).json({
            error:error.message,
            message:"failed to add a author"
        })
    })
}

module.exports={
    addAuthor
}
