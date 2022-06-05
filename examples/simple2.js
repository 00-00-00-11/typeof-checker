const typeofChecker = require("../index");

// You can start it as an array too! (You should check simple1.js first if you haven't already.)

const check = [
    "yay",
    123,

    [
        456 // Try making this into a string. (eg. "hey!") Once you change it into a string, the console will output 'true' instead of 'false'.
    ]
]

const required = [
    "string", // typeof check[0] === required[0] (aka typeof "string")
    "number", // typeof check[1] === required[1] (aka typeof "number")
    
    [
        "string"
    ]
]

const result = typeofChecker(check, required);
console.log(result); // false