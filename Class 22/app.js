// object methos

// var obj = {
//     firstName : "Shoukat",
//     lastName : "Rai",
//     fullName : function(){
//         return this.firstName + " " + this.lastName
//     }
// }

// console.log(obj.fullName())

// var objectFullName = obj.fullName()
// console.log(objectFullName)

// console.log(obj.firstName + " " + obj.lastName)



//constractor


// function Std(firstName, lastName, email){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
// // method in constructor
//     this.fullName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// var std1 = new Std ("shoukat" , "Rai" , "raishoukat033@gmail.com")
// console.log(std1.fullName())
// var std2 = new Std("sjsjn" , "sbahsbahb" , "jsnjsnjnjns");
// console.log(std2)

const questions = [
    {
        id: 1,
        question: "HTML stands for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Programming Language",
            c: "Hyper Text Styling Language",
            d: "Hyper Text Scripting Language"
        },
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "What does CSS stand for?",
        options: {
            a: "Cascading Style Sheets",
            b: "Creative Style Sheets",
            c: "Computer Style Sheets",
            d: "Colorful Style Sheets"
        },
        answer: "Cascading Style Sheets"
    },
    {
        id: 3,
        question: "Which programming language runs in a web browser?",
        options: {
            a: "Python",
            b: "Java",
            c: "JavaScript",
            d: "C++"
        },
        answer: "JavaScript"
    },
    {
        id: 4,
        question: "Which HTML tag is used to define an internal style sheet?",
        options: {
            a: "script",
            b: "css",
            c: "style",
            d: "link"
        },
        answer: "style"
    },
    {
        id: 5,
        question: "What does DOM stand for?",
        options: {
            a: "Document Object Model",
            b: "Data Object Model",
            c: "Document Orientation Model",
            d: "Dynamic Object Mode"
        },
        answer: "Document Object Model"
    },
    {
        id: 6,
        question: "Which HTML attribute is used to define inline styles?",
        options: {
            a: "font",
            b: "styles",
            c: "class",
            d: "style"
        },
        answer: "style"
    },
    {
        id: 7,
        question: "What does the `<a>` tag in HTML define?",
        options: {
            a: "Anchor (hyperlink)",
            b: "Audio file",
            c: "Alignment",
            d: "Animation"
        },
        answer: "Anchor (hyperlink)"
    },
    {
        id: 8,
        question: "Which property is used in CSS to change the background color?",
        options: {
            a: "bgcolor",
            b: "background-color",
            c: "color",
            d: "background"
        },
        answer: "background-color"
    },
    {
        id: 9,
        question: "Which HTML tag is used to display images?",
        options: {
            a: "picture",
            b: "image",
            c: "img",
            d: "src"
        },
        answer: "img"
    },
    {
        id: 10,
        question: "Which CSS property is used to change the text color?",
        options: {
            a: "font-color",
            b: "color",
            c: "text-color",
            d: "style"
        },
        answer: "color"
    },
    {
        id: 11,
        question: "What is the correct syntax for linking an external CSS file?",
        options: {
            a: "link src='styles.css'",
            b: "style src='styles.css'",
            c: "link rel='stylesheet' href='styles.css'",
            d: "stylesheet>styles.css</stylesheet"
        },
        answer: "link rel='stylesheet' href='styles.css'"
    },
    {
        id: 12,
        question: "Which JavaScript method is used to write HTML output?",
        options: {
            a: "console.log()",
            b: "document.write()",
            c: "alert()",
            d: "document.log()"
        },
        answer: "document.write()"
    },
    {
        id: 13,
        question: "Which HTML tag is used to create a numbered list?",
        options: {
            a: "ul",
            b: "ol",
            c: "li",
            d: "list"
        },
        answer: "ol"
    },
    {
        id: 14,
        question: "How do you declare a JavaScript variable?",
        options: {
            a: "variable myVar;",
            b: "v myVar;",
            c: "let myVar;",
            d: "var: myVar;"
        },
        answer: "let myVar;"
    },
    {
        id: 15,
        question: "What is the purpose of the `<head>` tag in HTML?",
        options: {
            a: "To define the main content of the page",
            b: "To include metadata and links to external files",
            c: "To display the title of the document",
            d: "To include the navigation bar"
        },
        answer: "To include metadata and links to external files"
    },
    {
        id: 16,
        question: "Which CSS property is used to make text bold?",
        options: {
            a: "font-weight",
            b: "font-style",
            c: "text-bold",
            d: "text-decoration"
        },
        answer: "font-weight"
    },
    {
        id: 17,
        question: "Which JavaScript keyword is used to define a constant variable?",
        options: {
            a: "var",
            b: "const",
            c: "let",
            d: "static"
        },
        answer: "const"
    },
    {
        id: 18,
        question: "How do you add a comment in JavaScript?",
        options: {
            a: "# This is a comment",
            b: "// This is a comment",
            c: "<!-- This is a comment -->",
            d: "* This is a comment *"
        },
        answer: "// This is a comment"
    },
    {
        id: 19,
        question: "Which HTML attribute specifies the source of an image?",
        options: {
            a: "src",
            b: "href",
            c: "link",
            d: "path"
        },
        answer: "src"
    },
    {
        id: 20,
        question: "Which JavaScript function is used to parse a string into a number?",
        options: {
            a: "parseInt()",
            b: "Number()",
            c: "parseFloat()",
            d: "All of the above"
        },
        answer: "All of the above"
    }
];


// console.log(questions[0] .answer)
var submitBtn = document.getElementById("submitBtn");
var questionElement = document.getElementById("questionElement");
var optionElement = document.getElementById("optionElement");
var pageNumber = document.getElementById("pageNumber");


var indexNumber = 0;
pageNumber.innerHTML =`${indexNumber + 1}/20` ;

function handleQuestion(){
    var optionObj = questions[indexNumber].options;
    questionElement.innerHTML = questions[indexNumber].question;
    optionElement.innerHTML = "";
    for(var key in optionObj){
        optionElement.innerHTML += `<li onclick = "checkAnswer(this)">${optionObj[key]}</li>`
    }
}

handleQuestion()


function nextQuestion(element){
if(indexNumber < questions.length - 1){
    indexNumber++;
    handleQuestion()
    pageNumber.innerHTML =`${indexNumber + 1}/20` ;
}else{
    element.style.display = "none";
    submitBtn.style.display = "inline";
}

}

function checkAnswer(element){
    var allElements = optionElement.children;
    var userSelection = element.innerHTML.toLowerCase();
    var ans = questions[indexNumber].answer.toLowerCase();
    var result = userSelection === ans;    
    
    if(result){
        element.style.backgroundColor = "green"
    }else{
        element.style.backgroundColor = "red"
    }


    for(var i = 0; i < allElements.length; i++){
        allElements[i].style.pointerEvents = "none";
    }

}

