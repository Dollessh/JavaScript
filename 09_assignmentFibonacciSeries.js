console.log("****************************************************************");
console.log("Write a function to print fibonacci series");
function fib(num){
    let num1 = 0;
    let num2 = 1;
    let i;
 
    if(num < 1)
    {
        return num;
    }
    console.log( " "+num1);
    for(i = 1;i<= num;i++)
    {
        console.log(" "+num2);
        let next = num1 +  num2;
        num1 =num2;
        num2 = next;
    }

}
fib(15);