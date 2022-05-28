const fs=require('fs');
const net=require('net');

function pad(n) {
return  n<10 ? '0'+n:n;
}
const server=net.createServer(function(socket){
     const d=new Date();
     const s=d.getFullYear()+"-"
            +pad(d.getMonth()+1)+"-"
            +pad(d.getDate())+" "
            +pad(d.getHours())+":"
            +pad(d.getMinutes())+"\n";

    socket.write(s);
    socket.end();
})

server.listen(Number(process.argv[2]));