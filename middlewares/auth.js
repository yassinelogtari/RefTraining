
const jwt = require("jsonwebtoken");
const user = require("../models/user");

module.exports.loggedMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;

    user.findOne({ _id: userId })
      .then((response) => {
        if (response) {
          req.auth = {
            userId: userId,
            role: response.role,
          };
          next();
        } else {
          res.status(401).json({ error: "L'utilisateur n'existe pas" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  } catch (error) {
    res.status(401).json({ error: "Erreur de token" });
  }
};
;

module.exports.isAdmin = (req, res, next) => {
  try {
    if (req.auth.role === "admin") {
      next();
    } else {
      res.status(403).json({ error: "Pas d'accès à cette route" });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
    console.log("yassine")
  }
};


  /* const jwt = require("jsonwebtoken")
const user = require ("../models/user")

module.exports.loggedMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET")
    const userId = decodedToken.userId 
    user.findOne({_id : userId})
    .then((response) => {
      if (response){
        req.auth ={
          userId: userId, 
          role: response.role, 
        }
        next()
      }else {
        res.status(401).json ({ error: "user does not exist "})
      }

    })
    .catch((error) => {

    res.status(500).json({error: error.message})
    })
  
    next()
  } catch (error) {
    res.status(401).json({ error }) 
  }
}
module.exports.isAdmin =(req,res,next) => {
  try {
    if (req.auth.role ==="admin"){
      next()
    }
    else {
        res.status(403).json ({error : "no access to this route"})}
    }
  catch(e) {
    res.status(401).json ({error : error.message})

    }

  }
*/
