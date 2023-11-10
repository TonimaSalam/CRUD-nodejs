const requestBodyParser = require("../util/body-parser");
const users = require("../data/users.json");
const writeToJSON = require("../util/write-to-json");
const base_path= "/api/v1/users";
module.exports = async (req,res) =>{
    if(req.url === base_path)
    {
        try{
            let body = await requestBodyParser(req);
            body.id = (users.length? users.length+1 : 1 ).toString();
            users.push(body);
            writeToJSON(users);
            //console.log("request body :" ,body);
            res.write(JSON.stringify(body));
            res.statusCode = 201;
            res.statusMessage = "user created";
            res.end();
        }
        catch(err){
            res.write(JSON.stringify(err));
            res.end();
            //console.log(err);
        }
        res.end();
    }
    else {
        res.statusCode = 404;
        res.statusMessage = "not found";
        res.end("You requested invalid url.");
    }
}