let var1 = 100;
let var2 = 500;
console.log("Before Swap");
console.log(var1,var2);

// SWAP BY USING TEMPORARY VARIABLE
let temp;

// Swapping of Var1 and Var2
temp = var1;
var1 = var2;
var2 =temp;

// After Swapping
console.log("After Swap");
console.log(var1,var2);