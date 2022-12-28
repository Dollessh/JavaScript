function display(){
    console.log("Hello");
}

let show =  () => {
    console.log("Hello");
    return console.log("Arrow function witho no argument");
}
show();

console.log("Arrow function with argument");

let add = function(n1, n2) {
    return n1 + n2;
}
add(100,5000);
let sum = (n1, n2) =>  n1 + n2; 

// let sum1 = (n1, n2) => {
//     return n1 + n2
// } 

console.log( sum(10, 20));
