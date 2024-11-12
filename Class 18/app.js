var inputNote = document.getElementById("inputNote");
var parent = document.getElementById("parent");
// console.log("parent",parent, "inputNote",inputNote);

function noteApp(){

// validation
    if(inputNote.value.length < 3){
        alert("Enter Correct Notes...")
        return;
    }
var UI = `<div class="p-3 alert alert-info d-flex  justify-content-between" role="alert" id="parent">
    ${inputNote.value}
        <div class="icons">
            <i class="fa-solid fa-pen-to-square me-3" onclick = 'editIcon(this)'></i>
            <i class="fa-solid fa-delete-left" onclick = 'deleteIcon(this)'></i>
        </div>
      </div>`

    parent.innerHTML += UI;
      
    inputNote.value = "  "
}


function deleteIcon(ele){
    ele.parentNode.parentNode.remove()
}


function editIcon(ele){
    var editPrompt = prompt("Enter edit value...");
    ele.parentNode.parentNode.firstChild.textContent = editPrompt
}

function deleteAllNotes(){
    parent.remove()
}
