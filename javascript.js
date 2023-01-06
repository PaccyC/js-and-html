// var person={
//     firstName:"ABAYISENGA",
//     lastName:"Aime pacifique",
//     DOB:27-2-2007,
//     fullName: function(){
//         return this.firstName + " "+ this.lastName;
//     }

// };
// console.log(this);
const video={
    title :'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this, tag);
        },{firstName:'paccy'});
    }
};
video.showTags();