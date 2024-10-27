// document.write("<h1>JavaScript Class 07</h1>");

// console.log("Hello Shoukat");


// document.write("<h1>Hello Shoukat</h1>");
// document.write("<h1>Hello Shoukat</h1>");
// document.write("<h1>Hello Shoukat</h1>");
// document.write("<h1>Hello Shoukat</h1>");
// document.write("<h1>Hello Shoukat</h1>");
// document.write("<h1>Hello Shoukat</h1>");
// document.write("<h1>Hello Shoukat</h1>");
// document.write("<h1>Hello Shoukat</h1>");
// document.write("<h1>Hello Shoukat</h1>");
// document.write("<h1>Hello Shoukat</h1>");

//for Loop

// for(var i =1; i <= 100; i++){
//     console.log(i);
// }

// for(var i = 1; i <= 100; i++){
//     if(i % 2 !==0){
//         console.log("Odd", i)
//     }
// }


// for(var i = 1; i <= 100; i++){
//     if(i % 2 ==0){
//         console.log("Even", i)
//     }
// }

// var num1 = 10;
// console.log(num1++)
// console.log(num1)

// for(var i = 1; i <= 10; i++){
//     document.write("<h1>Hello Shoukat</h1>");
// }


// Print Odd and even Number
// var startNum = prompt("Enter starting Number:");
// var endNum = prompt("Enter Ending Number:");
// for(var i = startNum; i <= endNum; i++){
//     // if(i % 2 ==0){
//     //     console.log("even"i);
//     // }
//     if(i % 2 !=0){
//         console.log("odd",i);
//     }
// }

// var arr = ["Karachi","Multan","Lahore","RawalPindi","Islamaabd","Hyderabad","Quetta","Mithi",112,12123,13,1,3,32,32,4242,4];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// for(var i =0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// 1 x 2 = 2
// i x num = i*num 


// var num = prompt("Enter the number to generate table:");
// for(var i =1; i <= 10; i++){
//     console.log(num + " x " + i + " = " + num*i)
// }

// var firstName = prompt("Enter your first name:")
// var lastName = prompt("Enter your last name:")
// console.log(`My name is ${firstName} ${lastName}  ${10<10}`)

// var firstName = prompt("Enter your first name:");
// firstName += " rai";
// console.log(firstName)



// var userNames = ["Ali","Ahmad","Ashraf","Shoukat","Rai","Manoj","Daim","Awan","Mahadev","Kumar"];
// var temp = "";
// for(var i = 0; i < userNames.length; i++){
//     temp += `<div class="card">
//         <div class="card-body">${i + 1}.  ${userNames[i]} </div>
//     </div>`
// }

// console.log(temp)
// document.write(temp)



var cities = ["Karachi","Lahore","Islamabad","Quetta","Umerkot","Mithi","Diplo","Islamkot"];
var temp = "";
for(var i = 0; i < cities.length; i++){
    temp += `
    <div class="card">
        <div class="card-body">${i +1}. ${cities[i]} </div>
    </div>`
}
// console.log(temp);
document.write(temp);