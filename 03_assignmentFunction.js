function noArgument()
{
    console.log("THis is the function with no argument");
    console.log("Another name of Argumentis parameter");
}

noArgument();
console.log("=================");


// Concatination of Two String
function studDetails(fName,lName)
{
    
    var fullName = fName.concat(lName);
    return fullName;
}

var fullName = studDetails("DOllesh","Rathod");
console.log(fullName);

// Swapping Function
console.log("=====================");
function swap(data1,data2) {
    console.log("before Swap-:");
    console.log(data1,data2);
    var temp = data1;
    data1 = data2;
    data2 = temp;
    console.log("After Swap -:");
    console.log(data1,data2);
}

swap("Virat","Anushka");
swap(1000,2000);

// Function with three parameter
console.log("=====================");

 function addP(data1,data2,data3)
 {
    return data1+data2+data3;
 }
 var res = addP(10.23,600,40);
 console.log(res);
 var res = addP("hello","Good","Morning");
 console.log(res);
