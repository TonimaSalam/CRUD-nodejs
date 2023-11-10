const requestBodyParser = require("../util/body-parser");
const users = require("../data/users.json");
const writeToJSON = require("../util/write-to-json");
const base_path = "/api/v1/users";
/// put method

module.exports = async (req,res) =>{
    const id = req.url.split("/").slice(-1)[0];

    if(req.url===base_path+'/'+id)
    {
        const body = await requestBodyParser(req);
        body.id = id;
        console.log("request body :" ,body);
        let valid = false;

        for(let key in users)
        {
            if(users[key].id===id){
                users[key]=body;
                valid = true;
                break;
            }
        }

        if(valid){
            writeToJSON(users);
            res.statusCode = 200;
            res.statusMessage = "ok";
            res.end("Your requested update is saved.");

        }
        else{
            res.statusCode = 404;
            res.statusMessage = "user not found";
            res.end("You requested update for an invalid user.");
        }
    }
    else{
        res.statusCode = 404;
        res.statusMessage = "not found";
        res.end("You requested invalid url.");
    }

}