let arr = ['Banana','apple','Kiwi','Papaya','Guava'];
console.table(arr);

console.log("Logging all element of an arra");
arr.forEach(element => {
    console.log(element);
});
console.log("************************************************************************");

console.log("To String Method === used to convert the array to string seperated by commas");
let newArr = arr.toString();
console.log(newArr);
console.log("************************************************************************");

console.log("Join() ==== join method behaves like toString BUT in addition you can specify seperator");
let newArr1 = arr.join("*");
console.log(newArr1);
console.log("************************************************************************");

console.log("push() === push method is used to add a new element at the end of an Array");
arr.push("Mango");
console.table(arr); // Mango is added at last of an array
console.log("************************************************************************");

console.log("pop() === pop removes the last element of an array");
arr.pop();
console.table(arr); // Last element i.e Mango is removed
console.log("************************************************************************");

console.log("shift() ==  Shift method removed the first array element and shift all the element to lower index");
let shiftedEle = arr.shift();
console.table(arr);  // Shift removes the 1st element i.e Banana and shift all the element ot the lower index
console.log(shiftedEle);  
// SHIFT METHOD ALSO RETURN THE SHIFTED ELEMENT

console.log("************************************************************************");

console.log("unshift() == Unshift element add the element at the begining of array");
arr.unshift("Banana");  //Banana is added at the begining of array
console.table(arr);
arr.unshift("Mango");
console.table(arr);
console.log("************************************************************************");

arr[0] = "Coconut";
console.table(arr);
console.log("************************************************************************");
console.log("length() == length method is used to get the length of an array");
console.log(arr.length);
console.log("************************************************************************");
console.log("delete() == array element can be deleted but delete leaves UNDEFINEF holes in an array");
delete arr[0]; // In this case we have deleted the first element but there id holes of undefined element
console.log(arr);

console.log("************************************************************************");
console.log("concat() == method creates a new array by merging the existing array ");
let first = ['one','two','three'];
let second = ['four','five','six'];
let third = first.concat(second);
console.table(third);

//concat method takes string as an argument
let fourth = third.concat("seven");
console.table(fourth);