
console.log("==========Why JS function is called as first class Citizen ?================");
// There are three Reason
// 1. JS Function can be used as valriable Using Function Expression
// 2. JS Function can be passed as an argument to the another function = callback
// 3. JS Function can return another function


function message(){
    console.log("Inside message Function");
    let innerFuncMessage = function(){
        console.log("Inner Function Message");
    }
    return innerFuncMessage; //returning a function
}
// let display = message();
// display();  // it becomes function when function return function and we collected the function indside display function
message()();