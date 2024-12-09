// function foo (){
//     console.log("addition")
// }

// const foo =()=>{
//     console.log("addition")
// }
// foo()

// const foo = num1 =>{
//     console.log("addition")
// }

// const foo = _ =>{
//     console.log("addition")
// }

// const foo = (num1, num2) =>{
//     return num1 + num2
// }
// foo()

// const foo = (num1, num2) => num1 + num2
// console.log(foo(2,10))

// const obj = {
//     firstName: "Shoukat",
//     lastName:"Rai",
//     fullName:function(){
//         console.log(this)
//     }
// }
// console.log(obj.fullName())


// const obj = {
//     firstName: "Shoukat",
//     lastName:"Rai",
//     fullName:()=>{
//         console.log(this)
//     }
// }
// console.log(obj.fullName())


// high-order array method 
// const array = [1,2,3,4,5,6];
// const modifiedArray = array.map((value,index,)=>{
    // console.log("value", value, "index", index)
    // return value
//     if(value % 2 ===0){
//         return value;

//     }else{
//         return value *2
//     }
// })

// console.log(array)
// console.log(modifiedArray)

// Notes: map new array bnata he, value ko change krne or update krne mein kam ata he, 
// value ko return krna zruri he. 

// filter 
// const array = [1,2,3,4,5,6];
// const arrayFilter = array.filter((value, index)=>{
//     // return value
//     if(value % 2 ===0){
//         return value
//     }else{
//         return value * 3
//     }
// })
// console.log(arrayFilter)
// notes: filter array ko filter krne men kam ata he, ye value ko update nhe krta,


// find  findIndex
// const array = [1,2,3,4,5,6];
// const findArray = array.find((value, index)=>{
//     // console.log(value)
//     if(value === 3){
//         // return true
//         return value
//     }
// })
// console.log(findArray)

// const array = [1,2,3,4,5,6];
// // const string = ["karachi", "lahore", "islambad","hyd","multan"];
// const findString = array.find((value, index)=>{
//     if(value === 7){
//         return value
//     }
// })
// console.log(findString)

