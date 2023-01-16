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
function createPost(post){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
           posts.push(post);
           const error=false;
           if(!error){
            resolve();
           }
           else{
            reject('Error:Something went wrong')
           }
           setTimeout(()=>{
          createPost({title:'post four', body:'this is the fourth post'},getPosts)
           },
            5000)
           
        },2000)
    });
}

// createPost({title:'Post Three',body:'This is the third post'})
// .then(getPosts)
// .catch(err=>console.log(err))


async function init(){
   await createPost({title:'Post Three',body:'This is the third post'})
     getPosts();
}

init();
//async /await /Fetch
// async function fetchUsers(){
//     const res=await fetch ('https://jsonplaceholder.typicode.com/users');
//     const data=await res.json();
//     console.log(data);
// }
// fetchUsers();

//Promise.all usage
// const promise1=Promise.resolve('Hello world')
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'   Goodbye'));
// const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>{
//     res.json();
// })
// Promise.all([promise1,promise2,promise3,promise4]).then((
//     values=>console.log(values)));