// function nameError(inputEle){
//         inputEle.style.outline= "none"  
//         inputEle.style.backgroundColor = "red"  
// } 

// function foo(){
//     console.log("hdbchbdhcbdh")
// }

// function bgColorChange(ele){
//     ele.style.backgroundColor = "lightgrey";
// }


// var para = document.getElementById("para");
// function nameError(inputEle){
//     if(inputEle.value.length < 3){
//         inputEle.style.outline= "none"  
//         inputEle.style.border= "1px solid red"
//         para.style.display = "block"
//     }else{
//         para.style.display = "none"
//         inputEle.style.border= "1px solid green"
//     }  
// }


// // var para = document.getElementById("para");
// function submitForm(){
//     var input = document.getElementById("input")
//     if(input.value.length < 3){
//         input.style.outline= "none"  
//         input.style.border= "1px solid red"
//         para.innerHTML = "Enter correct Name!"
//         para.style.color = "red"
//     }else{
//         para.innerHTML = "FORM SUBMITTED"
//         para.style.display = "block"
//         para.style.color = "green"
//     }
// }


// function game(image){
//     image.src = "./Images/game1.gif"
// }


// function gameOut(image){
//     image.src = "./Images/game1.png"
// }

// function game(image,ele){
//     if(image === "in"){
//         ele.src = "./Images/game1.gif"
//     }else{
//         ele.src = "./Images/game1.png"
//     }
// }


function inputFocus(inputele){
    inputele.style.outline = "none"
    inputele.style.border = "1px solid green"
}




function inputValidate(inputEle){
    
    var nameError = document.getElementById("nameError");
    if(inputEle.value.length < 3){
        inputEle.style.outline = "none";
        inputEle.style.border = "1px solid red";    
        nameError.style.display = "block";
        nameError.innerHTML= "Enter Correct Name!";
    }else{
        inputEle.style.border = "1px solid green";
        nameError.style.display = "none";
    }
}


function formSubmitted(){
    var input = document.getElementById("input");
    var nameError = document.getElementById("nameError")

    if(input.value.length < 3){
        input.style.outline = "none";
        input.style.border = "1px solid red";
        nameError.style.display = "block";
        nameError.style.color = "red";
        nameError.innerHTML = "Enter Correct Name!";
    }else{
        nameError.innerHTML = "FORM SUBMITTED";
        nameError.style.display = "block";
        nameError.style.color = "green";
    }
}