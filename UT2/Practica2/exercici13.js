let variableA = "A";
let variableB = "B";
let variableC = "C";

console.log(`${variableA}, ${variableB}, ${variableC}`);

let temp = variableB;
variableB = variableC;
variableC = temp;

console.log(`${variableA}, ${variableB}, ${variableC}`);
