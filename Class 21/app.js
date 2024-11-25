// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
// };


// var plan2 = {
//     name: "Professional",
//     price: 5.99,
//     space: 500,
//     transfer:5000,
//     pages:50,
// };


// var plan3 = {
//     name: "Ultimate",
//     price: 9.99,
//     space: 2000,
//     transfer: 200000,
//     pages: 500,
// };

// plan3.price = 10.99;

// plan1.name = "Simple";
// console.log(plan1.name)


// plan3.features = ["adding", "removing"];
// console.log(plan3)

// var plan4 = {};
// plan4.name = "shoukat";
// console.log(plan4)


// propertyExists = "features" in plan3;
// console.log(propertyExists)

var firstName = "Shoukat";

var stdObj = {
    firstName: "Shoukat",
    lastName: "Rai",
    age:20,
    email: "raishoukat033@gmail.com",
    gender: "male",
    // subject: ["HTML" , "CSS" , "JS"],
    subjects: [
        {
            name:"HTML",
            marks: 70
        },
        {
            name:"CSS",
            marks:80
        },
        {
            name:"JS",
            marks:60
        },
        {
            name:"React JS",
            marks:100
        }
    ],

};

console.log(stdObj.subjects[0])