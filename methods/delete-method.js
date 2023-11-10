const users = require("../data/users.json");
const writeToJSON = require("../util/write-to-json");
const base_path = "/api/v1/users";

module.exports = async (req,res) =>{
    const id = req.url.split("/").slice(-1)[0];
    if(req.url === base_path+'/'+id){
        console.log(typeof id, users[1].id);
        const usersAfterDelete = users.filter((user) => user.id != id);
        writeToJSON(usersAfterDelete);
        res.statusCode = 204;
        res.statusMessage = "no content";
        res.end("Your requested user deleted.");
    }
    else{
        res.statusCode = 404;
        res.statusMessage = "user not found";
        res.end("You requested to delete an invalid user.");
    }
}