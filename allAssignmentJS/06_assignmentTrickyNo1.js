console.log("=============Count total no using includes=======================");
var str = "I am very good IT Developer";
let vowelLowercase = "aeiou";
let vowelUpperCase = "AEIOU";
var count = 0;


for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (vowelLowercase.includes(char) || vowelUpperCase.includes(char)) {
        
        count++;
    }

}
console.log(count);
console.log("==========Write a function to get sum if cubes of num from 1 to 5");

function cubeSum(num)
{
    var res =0;
    for (let index = 1; index <= num; index++) {
        var cube = index*index*index;
        res =res + cube;
    }
    return res;
}
let ans =cubeSum(5);
console.log(ans);

console.log("==========Write a function oddPositionedChar==========");
var str1 = "Hard work always pays back";
var str2 = "Soon I will be Angular IT Champ";
function oddPositionedChar(str)
{
    var count=0;
    for(let index =0; index<=str.length;index++)
    {
        if(index%2 !=0 && str.charAt(index) != " ")
        {
            count++;
        }
    }
    return count;
}
console.log(oddPositionedChar(str1));
console.log(oddPositionedChar(str2));


