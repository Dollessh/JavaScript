console.log("=============================Assignment No1 Loop====================================");
console.log(`Write a program to print No from 5 to 15 by incrementing by 1`);

function printInc(num)
{   var res="";
    var temp;
    for(temp = num; temp <=15;temp++)
    {
        res += temp + " ";
    }
    console.log(res);
}
printInc(5);

console.log(`Write a program to print No from 50 to 40 by deccrementing by 1`);

function printDec(num)
{
    var res="";
    var temp;
    for(temp = num;temp >= 40;temp--)
    {
       res += temp + " ";
    }
    console.log(res);
}
printDec(50);

console.log("Write a program to print first 15 ODD No");
function printOdd()
{
    var res ="";
    var count =15;
    var temp=1;
    var count = 0;
    for(temp = 1;temp<=50 && count <= 15;temp=temp+2)
    {
       res += temp + " ";
       count++;
    }
    console.log(res);
}
printOdd();

console.log("Write a program to print first 10 EVEN No");
function printEven()
{
    var res="";
    var count=0;
    var  temp=2;
    for(temp=2;temp<=50&& count<=10;temp=temp+2)
    {
        res += temp + " ";
        count++;
    }
    console.log(res);
}
printEven();

console.log("Write a program to print Table of Given No");
function printTable(num)
{
    var temp;
    var res ="";
    var count= 1;
    for(temp=num; temp<=200 && count <=10;temp = temp+num)
    {
        res += " " + temp;
        count++;
        
    }
    console.log(res);

}
printTable(5);
printTable(10);
console.log("Write a program to print Reverse Table of Given No");

function revTable(input)
{
    var num = input * 10;
    for(num = inputl;)
    console.log(res);
}
revTable(10);