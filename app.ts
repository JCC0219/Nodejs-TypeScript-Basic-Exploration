//run tsc app.ts to generate app.js file that can be linked to index.html

const num1Element = document.getElementById("num1") as HTMLInputElement; // while we select from ID we have to declare type our own
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button"); // typescript can aauto declare : htmlButton element to the attribute

// //shortcut generic type for array
// const numResult: number[] = [];
// const textResult: string[] = [];

const numResult: Array<number> = [];
const textResult: string[] = [];

type NumOrString = number | string;
type Result = { val: number; timestamp: Date };

//alternative when working with object type we can use interface as type
interface resultObj {
  val: number;
  timestamp: Date;
}

function add(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  } else {
    return +num1 + +num2;
  }
}

function printResult(resultObj: resultObj) {
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

const myPromise = new Promise<string>((resolve, reject) => { // Promise support generic type, specify the type that resolve response
  setTimeout(() => {
    resolve("It work!");
  }, 3000);
});

myPromise.then((result) => {
  console.log(result.split('w'));
});
