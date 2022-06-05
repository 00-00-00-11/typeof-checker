const typeofChecker = require("../index");

const check = [
    "a",
    [
        123,
        {
            test: "wow"
        },
        [
            345
        ]
    ],
    {
        noway: "a",
        epic: [
            "more?",
            "ok."
        ],
        kek: {
            a: 789
        }
    }
]

const required = [
    "string",
    [
        "number",
        {
            test: "string"
        },
        [
            "number"
        ]
    ],
    {
        noway: "string",
        epic: [
            "string",
            "string"
        ],
        kek: {
            a: "number"
        }
    }
]

const result = typeofChecker(check, required);
console.log(result); // true