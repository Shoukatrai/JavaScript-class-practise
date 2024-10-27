// for(var i = 1; i <= 10;i++){
//     console.log(i);
// }

// var cities = ["karachi","lahore","islamabad","multan","delhi","mumbai"];
// document.write(cities[0], "<br />");
// document.write(cities[1], "<br />");
// document.write(cities[2], "<br />");
// document.write(cities[3], "<br />");

// for(var i = 0; i <= cities.length; i++){
//     document.write(`${i+1} ${cities[i]} <br />`);
// }



// var userCity = prompt("Enter your city!");
// var cities = ["karachi","lahore","islamabad","multan","delhi","mumbai"];
// for(var i = 0; i < cities.length; i++){
//     if(cities[i] == "karachi"){
//         document.write("welcome " + cities[i]);
//         break;
//     }
// }


// var userCity = prompt("Enter your city!");
// var cities = ["karachi","lahore","islamabad","multan","delhi","mumbai"];
// for(var i = 0; i < cities.length; i++){
//     console.log(cities[i]);
//     if(cities[i] == "karachi"){
//         document.write("welcome " + cities[i]);
//         break;
//     }
// }


// var isMatchFlag = "false";
// var cities = ["karachi","lahore","islamabad","multan","delhi","mumbai"];
// var userCity = prompt("Enter your city!");
// for(var i = 0; i < cities.length; i++){
//     console.log(cities[i]);
//     if(userCity === cities[i]){
//         isMatchFlag = true;
//         alert("Welcome"+ " to " + cities[i])
//         break;  
//     }
// }

// if(isMatchFlag = "false"){
//     alert("Not Found");
// }


for(var i = 1; i <= 5; i++){
    console.log("outer", i);
    for(var j = 10; j <= 50; j = j + 10){
        console.log("inner",j);
    }
}

// for (var i = 1; i <= 5; i++) {
//     console.log("outer", i);
//     for (var j = 10; j <= 50; j = j + 10) {
//       console.log("inner", j);
//     }
//   }