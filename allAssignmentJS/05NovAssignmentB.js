console.log("============Assignment B 05 Nov Assignment B========");
console.log("========Assignment Using arrow Function and Callbacks==============");
const arrayNum = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(arrNum);
console.log("1) Log the array element with its index");
arrayNum.forEach((currvalue,index) => console.log(currvalue,index)); 
console.log("2) find the positive no and log on console Using forEach with arrow function");
arr.forEach((currvalue) => {
    if(currvalue > 0)
    {
        console.log(currvalue);
    }
});
console.log( "2) By Using callback Function");
arr.forEach(function(currValue){
    if(currvalue > 0)
    {
        console.log(currvalue);
    }
}); 
console.log("3) find the negative no and log on console Using forEach with arrow function");
arr.forEach((currvalue) => {
    if(currvalue < 0)
    {
        console.log(currvalue);
    }
});
console.log("4) Find the even number and log on console using forEaCH WITH aRROW FUNCTION");
arr.forEach((currValue) =>{
    if(currValue %2 ==0)
    {
        console.log(currValue);
    }
});
console.log("5) Find sum of all element from array number");
arr.forEach((currValue) => {
    let sum = sum + currValue;
    console.log(sum);
});
console.log("6) log all even positioned element by using arrow function");
arr.forEach((currValue, index ) => {
    if(index %2 ==0)
    {
        console.log(currValue);g
    }
});
console.log("7) Log all odd positioned array if they are new=gative");
arr.forEach((currValu,index) =>{
    if(index %2 ==1 && currValue < 0)
    {
        console.log(currValue);
    }
});

