const arr1 = [1,2,3];
const arr2 = [4,5,6];


// MERGING TWO ARRAY
// 1) By Using Spread Operator (...)

let mergedArr = [...arr1,...arr2];
console.log(mergedArr);

// 2)  By USing concat Method 
 let arr3 = arr1.concat(arr2);
 console.log(arr3);

    
//  We can resixe the array
arr1.length = 5;
console.log(arr1);