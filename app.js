"use strict";
//run tsc app.ts to generate app.js file that can be linked to index.html
const num1Element = document.getElementById("num1"); // while we select from ID we have to declare type our own
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button"); // typescript can aauto declare : htmlButton element to the attribute
// //shortcut generic type for array
// const numResult: number[] = [];
// const textResult: string[] = [];
const numResult = [];
const textResult = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResult.push(result);
    const resultStirng = add(num1, num2);
    textResult.push(resultStirng);
    // console.log(result); //number type
    // console.log(resultStirng); //string type
    printResult({ val: result, timestamp: new Date() });
    console.log(numResult); // array type
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It work!");
    }, 3000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
