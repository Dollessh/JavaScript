console.log("***********************************Assignment 28 Oct********************************************************");
const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water-Melon"];
console.log("Given Array = " + fruits_seasonal);
firstElement = fruits_seasonal[0];
lastElement = fruits_seasonal[fruits_seasonal.length-1];
console.log("QNo -1) First Element = " + firstElement +"   "+ "Last Element = " + lastElement) ;

fruits_seasonal.unshift("Papaya");
console.log("QNo -2) After Adding New Element at Begining =  " + fruits_seasonal);

// delete fruits_seasonal[4];

const removed = fruits_seasonal.splice(4,1);
console.log("QNo 3) Removed element = " + removed);
console.log("Remaining Element =  " + fruits_seasonal);

//Add Element "PINEAPPLE" to the last element
fruits_seasonal.push("Pineapple");
console.log("QNo 4) Add Pineapple to the last" + fruits_seasonal);

//Add dragon-fruit before Water-Melon 
fruits_seasonal.splice(4,0,"Dragon-fruit");
console.log("QNo 5) Add dragon-fruit before Water-Melon " + fruits_seasonal);


//Replace Orange With Kiwi
fruits_seasonal.splice(2,1,"Kiwi");
console.log("QNo 6) Replace Orange With Kiwi = "+fruits_seasonal);


//Log ELement from 1 to 4
console.log("QNo 7) Log elemnt from 1 to 4");
for(var i=1;i<=fruits_seasonal.length;i++)
{
    if(i == 5)
   {
    break;
   }
   console.log(i +" "+ fruits_seasonal[i]);
   
}

//Log Last 3 Element from an Array
console.log("QNo 8) Log Last 3 element from an array");
var count =0;
for(var i = fruits_seasonal.length-1;i>=0&& count <= 3;i--)
{
    console.table(fruits_seasonal[i]);
    count++;
}