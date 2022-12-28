
console.log(value);
var value = "Dino";

//var = the variable that are declared with var keyword are hoisted


// let/Const = the variable that are declaRED WITH  let or const keyword are not hoisted
console.log("===============Hoisting Concept=========");    



show();
function show(){
    
    console.log("Hoisting =  Before Declaration We Can Access it");
    console.log("Normal Function is hoisted");
}

console.log("Function Expression is Not Hoisted");
display();
var display = function(){
        console.log("This Is Function Expression");
        console.log("Function Expression Is Not Hoisted");
    }