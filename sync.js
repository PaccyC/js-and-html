function one(call_two){
    call_two();
    console.log('step one has ended .Please call step 2');
}
const two =()=>{
    console.log('Step 2');
}
one(two);

//production process
let stocks={
    Fruits:['apple','mango', 'strawberry','banana'],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    toppings:['chocolate','peanuts']
}

// const order=(Fruit_name,call_production)=>{
//    setTimeout(()=>{
//    console.log(`${stocks.Fruits[Fruit_name]} has been selected`);
//    call_production();
//    setTimeout(()=>{
//   console.log('The food  has been chopped');
//   setTimeout(()=>{
//   console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//   setTimeout(()=>{
//     console.log(`The machine was started`);

//     setTimeout(()=>{
//         console.log(`${stocks.holder[0]} was selected`);
//         setTimeout(()=>{
//       console.log(`${stocks.toppings[0]} was added`);
//       setTimeout(()=>{
//      console.log("Serve icecream");
//               },2000)
//             },3000)
//           })
//        },1000)
//      },1000)
//    },2000)
//  },2000)
//     // console.log('Order placed, please call production');
// }
// let production=()=>{
//     setTimeout(()=>{
//         console.log('Production has started');
//     },000)
//     // console.log('Order received starting production');
// }
// order(0,production);

//Promises
let is_shop_open=true;
let order=(time,work)=>{
return new Promise( (resolve,reject)=>{
 if(is_shop_open){
    setTimeout(()=>{
    
        resolve(work())
    },time)
 }
 else{
    console.log('our shop is closed');
 }
 });

};
order(2000,()=>{
    console.log(`${stocks.Fruits[0]} is picked`);
})
.then(()=>{
    return  order(000,()=>{
        console.log('Producton has started');
    })
})
.then(()=>{ 
    return  order(2000,()=>{
        console.log(`${stocks.liquid[0]}selected and ${stocks.liquid[1]}was added`);
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.holder[1]} was got to hold  ${stocks.liquid[0]}`);
    })
})
.then(()=>{
    return order(3000,()=>{
        console.log( `${stocks.toppings[1]} was selested as addition` );
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log();

    })

})