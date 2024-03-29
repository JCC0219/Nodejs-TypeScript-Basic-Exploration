# Nodejs-TypeScript-Basic-Exploration
This branch is showing on how to configure simple REST API that build with node, express and typescript


## Table of Contents
- [**To setup and run**](#to-setup-and-run-the-current-basic-typscript-application)

- [**More Explanation**](#more-explanation)

= [**Extras TS Project**]


## To setup and run the current basic typscript application
1. **Clone the repository to your local machine.**
2. Install TypeScript globally if you haven't already: `npm install -g typescript`.
```bash
npm install -g typescript
```
3. Download all the package dependencies, run `npm install`.
4. To compile TypeScript code to JavaScript so that it can be understood by the browser, use the TypeScript Compiler (tsc). Run tsc to compile all TypeScript files in the current directory, or specify a specific file with tsc [filename].


## More Explanation
1. Install the @types packages for TypeScript typings. For example, to install @types/express for Express typings:
```bash
//example install type mododule in node application
npm install --save @types/express
npm install --save-dev @types/body-parser
npm install --save-dev @types/node
```
This will add the @types/express package as a development dependency in your project, allowing TypeScript to recognize and provide typings for Express. Remember to import the typings in your TypeScript files using import express from 'express'; to use them in your code.

2. Using TypeScript Basic Types:

- Number: TypeScript includes the number type to represent numeric values. For example: 
```js
let count: number = 5;
```

- String: The string type is used to represent textual data. Example: let message: string = "Hello, TypeScript!";
```js
let count: number = 5;
```

- Boolean: TypeScript has a boolean type for representing true/false values. Example: 
```js
let isActive: boolean = true;
```

- Array Type: Arrays in TypeScript can be typed using square brackets []. For example: 
```js
let numbers: number[] = [1, 2, 3];
```

- Any Type: The any type allows you to opt-out of type checking. Example: let data: 
```js
any = "This can be anything";
```

2. Using Interfaces Types:
- Interfaces in TypeScript are used to define the structure of an object.
- Example interface for a user object:
```js
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
}
```

- You can then use this interface to type variables or function parameters:
```js
let newUser: User = { id: 1, name: "John", email: "john@example.com" };
```

3. Type Assertions:
- Type assertions are a way to tell the TypeScript compiler that you know more about the type of a value than it does.
- Example:
```js
let userInput: unknown = "Hello, TypeScript!";
let inputLength = (userInput as string).length; // Type assertion
```

4. TypeScript can often infer the type of a variable based on its initialization. Example:
```js
let message = "Hello, TypeScript!"; // TypeScript infers message as type string
```

## Extras Explanation on TS Project

1. Activate the tsconfig.json: To activate the tsconfig.json file, run
```bash
tsc --init
```
2. Here's a basic explanation for each of the configuration options in `tsconfig.json` file:

`"module": "Node16"`: Specifies the module system to use when generating JavaScript code. In this case, it is set to Node16, indicating compatibility with Node.js version 16 and its module system.

`"moduleResolution": "Node16"`: Specifies how TypeScript should resolve node_module imports. Setting it to Node16 indicates that TypeScript should use Node.js's module resolution strategy.

`"rootDir": "./src"`: Specifies the root directory of TypeScript source files. TypeScript will only compile files within this directory and its subdirectories.

`"outDir": "./dist"`: Specifies the output directory for compiled JavaScript files. After compilation, TypeScript will place the generated JavaScript files in this directory.

`"strict"`: true: Enables strict type-checking options in TypeScript. This setting helps catch common programming errors and promotes writing more robust code.

These configurations help ensure that your TypeScript project is configured to best practices structure.






