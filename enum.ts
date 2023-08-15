// Enums can be useful for creating a set of options 

enum breakfastChoices {
    "appam",
    "idiyappam",
    "chappathi",
    "porotta"
}

const myChoice = breakfastChoices.appam

// above code will product a large amount of js code ,we can solve this by putting a const infront of enum,
// it will generate only necessary code.

// below code is just 2 line js with const ,see line number 11,12 in ./dist/enum.js

const enum breakfastChoices2 {
    "appam",
    "idiyappam",
    "chappathi",
    "porotta"
}

const myChoice2 = breakfastChoices2.appam