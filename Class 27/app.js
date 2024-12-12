//find

// const arr = [15,1,2,3,4,4,5,6,7,9];
// const findValue = arr.findIndex((val, index)=>{
//     console.log("value" , val)
//     if(val ===15){
//         return val
//     }
// })
// console.log(findValue);

// const arr = [15,1,2,3,4,4,5,6,7,9];
// const filterArr = arr.filter((val, index)=>{
//     console.log("val" , val)
//     if(val === 4){
//         return val
//     }
// })

// console.log(filterArr)

//fecth()
// .then() => JSON convert
// .then()
// .catch()



//promise's
// const myPromise  = new Promise((resolve, regect)=>{
//     const api = true;
//     if(api){
//         resolve("API call successfully")
//     }else{
//         regect("Something went wrong")
//     }
// }).then((result)=>{
//     console.log("result" , result)
// }).catch((error)=>{
//     console.log("error" ,error)
// })

// console.log(myPromise)


// const myPromise = new Promise((resolve, regect)=>{
//     const api = false;
//     if(api){
//         resolve("API call successfully")
//     }else{
//         regect("Something went wrong")
//     }
// }); 

// myPromise.then((result)=>{
//     console.log(result)
// });

// myPromise.catch((error)=>{
//     console.log(error)
// })



// async await

// const reqApi =async ()=>{
//     console.log("Hello world 1")
//     console.log("Hello world 2")
//     let api = await false
//     console.log("hello world 3" , api)
// } 

// console.log(reqApi())

const fetchApi =async  ()=>{
    // const response = await fetch("https://fakestoreapi.com/products").then((response)=>{
    //     return response.json()
    // })
    try {
        
    const response  = await fetch("https://fakestoreapi.com/products").then(response =>response.json())
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}

fetchApi()