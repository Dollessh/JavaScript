const arr = [10,20,30,40,50,60,70];
let sum = arr.reduce( (value, total) =>{
    return value + total;
});
console.log(sum);