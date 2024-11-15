var inputNote = document.querySelector("#inputNote");
var parent = document.querySelector("#parent");

var notesArray = [];

function addNote(){
    if(inputNote.value.length < 3){
        alert("Enter correct notes...");
        return;
    }

    var getNotes = localStorage.getItem("notes");
    //first time notes ko create krna:
    if(getNotes == null){
        var tempArray = [inputNote.value];
        localStorage.setItem("notes" , JSON.stringify(tempArray));
    }else{
        var tempArray = JSON.parse(getNotes);
        tempArray.unshift(inputNote.value);
        localStorage.setItem("notes" , JSON.stringify(tempArray));
    }

    renderUI();
    inputNote.value = ""
}


function renderUI(){
    var notesArray = JSON.parse(localStorage.getItem("notes"));
    var cardsUI = "";
    for(i = 0; i < notesArray.length; i++){
        cardsUI += `<div class="alert alert-secondary d-flex justify-content-between " role="alert">
            ${notesArray[i]}
            <div>
                <i id = "${i}" class="fa-solid fa-pen-to-square me-3" onclick = "editHandler(this)"></i>
                <i id = "${i}" class="fa-solid fa-delete-left" onclick = "deleteHandler(this)"></i>
            </div>
        </div>`
    }
    parent.innerHTML = cardsUI;
}


function editHandler(ele){
    var notesArray = JSON.parse(localStorage.getItem("notes"));
    var indexNumber = ele.id;
    var editPrompt = prompt("Enter edit value...");
    notesArray.splice(indexNumber, 1 , editPrompt);
    localStorage.setItem("notes" , JSON.stringify(notesArray));
    renderUI();
}



function deleteHandler(ele){
    var notesArray = JSON.parse(localStorage.getItem("notes"));
    var index = ele.id;
    notesArray.splice(index , 1);
    localStorage.setItem("notes" , JSON.stringify(notesArray))
    renderUI();
}


function deleteAll(){
    var notesArray = JSON.parse(localStorage.getItem("notes"));
    notesArray.splice(0);
    localStorage.setItem("notes" , JSON.stringify(notesArray))
    renderUI();
}