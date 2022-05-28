const fs=require('fs');
const http=require('http');
const files=process.argv[3];
server=http.createServer(function(request,response)
{
fs.createReadStream(files).pipe(response);
})

server.listen(process.argv[2]);
