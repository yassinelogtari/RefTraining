const Category= require("../models/category")


const addaCategory=(req,res)=>{
    const category=new Category(req.body)
    category.save().then(()=>{
        res.status(201).json({
            model:category,
            message:"category added!"
        })
    }).catch((error)=>{
        res.status(401).json({
            error:error.message,
            message:"failed to add a category"
        })
    })
}

module.exports={
    addaCategory
}
