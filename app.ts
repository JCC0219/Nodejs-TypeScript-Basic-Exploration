//run tsc app.ts to generate app.js file that can be linked to index.html

const num1Element = document.getElementById("num1") as HTMLInputElement; // while we select from ID we have to declare type our own
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button"); // typescript can aauto declare : htmlButton element to the attribute

function add(num1: number, num2: number) {
  return num1 + num2;
}

buttonElement?.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  console.log(result);
});
