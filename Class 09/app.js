// var cities =[];
// cities[0] = "karachi";
// cities[1] = "multan";
// console.log(cities);
// cities.length = 0;
// cities[0] = "bin";
// console.log("cities", cities);


// var cities = ["karachi","multan"];
// var str = "saylani";
// console.log(str[2]);    
// console.log(str.length);

// var str = "Jaafar Aman";


// var str ="pakistani";
// console.log(str);
// var strCopy = str.slice(0 , -1);
// console.log("strCopy", strCopy);

// var strCopy = str.slice(0, 3);
// console.log(strCopy);


// var str = "SaylaNi maSS it tRaining";
// var strUpper = str.toUpperCase()
// console.log(strUpper);
// var strLower = str.toLowerCase()
// console.log(strLower);

// document.write("<h1>" + str+ "</h1>");
// document.write(`<h1> ${strUpper} </h1>`);


// var str = "saylAni";
// var newStr = str.slice(0,1);
// console.log(newStr);
// var newStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
// document.write("newStr ",newStr);

// var str = "saylAni";
// var firstLetter = str.slice(0,1).toUpperCase();
// console.log(firstLetter);
// var otherLetter = str.slice(1).toLowerCase();
// console.log(otherLetter);
// var newStr = firstLetter + otherLetter;
// document.write(newStr); 
// console.log(newStr); 

// var userCity =prompt ("Enter your city Name:").toLowerCase();
// var citiesCollection = ["karachi","Lahore","multan","islamabad","hyderabad","rawalpindi","pishawar"];
// var flag = "false";
// for(var i = 0; i < citiesCollection.length; i++){
//     if(userCity == citiesCollection[i].toLowerCase())   {
//         flag = "true";
//         console.log(citiesCollection[i]);
//         alert("welcome to " + userCity);
//         break;
//     }
// }

// if(flag == "false"){
//     alert("Not found");
// }


// var str = "The New Yorker magazine doesn't allow the phrase 'World War II'.  They say it should be 'the Second World War'. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers";
// var str = "saylni mass it training program";
// console.log(str.indexOf("saylani"));
// console.log(str.lastIndexOf("i"));
// console.log(str.indexOf("i"));




// var citiesCollection = ["karachi","lahore","multan","islamabad","hyderabad","rawalpindi","pishawar"];
// var indexNum = citiesCollection.indexOf("multan");
// console.log("indexNum", indexNum);
// if(indexNum !== -1){
//     alert("Welcome");
// }else{
//     alert("not found");
// }

// var array  = [1,234,5,45,4545,65656,656,56,5,6565];
// var temp = array[0];
// for(var i = 0; i < array.length; i++){
//     if(temp < array[i]){
//         temp = array[i];
//     }
// }
// document.write(temp);







// var array  = [12,12,232,343,5465,65,65,6,676,7676,767];
// var temp = [0];
// for(var i = 0; i < array.length; i++){
//     if(temp < array[i]){
//         temp = array[i];
//     }
// }
// document.write(temp);

var str = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers";
var indexNum = str.indexOf("World War II");
console.log(indexNum);  
var firstPart = str.slice(0,indexNum);
var lastPart = str.slice(indexNum + 12);
document.write("<br />" + firstPart);
document.write("<br />" + lastPart);
document.write("<br />" + firstPart + " the Second World War " + lastPart);