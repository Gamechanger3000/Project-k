const http=require("http")
const myserver=http.createServer((req,res)=>
{
    if(req.url="/"){
        console.log(req,url);
        res.setHeader('Content-type','text/plain')
        res,statusCode="200"
        res.end("welcome to multiverse")
    }
    else{
        rs.statusCode="400"
        res.end("not found")
    }
res.setHeader('Content-type','text/hml')
res.statusCode="200"
res.end("<h1> </h1>")

})
myserver.listen(5000,()=>{console.log("server is runnig");})