const path=require('path');
const fs =require('fs');



module.exports=function userFunction( dirPath,ext,callback){ 
    
   fs.readdir(dirPath,'utf8',(err,files)=>{
       if(err) callback(err,null);
       else{
         
          files= files.filter((file)=>(path.extname(file)===('.'+ ext)));
           callback(null,files);
       }
   })
 
}



