const fs=require('fs');
const map = require('through2-map');
const http=require('http');

const portNumber=Number(process.argv[2]);

const server=http.createServer(function(request,response)
{
    if(request.method==='POST')
    {
    request.pipe(map(function(chunk)
    {
        return chunk.toString().toUpperCase();
    })).pipe(response)
   }
   else{
       return response.end('send me a post request /n');
   }
})
server.listen(portNumber);

