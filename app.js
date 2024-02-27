//run tsc app.ts to generate app.js file that can be linked to index.html
var num1Element = document.getElementById("num1"); // while we select from ID we have to declare type our own
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector("button"); // typescript can aauto declare : htmlButton element to the attribute
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
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    var resultStirng = add(num1, num2);
    console.log(result);
    console.log(resultStirng);
});
