function str(para = ""){
    alert( "Hello " + para);
}




function getUserName(){
var userName = document.getElementById("userName");
// console.log("userName",userName)
console.log(userName.value);
// console.log(userName.placeholder);
// console.log(userName.type);
// console.log(userName.value);
}


function setValue(){
    var userName = document.getElementById("userName");
    userName.value = "Shoukat";


}


function login(){
    var email = document.getElementById("email");
    var password = document.getElementById("password")
    console.log("email",email.value)
    console.log("password",password.value);
}

function showPassword(){
    var password = document.getElementById("password");
    console.log(password.type);
    password.type = "text";
}


function hidePassword(){
    var password = document.getElementById("password");
    console.log(password.type);
    password.type = "password";
}