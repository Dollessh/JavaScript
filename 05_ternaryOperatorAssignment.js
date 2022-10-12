console.log("===============================Assignment No. 2=========================================");
console.log("============Greatest No==============");
var ternary = function(num1,num2){
    var result = num1 > num2 ? num1 : num2;
    console.log(`Greatest Among ${num1} and ${num2} = ` + result);
}
ternary(10,-10);
ternary(800,899);

console.log("=========Check Even And Odd============");
var evenOdd = function(num) {
    var result = num % 2 ==0 ? true : false;
    console.log(`Given No is ${num} is =` + result);

}
evenOdd(29);
evenOdd(44);
evenOdd(0);
evenOdd(101);

console.log("========Check Word Length IS Even OR Odd==========");
var evenOddWord = function(word){
    var wordLength = word.length;
    var result = wordLength % 2 ==0 ? "EVEN" : "ODD";
    console.log(`Given Word is "${word}" which is of "${result}" length`);
}
evenOddWord("JavaScript");
evenOddWord("Developer");
evenOddWord("Google");