// Shallow Copy -: when when a reference variable is copied into another reference variable 
// by using Assignment operator then shallow copy of object is created
// Example

console.log("*********Shallow Copy**************");

let car = {
    brand : "BMW",
    model : 2015,
    color : "Red"
};
// console.table(car);


let vehicle = car; //Shallow copy is done
console.table(vehicle);


//Deep Copy -: Unlike the shallow copy Deep Copy also makes the copy of old object , and allocates a
//  Seprates memory location to the newly created object and then assigns all the copied memble to the
// new one

// To make deep Copy we use following method
//  1 -: USing Spread Operator
//  2 -: Using Object.Assign
//  3 -: Using JSON.Parse(JSON.Stringify())


console.log("Deep Copy using Spread Operator ");
let objClone = {...car};
// console.log(objClone);
objClone.brand = "Mercedes";
console.table(objClone);
console.table(car);


// 2 -: Using Object.Assign

console.log("Deep Copy Using Object.Assign method");
let objClone1 = Object.assign({},car);
objClone1.brand = "Mitsubishi";
console.table(objClone1);
console.table(car);


//  3-: Using JSON.Parse(JSON.Stringify())
console.log("Deep Copy USing JSON.Parse(JSON.Stringify())");
let objClone2 = JSON.parse(JSON.stringify(car));
objClone2.brand ="Ford";
console.table(objClone2);

//THIS METHOD IS USEFUL ONLY WHEN THE OOBJECT IS SMALL AND HAS SERIALIZABLE PROPERTY
//IF THE OBJECT IS VERY LARGE THEN THERE IS RISK OF DATA LOSS
//TO OVERCOME THIS DRAWBACK WE USE LODASH METHOD 
//LODASH IS THE JAVASCRIPT LIBRARY THAT PROVIDES MULTIPLE UTILITY FUNCTION ONE OF
//THE MOST COMMONLY USED LODASH FUNCTION IS cloneDeeo() method
// THI9S METHOD HELPS IN DEEP CLONNING OF AN OBJECT AND ALSO CLONES THE NON-SERIALIZAble property WHICH WERE THE LIMITATIION OF JSON.Stringify()


console.log("Deep Copy USing lodash method");
const lodash = require('lodash');
var objClone3 = lodash.cloneDeep(car);
objClone3.brand = "Toyota";
console.table(objClone3);