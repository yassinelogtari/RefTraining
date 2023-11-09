const { model } = require("mongoose")
const Book=require("../models/book")
const Aut=require("../models/author")
const cat = require("../models/category");

const fetchBook=(req,res)=>{
    Book.find().populate('author').populate('category').then((books)=>{
        res.status(201).json({
            model:books,
            message:"this is all books"
        })
        
    }).catch((error)=>{
        res.status(401).json({
            error:error.message,
            message:"failed"
        })
    })
    
}

const addBook = (req, res, next) => {
    const { title, author,category} = req.body;
    const newBook = new Book({ title, author,category});
  
    Aut.findOne({ _id: author })
      .then((authorResponse) => {
        if (!authorResponse) {
          res.status(401).json({ error: "Auteur introuvable!" });
        } 
     else {
          cat.findOne({ _id: category })
            .then((categoryResponse) => {
              if (!categoryResponse) {
                res.status(401).json({ error: "Categorie introuvable!" });
              } else {
                newBook.save()
                  .then((newBook) => {
                    res.json(newBook);
                  })
                  .catch((err) => {
                    res.status(400).json({ erreur: "Échec de la création du livre" });
                  });
              }
            })
            .catch((categoryError) => {
              res.status(400).json({ erreur: "Erreur lors de la recherche de la catégorie" });
            });
        }
      })
      .catch((authorError) => {
        res.status(400).json({ erreur: "Erreur lors de la recherche de l'auteur" });
      });
  };


/*const addBook=(req,res)=>{
    const book=new Book(req.body)
    book.save().then(()=>{
        res.status(201).json({
            model:book,
            message:"book added!"
        })
    }).catch((error)=>{
        res.status(401).json({
            error:error.message,
            message:"failed to add a book"
        })
    })
}*/
const deletBook=(req,res)=>{
        Book.findOneAndDelete({_id:req.params.id})
        .then(()=>{
            res.status(201).json({
                message:"book deleted"
            })
        }).catch((error)=>{
            res.status(401).json({
                error:error.message,
                message:"book not found"
            })
        })
}

const updateBook=(req,res)=>{
    Book.findOneAndUpdate({_id:req.params.id},
        req.body,
        {new :true}
    )
    
    .then((book)=>{
        if(!book){
            res.json({
                message:"book not found"
            })
        }
        else{
            res.status(200).json({
                message:"book found and updated succesfuly"
            })
        }0
    }).catch((error)=>{
        res.status(401).json({
            error:error.message
        })
       
    })
    
}


const findbookwithinstance=(req,res)=>{

const booksame= new Book ({title:"cab"});
booksame.findBooksTitle().then((books)=>{
  res.status(401).json({
    books
  })
}).catch((err)=>{
  console.error(err);
})

}

module.exports={
    fetchBook,
    addBook,
    deletBook,
    updateBook,
    findbookwithinstance
}