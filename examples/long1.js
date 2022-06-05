const typeofChecker = require("../index");

const check = {
    name: "a",
    bot: {
        token: 1,
        test: {
            lol: "e"
        }
    },
    test: [
        "a",
        123,
        {
            test: "a"
        },
        [
            123
        ]
    ]
}

const required = {
    name: "string",
    bot: {
        token: "number",
        test: {
            lol: "string"
        }
    },
    test: [
        "string",
        "number",
        {
            "test": "string"
        },
        [
            "number"
        ]
    ]
}

const result = typeofChecker(check, required);
console.log(result); // true