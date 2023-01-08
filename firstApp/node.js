var http=require('http');
var server=http.createServer(function(req,res){
    if(req.url=='/'){
    //set request header
    res.writeHead(200,{'Contnt-Type':'text/html'});
    //set response content
    // res.write('<html><body><p>This is the home page.</p></body></html>');
    res.write(JSON.stringify({message:"Hello World"}));

    res.end();
    }else if(req.url=='/student'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is a student  Page.</p></body></html>');
        res.end();
    }else if(req.url=='/admin'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is admin page.</p></body></html>');
        res.end();
    }else{
        res.end('Invalid Request!');
    }
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running...');
// var fs=require('fs');
// fs.writeFile('test.txt','Hello world',(err,fd)=>{
// if(err)
// console.log(err);
// else
// console.log('Append operation complete');
// })
//FILE SYSTEM
// var fs = require('fs');

// fs.open('', 'r', function (err, fd) {
    
//                             if (err) {
//                             return console.error(err);
//     }
    
//                             var buffr = new Buffer(1024);
    
//     fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {
       
//                             if (err) throw err;
            
//                             // Print only read bytes to avoid junk.
//                             if (bytes > 0) {
//             console.log(buffr.slice(0, bytes).toString());
//         }
        
//                             // Close the opened file.
//         fs.close(fd, function (err) {
//                             if (err) throw err;
//         });
//     });
// });
//EventEmitter
// var events=require('events');
// var em=new events.EventEmitter();
// //Subscribe for the first event
// em.on('FirstEvent',(data)=>{
//     console.log('First Subscriber: '+data);
// });
// //Raising FirstEvent
// em.emit('FirstEvent',"This is my first Node.js event emitter.")


//by using addmitter()method


// var emitter=require('events').EventEmitter
// var em= new emitter();
// em.addListener('FirstEvent',(data)=>{
//     console.log('First Subscriber: '+data);

// })
// em.on('SecondEvent',(data)=>{
//     console.log('Second Subscriber: '+data);
// })
// em.emit('FirstEvent',"The first Subscriber");
// em.emit('SecondEvent','The secod Subscriber');

//Patterns for EventEmitter


//1.Return EventEmitter from a function
var emitter=require('events').EventEmitter;
function LoopProcessor(num){
    var e=new emitter();
    setTimeout(function(){
        for(let i=1;i<=num;i++){
            e.emit('Before Process', i);
            console.log('Processing number: '+ i);
            e.emit('After Process',i)
        }
    },2000)
return e;
}
var lp=LoopProcessor(3);
lp.on('Before Process',(data)=>{
    console.log('About to start the process for '+data);
})
lp.on('After Processing',(data)=>{
    console.log('Completed Processig '+data);
});
//2.Extend EventEmitter Class
var emitter=require('events').EventEmitter;
var util=require('util');
function LoopProcessor(num){
    var me=this;
    setTimeout(function(){
        for(var i=1;i<=num;i++){
            me.emit(' Before Process',i);
            console.log('Processing number: '+i);
            me.emit('After Process',i);
        }
    },2000)
    return this;
}
util.inherits(LoopProcessor,emitter)
var lp=new  LoopProcessor(3);
lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});