const express = require("express");
const port = 8000;

const app = express();

app.listen(port, function(err){
    if(err){
        console.log("error encountered", err);
        return;
    }
    console.log("yup my express server is working ");
});