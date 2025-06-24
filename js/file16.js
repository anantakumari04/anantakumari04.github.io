//promises

// function f1(a){
//     //to just delay to see
    
//     // setTimeout(()=>{return 5;},1000)

//     return new Promise((resolve,reject)=>{

//         if(a>0)
//          resolve(a);
//         else
//         reject("Something went wrong")
//     });
    
// } 


// function f2(x){

//     console.log(x+7)

// }

// const n = f1()   //synchronous means one after one execution do not wait for anything

// const result = f2(n)
// console.log(result)

// f1(1)

// .then((n)=>f2(n))
// .catch((err)=>console.log(err));
// // buy().then((n) => pay(n));


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())  //fetch data coming in res then convert in json to see us
// .then((data)=>{             //parsed data in data variable

//     data.map(val=>{
//         console.log(val.name,val.email)
//     })

// })    
// .catch((err)=>console.log(err));


//asyn await 


const fetchData = async() =>{  //when use await then add async to parent function

    const res = await fetch("https://jsonplaceholder.typicode.com/users");  //fetch function return promise that's why use await before this as data is dependent on res i.e fetch

    const data = await res.json();

    data.map(val=>{
        console.log(val.name);
    })

    

};

fetchData();