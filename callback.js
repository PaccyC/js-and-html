const posts=[
     {title:'Post One', body:'This is post one'},
    {title: 'Post two', body: 'This is post Two'}
]
function getPosts(){
    setTimeout(function(){
    let output='';
     posts.forEach((post,index)=>{
      output += `<li>${post.title}</li>`
     });
    document.body.innerHTML=output
    },1000)
}
function createPost(post,callback){
setTimeout(()=>{
    posts.push(post);
    setTimeout(()=>{
//    posts.push(post)
createPost({title:'post four', body:'this is the fourth post'},getPosts)
    },
     5000)
    callback()
},2000)
}

createPost({title:'Post Three',body:'This is the third post'},getPosts)





