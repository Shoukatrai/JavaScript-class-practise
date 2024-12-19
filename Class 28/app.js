// const foo = ()=>{
//     try {
//         const firstName = "Jaffar";
//         console.log("firstName" , firstName)   
//         console.log("lastName" , lastName)   
//     } catch (error) {
//         console.log(error.message)
//     }   
// }

// foo()


// const myPromise = new Promise((resolve, reject)=>{
//     const bool = false;
//     if(bool){
//         resolve({
//             staus: true,
//             message: "suuccefully",
//             data: []
//         })
//     }else{
//         reject({
//             staus: false,
//             message: "rejected",
//             data: null
//         })
//     }
// })

// .then(response =>{
//     console.log("response", response)
// })

// .catch(error=>{
//     console.log("error", error)
// })


const fetchData = async ()=>{
    try {
         const response =await fetch("https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false").then(res=>res.json());
         console.log(response)   
    } catch (error) {
        console.log(error)
    }
}

fetchData()