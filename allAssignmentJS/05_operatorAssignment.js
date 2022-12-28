
console.log("======================================`Assignment No.1 word length square`===================================================");
console.log("=======Question No. 1=========");
var wordLengthSquare = function (word){
        var wordLength = word.length;
        console.log(`length of word "${word}" :  ${wordLength} and Square of length of "${word}" = ${wordLength * wordLength} ` );

}
wordLengthSquare("Javascript");
wordLengthSquare("Google");
wordLengthSquare("Developer");

console.log("=======Question No. 2=========");
var str ="I am an Angular Developer";
function reverseString(){
    var str ="I am an Angular Developer";
    console.log(`Original Given String Is: "${str}"`);
    console.log(`After Reversing The String Become : "${str.split(" ").reverse().join(" ")}"`);
}
reverseString();
console.log("==========Find String Length and Divide The No of Word============ ");
function Divide(){
    var strLength = str.length;
    var strWord = str.split(" ").length;
    console.log(`Result After Dividing String Length by No. oF Word : ${strLength} / ${strWord} = ` + strLength/strWord);
}
Divide();
console.log("==========Find String Length and Multiply The No of Word============ ");
function Multiply(){
    var str ="I am an Angular Developer";
    var strLength = str.length;
    var strWord = str.split(" ").length;
    console.log(`Result After Multiplying String Length by No. oF Word : ${strLength} * ${strWord} = ` + strLength*strWord);
}
Multiply();