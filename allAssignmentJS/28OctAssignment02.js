console.log("****************************Assignment 28 Oct 0B ********************************");

const arrNum = [20,31,40,25,23,11,29,9,60,2,11];
console.log("QNo 1) Log the total element vailable or Length ");
arrNum.forEach(element => {
    console.log(" "+ element);
});
console.log("Array Length = " + arrNum.length);

console.log("QNo 2) Log the first and last element from an array");
console.log("First Element = "  +arrNum.shift(0));
console.log("Last Element = "+ arrNum.pop());
 
console.log("QNo 3) Log the third last elemnt using length propoerty" );
