var globalVariable = 300;
function outer(){
    let value = 100;
    // console.log(value);
    let innerFunction = function(){
        let innerVariable = 200;
        console.log(`${globalVariable} = Global Variable ${value} = function Variable ${innerVariable} = innerFunction Variable`);
    }
    return innerFunction
}
let collectResult = outer();
collectResult();