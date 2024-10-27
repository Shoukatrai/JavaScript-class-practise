function input(value){
    var input = document.getElementById("input");
    input.value += value;
}

function allClear(){
    var input = document.getElementById("input");
    input.value = "";
}

function removeDigit(){
    var input = document.getElementById("input")
    input.value = input.value.slice(0,-1);
}

function result(){
    var input = document.getElementById("input");
    var ans =eval( input.value);
    input.value = ans;
}