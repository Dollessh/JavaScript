var str1 = "Hard work always pays back";
var str2 = "Soon I will be Angular IT Champ";
// function reverse(str)
// {
//     var res ="";
//     for(index = str.length-1;index >=0;index--)
//     {
//         if(str.charAt(index) != " ")
//         {
//             res = res + str.charAt(index);
//         }
//     }
//     return res;
// }

function reverseUsingWhile(str)
{
    var res ="";
    let index = str.length-1;
    while(index >= 0)
    {
        if(str.charAt(index) != " ")
        {
            res = res + str.charAt(index);
           
        }
        index--;
    }
    return res;
}
console.log(reverseUsingWhile(str1));
console.log(reverseUsingWhile(str2));
// console.log(reverse(str1));
// console.log(reverse(str2));


console.log("Print First 15 Odd no");
function printOdd()
{
    var count =0; // 
    let idx = 1; // 1
    while(idx % 2 != 0 && count <= 15)
    {
        console.log(idx);//1 3 5 7
        idx= idx+2;//1 +2=3 +2 =5 +2 =7+2=9
        count++;//1+1+1+1+1+1
    }   
}
printOdd();