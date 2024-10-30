// function nameError(inputEle){
//         inputEle.style.outline= "none"  
//         inputEle.style.backgroundColor = "red"  
// }

function bgColorChange(ele){
    ele.style.backgroundColor = "lightgrey";
}


var para = document.getElementById("para");
function nameError(inputEle){
    if(inputEle.value.length < 3){
        inputEle.style.outline= "none"  
        inputEle.style.border= "1px solid red"
        para.style.display = "block"
    }else{
        para.style.display = "none"
        inputEle.style.border= "1px solid green"
    }  
}


// var para = document.getElementById("para");
function submitForm(){
    var input = document.getElementById("input")
    if(input.value.length < 3){
        input.style.outline= "none"  
        input.style.border= "1px solid red"
        para.innerHTML = "Enter correct Name!"
        para.style.color = "red"
    }else{
        para.innerHTML = "FORM SUBMITTED"
        para.style.display = "block"
        para.style.color = "green"
    }
}


