//run tsc app.ts to generate app.js file that can be linked to index.html

const num1Element = document.getElementById("num1") as HTMLInputElement; // while we select from ID we have to declare type our own
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button"); // typescript can aauto declare : htmlButton element to the attribute

const numResult: number[] = [];
const textResult: string[] = [];

function add(num1: number | string, num2: number | string) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  } else {
    return +num1 + +num2;
  }
}

function printResult(resultObj: { val: number; timestamp: Date }) {
  console.log(resultObj.val);
}

buttonElement?.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  numResult.push(result as number);
  const resultStirng = add(num1, num2);
  textResult.push(resultStirng as string);
  // console.log(result); //number type
  // console.log(resultStirng); //string type
  printResult({ val: result as number, timestamp: new Date() });
  console.log(numResult); // array type
});
