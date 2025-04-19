const jwt  = require("jsonwebtoken")

const database = {
    username: "user",
    password : "user"

}

const login = (req,res) =>{
    const {password, username} = req.body
    
    if(password === database.password && username === database.username ){
        const token = jwt.sign( { name : "user"} , "STRONG_PASSWORD")
       res.send(token)
    }else {
        res.status(401)
    }

}


const verification = (req,res,next) => {
    const token = req.headers["authorization"]?.split(" ")[1]
    console.log(token);
    
    try {
    const data = jwt.verify( token, "STRONG_PASSWORD")
    console.log(data);
    
    

    
    if(data){
        next()
    }
    } catch(error){
         console.log(error);
                  res.sendStatus(401)
    }

}



module.exports = {
    login,verification
}