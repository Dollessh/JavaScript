var myName ="Dollesh";
console.log();
var length = myName.length;
var res ="";
for (let index = length-1; index >=0; index--) {
    res = res + myName.charAt(index);
   
}
console.log(res);



var lenthStr = myName.length - 1; // 
var reverseStr = "";
for (let index = lenthStr; index >= 0; index--) {
    console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
console.log(reverseStr);
