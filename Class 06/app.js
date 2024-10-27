document.write("<h1>JavaScript Class 06</h1>");


// var fruit1 = "apple";
// var fruit2 = "orange";


var fruits = ["apple","orange"];
// console.log("Fruits",fruits[1]);
fruits.pop();  //remove last index
// console.log("Fruits",fruits[1]);
// fruits.push("mango");
// console.log("fruits",fruits[1]);
fruits.push("mango",123,34425,true);
// console.log(fruits);
// console.log(fruits)
fruits.shift()  //remove first index
// console.log(fruits)
fruits.unshift("Banana")   //add first index
// console.log(fruits)

console.log(fruits)
// var copyFruits = [];
// copyFruits = fruits.slice(1,3);
// console.log(copyFruits)
// copyFruits = fruits.slice(0,-2);
// console.log(copyFruits);

//fruits.splice = (targetpoint, delcount, values)

// fruits.splice(0, 1)
// console.log(fruits)

// var fruit = prompt("Enter fruit name:");
// var fruit1 = prompt("Enter fruit1 name:");
// fruits.splice(fruits.length, 1, fruit,fruit1);
// console.log(fruits);


// for( initialization, condition, increment/decreament){
    // block of statement
// }

// for(var i = 1; i <= 10; i++){
//     console.log("Hello Shoukat",i);
// }

// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

var uName = prompt("Enter your name:");
// document.write("<h1>Hello" + " " + uName + "</h1>");
document.write("<h1>Hello" + " " + uName + "</h1>");