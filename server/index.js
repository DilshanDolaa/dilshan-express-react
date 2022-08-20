const express = require("express");
const app = express();
const assets=require("../server/routes/assetman");

app.use("/api/asset", assets)

app.get("/api",(req,res)=>{
    res.send("Welcome to AssetIO");

});

app.listen(3006,function(){
    console.log("Started Server in Port 3006")
});