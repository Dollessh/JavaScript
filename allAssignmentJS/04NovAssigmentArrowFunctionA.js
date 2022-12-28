console.log("===========04 Nov Arrow Function Assignment============");

console.log("Qno 1  ARrow Function With No Argument");
let arrowFunctionWithNoArg =() => console.log("Good Morning, Today is Sunday");
arrowFunctionWithNoArg();
console.log("========================================================");
console.log("Q No 2 Arrow Function With 3 argument");
let arrowFunctionWithArg =(n1,n2,n3 = 1)  =>{
    return n1*n2*n3;
}
let result = arrowFunctionWithArg(10,20,30);
console.log(result);
let res = arrowFunctionWithArg(10,20);
console.log(res);

console.log("=========================================================");
console.log("Q No 3 ");

let arrowFunctioWithMultipleArg = (n1,n2=0,n3=0,n4=0,n5=0) => {
    return n1+n2+n3+n4+n5;
}
let ansA = arrowFunctioWithMultipleArg(100,100,200,349,765);
console.log(ansA);
let ansB = arrowFunctioWithMultipleArg("I am"," learning"," ES6"," features"," In depth");
console.log(ansB);
let ansC = arrowFunctioWithMultipleArg("Done");
console.log(ansC);