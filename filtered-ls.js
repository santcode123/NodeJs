const fs =require('fs');
const path=require('path');


const ext='.'+process.argv[3];

fs.readdir(process.argv[2],'utf8',function(err,files)
{
    if(err) console.log(err)
    else{
        files.forEach(function(file){
            if(path.extname(file)===ext) console.log(file);
        })
    }
})

