let arr = [2,34,67,55,88,7,6,5,0];
arr[6] = 99; 
console.log(arr);

//  includes() Method = Check whether the array contaiun given value or not
console.log(arr.includes(99));
console.log(arr.includes(01));
console.log("-------------------------");
// indexOf() method = return the index of first occurance of substring
console.log(arr.indexOf(99));
console.log(arr.indexOf(1)); // if the element is not found then it will return -1 a output
console.log("-------------------------");

//Traverse the array
 for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
 }
// we can use ForIn loop 
// for (const key in arr) {
//     if (Object.hasOwnProperty.call(arr, key)) {
//         const element = arr[key];
//         console.log(element); 
//     }
// }
console.log("-------------------------");

// Traverse the arrayb in reverse order
for (let index = arr.length-1;  index >= 0; index--) {
    const element = arr[index];
    console.log(element);
    
}
console.log("--------WAP to find even positioned value----------------");
// WAP to find even positioned value
for (let index = 0; index < arr.length; index++) {
    if(index %2 == 0)
    {
        const element = arr[index];
        console.log(element);
    }   
}
console.log("--------unShift() Method----------------");
// adds the  elemne tat the beginning
arr.unshift(007);
console.log(arr);

console.log("--------Shift() Method----------------");
// remove the first element of an array
arr.shift();
console.log(arr);


console.log("--------Slice() Method----------------");
// return the element between specified index
let slicedEle = arr.slice(2,8);
console.log(slicedEle);

console.log("--------Splice() Method----------------");
// help to insert element in middle of an array
console.log(arr);
arr.splice(6);// removes the elemnt from given index to the end
console.log(arr);
console.log("=================");
let arrSpliced = arr.splice(2,2); // It will remove 2 elemnt from 2nd index
console.log(arr);
console.log(arrSpliced);
console.log("========Insert Element=========");
arr.splice(1,0,111,222); // Insert element at index 1 and first 111 is inserted then after 222 is inserted
console.log(arr);

console.log("========Replace Element=========");
arr.splice(3,3,333,444,555,666);// Replaces the 3 element from 3rd index 
console.log(arr);
