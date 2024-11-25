// (function showDate(){
//     var todayDate = new Date();
//     document.querySelector(".date").innerText = todayDate.toDateString();
// })()


// Long Approach

// function getTime(){
//     var todayDate = new Date()
//     var hours = todayDate.getHours()
//     var minutes = todayDate.getMinutes()
//     var seconds = todayDate.getSeconds()
//     var session = 'AM'

//     if(hours == 0){
//         hours = 12;
//     }else if (hours > 12){
//         session = 'PM'
//         hours = hours - 12;
//     }

//     hours = hours < 10 ? 0 + "" + hours : hours 
//     minutes = minutes < 10 ? 0 + "" + minutes : minutes
//     seconds = seconds < 10 ? 0 + "" + seconds : seconds 

//     var clockTime = hours + " : " + minutes + " : " + seconds + " " + session;
//     document.querySelector(".time").innerText = clockTime;     

// }


// Short Approach

// function getTime(){
//     var clockTime = new Date().toLocaleTimeString([] , {hour : '2-digit' , minute : '2-digit' , second: '2-digit'})
//     document.querySelector(".time").innerText = clockTime;     

// }



// var intervalRef;
// function startTime(){
//    intervalRef =  setInterval(getTime , 1000)   
// }

// function stopTime(){
//     clearInterval(intervalRef);
// }




var minHeading = document.getElementById("minHeading");
var secHeading = document.getElementById("secHeading");
var msecHeading = document.getElementById("mSecHeading");

var min = 0
var sec = 0
var msec = 0
var ineterval;


function startTimer(){
    console.log("startTimer()")
    ineterval = setInterval(timer, 10)
}


function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec == 100){
        msec = 0
        sec++
        secHeading.innerHTML = sec;
        if(sec == 60){
            sec = 0
            min++
            minHeading.innerHTML = min;
        }
    }
}

function stopTimer(){
    clearInterval(ineterval)
}

function resetTimer(){
    clearInterval(ineterval)
    min = 0
    sec = 0
    msec = 0


    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    msecHeading.innerHTML = "00"
}