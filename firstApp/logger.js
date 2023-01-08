// console.log(__filename)
// console.log(__dirname);

// const EventEmitter=require('events')
// const emitter=new EventEmitter();
// var url='http://mylogger.io/log';
// class Logger extends EventEmitter{
//     log(message){
//         console.log(message);
//         //Raise an event
// this.emit('messageLogged',{id:1,url:'http://'});


//     }
// }
//      module.exports = Logger; 

//Starting of lesson 2
const Log={
    info:function(info){
        console.log('information: '+info);
    },
    warning:function(warning){
    console.log('warning :'+warning);
    },
    error:function(error){
        console.log('error :'+error);
    }
};
module.exports=Log;
module.exports.log=function(msg){
    console.log(msg);
};
module.exports=function(fname
    ,lname){
        this.fname=fname;
        this.lname=lname;
        this.fullName=function(){
            return this.fname+ " "+this.lname;
        }

    }