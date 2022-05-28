const fs=require('fs');

const db=require('./demo.json');
// const newUser='santosh';
// const newDb=db;
// newDb.data.users.push(newUser);
// fs.writeFile('./demo.json',JSON.stringify(newDb),function(err,data)
// {
//     if(err) throw err;
//     else
//     console.log('done');
// })

console.log(db.data.users["xkasnjhcbasxaca"]);

// fs.writeFileSync('.demo.json',)

// const message=fs.readFile('./demo.json','utf8',function(err,data)
// {
//     console.log(JSON.parse(data));
// })