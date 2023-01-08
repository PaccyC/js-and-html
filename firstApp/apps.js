

//Modules
// const log= require('./logger.js')
// // console.log(logger);
// log('messages');
// const path=require('path')
// var pathObj=path.parse(__filename);
// console.log(pathObj);
// const os=require('os');
// var totalMemory=os.totalmem();
// var freeMemory=os.freemem();
// console.log(totalMemory)
// console.log(freeMemory);
// //file system module
// const fs=require('fs')
// const files=fs.readdirSync('./')
// console.log(files);
// fs.readdir('./',function(err,files){
//     if(err)console.log('Error',err)
//     else console.log("Result",files)
// })
// //events modules
// const EventEmitter=require('events')
// const emitter=new EventEmitter();
// //register emitter
// emitter.on('messageLogged',(arg)=>{
//     console.log('Listener Called',arg);
// })
// const Logger=require('./logger')
// const logger=new Logger();
// logger.log('message')
// //Raise an event
// emitter.emit('messageLogged',{id:1,url:'http://'});
//Raise:logging (data:message)
//HTTP module
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write('Hello world');
        res.end();
    }
//     if(req.url==='/api/courses'){
//         res.write(JSON.stringify([1,2,3]))
//         res.end();
//     }
// });
// server.on('connection',(socket)=>{ 
//      console.log('New Connection');
// });
server.listen(30000);
console.log('Listening on port 30000...')



//starting of the lesson 2
// var myLogModule=require('./logger');
// myLogModule.info('Module has loaded');
// myLogModule.error('module is unable to load')
// myLogModule.warning('warning');
// var msg=require('./logger');
// msg.log('Hello world');
var person=require('./logger')
var person1=new person('Aime','Paccy')
console.log(person1.fullName())