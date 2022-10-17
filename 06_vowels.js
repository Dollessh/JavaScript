var givenString = "I love JavaScript";
var totalChar = givenString.length;
for (let index = 0; index < totalChar; index++) {
    if (index % 2 == 0) {
        var charAt = givenString.charAt(index);
        console.log(charAt);
    }
}


console.log("==========WAP ODD position CHaracter==========");

for (let index = 0; index < givenString.length; index++) {
    if (index % 2 != 0) {
        var charAt = givenString.charAt(index);
        console.log(charAt);
    }

}

console.log("==============WAP to print Vowels==============");
givenString = "MY name is Dollesh Rathod";
for (let index = 0; index < givenString.length; index++) {
    var charAt = givenString.charAt(index);
    if (charAt == "a" || charAt == "e" || charAt == "i" || charAt == "o" || charAt == "u") {
        console.log(charAt);
    }

}

var givenString = "a I love JavaScript";
for (let index = 0; index < givenString.length; index++) {
    var charAt = givenString.charAt(index);
    if (charAt == "a" || charAt == "e" || charAt == "i" || charAt == "o" || charAt == "u") {
        console.log("Vowel in given string is " +charAt);
    }else{
        console.log("Consonent in given string is " + charAt);
    }
    
}