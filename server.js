const http = require("http");
const getReq = require("./methods/get-method");
const postReq = require("./methods/post-method");
const putReq = require("./methods/put-method");
const deleteReq = require("./methods/delete-method");
const users = require("./data/users.json");


const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res) =>{
    //req.users = users;
    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
        case "POST":
            postReq(req,res);
            break;
        case "PUT":
            putReq(req,res);
            break;
        case "DELETE":
            deleteReq(req,res);
            break;
        default:
            res.statusCode = 404;
            res.statusMessage = "Requested URL not found";
            res.end();                
    }
});

server.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})