console.log("=======================================Assignment of 17 Oct===========================");
var givenString = "Good Morning IT Champ";
var str = givenString.toLowerCase();
const vowel = ["a", "e", "i", "o", "u"];

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowel.includes(letter)) {
            count++;
        }
    }
    return count
}
var res = countVowel(str);
console.log(res);



console.log("==Q.NO 2================WAF to count vowels from given String==============");
var str = "I love javaScript";
var str1 = str.toLowerCase();
var vowels = ['a','e','i','o','u'];

function countVowels(){
    var count =0;
    for (let index = 0; index < str1.length; index++) {
        if(str1.charAt(index) =="a" ||str1.charAt(index) =="e" ||str1.charAt(index) =="i" ||str1.charAt(index) =="o"||str1.charAt(index) =="u")
        {
            count++;
        }

    }
    return count;
}
var res = countVowels(str1);
console.log(`the num of vowels in given string are = ${res}` );


console.log("==Q.NO 3================WAF Exp to sum all num from 1 to 10==============");
var sum = function(){
    var res=0;
    for (let index = 0; index <= 10; index++) {
        res = index + res;
        
    }
    return res;
}
var res =sum();
console.log(`total sum from 1 to 10 = ${res}`);

console.log("==Q.NO 4================WAF to sum of square num from 1 to 10 ==============");
function sumSquare()
{
    var res = 0;
    for (let index = 0; index <= 10; index++) {
       
        var temp = index * index;
        res += temp;
    }
    return res;
}
var sum =sumSquare();
console.log(`sum of square of num from 1 to 10 = ${sum}`);


console.log("==================Q.NO 5 EVEN POSITIONED CHARACTER==============");
var str1 = "Hard work always pays back";
var str2 = "Soon I will be Angular IT Champ"; 

function evenPositionedChar(str){
    var res= "";
    for (let index = 0; index < str.length; index++) {
        
        if(index %2 ==0 && str.charAt(index) != " ")
        {
            res = res + str.charAt(index);
        }
        
    }
    return res;
}
var ans =evenPositionedChar(str1);
var res =evenPositionedChar(str2);
console.log(ans);
console.log(res);

console.log("==================Q.NO 5 ODD POSITIONED CHARACTER==============");
function oddPostionedChar(str)
{
    var res= "";
    for (let index = 0; index < str.length; index++) {
        
        if(index %2 !=0 && str.charAt(index) != " ")
        {
            res = res + str.charAt(index);
        }
        
    }
    return res;
}
var ans =oddPostionedChar(str1);
var res =oddPostionedChar(str2);
console.log(ans);
console.log(res);
