const http=require('http');
const bl=require('bl');

let urlList=[process.argv[2],process.argv[3],process.argv[4]];



urlList.map(url=>{
    http.get(url,res=>{
    res.pipe(bl(function(err,data){
        if(err) console.log(err);
        else{
            
            console.log(data.toString());
        }
    }))
})});