const fs =require('fs');

const read = fs.readFile('greet.txt', 'utf-8',(err,data) =>{
    if(err){
        console.log('Error', err);
    }
    else{
        console.log(data);
    }
})


const write = fs.writeFile('greet.txt', 'Hello People',(err,data) =>{
    if(err){
        console.log('Error', err);
    }
    else{
        console.log(data);
    }
})


const update = fs.appendFile('greet.txt', ' Hello Citizen',(err, data) =>{
    if(err){
        console.log('Error', err);
    }
    else{
        console.log(data);
    }
})

const deletefile = fs.unlink('greet.txt',(err, data) =>{
    if(err){
        console.log('Error', err);
    }
    else{
        console.log('File Deleted', data);
    }
})
