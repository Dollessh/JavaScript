console.log("============ForEachLoop() ==============");
const arr = [10,20,30,40,50,60,30];
console.log("=======ForEach Using callback function========");
arr.forEach(function(value,index,array){  // Index and array are Optional
    console.log(value,index,array);
});


//By using arrow function on forEach loop
console.log("======ForEach lOop Using arroew Function=========");
arr.forEach((currValue) =>{
        console.log(currValue);
}); 

// Its short hand property if we have to execuet one line only 
arr.forEach((currValue) => console.log(currValue));