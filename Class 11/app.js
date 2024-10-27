// var now = new Date();
// var now = new Date().toDateString();
// var now = new Date().toTimeString();
// document.write(now.slice(0,3));


// var now = new Date().toLocaleDateString();
// var now = new Date().toLocaleTimeString();
// document.write(now);

// // console.log(new Date().getDay()); 
// document.write(`<br /> ${new Date().getDay()}  getDay`);
// document.write(`<br /> ${new Date().getMonth()} getMonth`);
// document.write(`<br /> ${new Date().getDate()}  getDate`);
// document.write(`<br /> ${new Date().getFullYear()} getFullYear`);
// document.write(`<br /> ${new Date().getHours()} getHours`);
// document.write(`<br /> ${new Date().getMinutes()} getMinutes`);
// document.write(`<br /> ${new Date().getSeconds()} getSeconds`);
// document.write(`<br /> ${new Date().getMilliseconds()} getMilliseconds`);
// document.write(`<br /> ${new Date().getTime()} getTime`);
// document.write(`<br /> ${new Date().getTimezoneOffset()} getTimezoneOffset`);

// var date = "oct 17,2024";
// var objectDate = (new Date(date));
// console.log( typeof date);
// console.log( typeof objectDate);
// var now = new Date();
// var dob = prompt("Enter your birth Year:", "oct 17,2023");
// var objectDate = (new Date(dob));

// var MillisecondsNow = now.getTime();
// var MillisecondsObjectDate = objectDate.getTime();

// var diff = MillisecondsNow - objectDate;
// console.log("diff",diff);

// var age =Math.floor( diff/(1000 *60 * 60 * 24 *365));
// document.write(`You are ${age} years old.`);   


//function
// console.log("Hello");
// console.log("World");

// function greet(){
//     alert("Hello Shoukat");
// }
// greet();

function calculator(){
    var number1 = +prompt("Enter number 0ne:");
    var number2 = +prompt("Enter number Two:");
    var operator = prompt("Enter operator:");
    if(operator === "+"){
        alert(number1 + number2 ,"Addition");
    }else if(operator === "-"){
        alert(number1 - number2 ,"Subtraction");
    }else if(operator === "*"){
        alert(number1 * number2 ,"Multiplication");
    }else if(operator === "/"){
        alert(number1 / number2 ,"Division");
    }else{
        alert("Invalid Input");
    }
}


