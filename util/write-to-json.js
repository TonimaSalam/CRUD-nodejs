const fs = require("fs");
const path = require("path");

module.exports = (data) =>{
    console.log("The data to write : ", data);
    try{
        fs.writeFileSync(
            path.join(__dirname,"..","data","usersl.json"),
            JSON.stringify(data),
            "utf-8"
        );
    }catch(err)
    {
        console.log(err);
    }

}