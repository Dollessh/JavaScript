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


// typeOf Function Which tells us which type of Data is stored in perticular variable
temp = typeof "MOhit";
console.log(temp);


// pencil store karnya sati aapn pencilBox
let pencilBox = "Pencil";
console.log(pencilBox);
let penBox = "pen";
console.log(penBox);
// SWAP pencil with pen
let Box;  //box = temp
Box = penBox;
penBox = pencilBox;
pencilBox = Box;
console.log("=====");
console.log(penBox);
console.log(pencilBox);



