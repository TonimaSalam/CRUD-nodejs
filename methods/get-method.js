const users = require("../data/users.json");
const base_path= "/api/v1/users";
  
module.exports = (req,res) =>{
    const id = req.url.split("/").slice(-1)[0];
    if(req.url===base_path){
        res.statusCode=200;
        res.setHeader("Content-type","text/json");
        res.write(JSON.stringify(users));
        res.end();
    }
    else if(req.url===base_path+'/'+ id){
        let user = {}; 
        let flag=0;
        for(let i in users){
            if(users[i].id === id){
                user = users[i];
                flag=1;
            } 
        }
            if(flag){
                res.statusCode = 200 ;
                res.write(JSON.stringify(user));
                res.end();
            }
            else 
            {
                res.statusCode = 404;
                res.statusMessage = "user not found";
                res.end("You requested for an invalid user.");
            }
    }
    else{
        res.statusCode = 404;
        res.statusMessage = "URL not found";
        res.end("You requested invalid url."); 
    }
};