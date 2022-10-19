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