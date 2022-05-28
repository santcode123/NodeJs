const path=require('path');
const fs =require('fs');
const userFunction=require('./mymodule');

const ext= process.argv[3];
const dirPath=process.argv[2];

function callback(err,files){
    if(err) console.log(err);
    else{
        files.forEach((file)=>{
            console.log(file);
        })
    }
}

userFunction(dirPath,ext,callback);
