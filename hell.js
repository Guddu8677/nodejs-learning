const express = require('express');
const app = express();
 const port =  1000;


 app.get("/welcome" , function(req , res){

    res.send("Hello Space");
 });

 app.listen(port , function(){
    console.log(`Listen port ${port}`);
 });