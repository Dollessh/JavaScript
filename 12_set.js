let setOfNum = new Set();
console.log(typeof(setOfNum));
// SET IS THE COLLECTION OF UNIQUE ELEMENT
// THERE IS NO DUPLICATE ELEMENT
// Adding element in th set
console.log("===============Adding element==============");
setOfNum.add(2);
setOfNum.add(5);
setOfNum.add(7);
setOfNum.add(9);
console.log(setOfNum);


console.log("==========Adding Duplicate element=============");
//It will not allow duplicate element
setOfNum.add(9)
console.log(setOfNum);

console.log("===============Checking How Many element available into the set============");
let size =setOfNum.size;
console.log(size);

console.log("==========Deleting an Element 9==========");
setOfNum.delete(9);
console.log(setOfNum.size);

console.log("============Check Whether the element is availaible into the set or not=========");
let isAvailable = setOfNum.has(7);
console.log(isAvailable);


console.log("============If we want to clear the set================= ");
setOfNum.clear();
console.log(setOfNum);
setOfNum.add(3);
setOfNum.add(5);
setOfNum.add(7);
setOfNum.add(9);


console.log("=========Traversing Set============");
for (const element of setOfNum) {
    console.log(element);
    
}

console.log("=========How to find duplicate element from array=========");
const array = [3,4,5,6,3,3,6,5,2,7,8,7,6,4,2,1];
console.log(...array);
let nonDuplicateElement = [...new Set(array)];
console.log(nonDuplicateElement);