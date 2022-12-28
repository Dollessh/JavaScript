function doAssignment(callback){
    console.log("I am Doing Assignment");
    callback();
    return function(){
        console.log("This is higher order function");
    }


}
 
function copyAssignment(){
    console.log("I am Copying Assignment");
}

let collectReturnFunction = doAssignment(copyAssignment);
collectReturnFunction();