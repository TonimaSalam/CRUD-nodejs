module.exports = async (request) => {
    return new Promise((resolve, reject) => {
        try{
            let body = "";
            request.on("data",(chunk) =>{
                body+=chunk;
                //console.log(`body = ${body}`);
            });
            request.on("end",()=> {
                //console.log(`body1 = ${body}`);
                resolve(JSON.parse(body));
            })
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    });
}