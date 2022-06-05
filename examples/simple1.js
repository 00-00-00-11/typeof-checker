const typeofChecker = require("../index");

const check = {
    test: "yay",
    num: 123,

    obj: {
        works: "a" // Try changing "a" to anything but a string. (eg. 12345) Then, the console will log "false".
    },

    array: [
        "this is a string.",
        456
    ]
}

const required = {
    test: "string", // typeof check.test === required.test (aka typeof "string")
    num: "number", // typeof check.num === required.num (aka typeof "number")

    // DO NOT DO THIS:
    //obj: "object"

    // DO THIS INSTEAD TO CHECK THE "required.obj"'S VALUES.
    obj: {
        works: "string"

        // anotherobj: {},
        // anotherarray: []
    },

    // WORKS FOR ARRAYS TOO.
    array: [
        "string",
        "number"
        
        // {},
        // []
    ]
}

const result = typeofChecker(check, required);
console.log(result); // true