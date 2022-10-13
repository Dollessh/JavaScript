console.log("=======================Assignment OB 13 OCT============================");
console.log("check EVEN or ODD");
function checkEvenOdd(num)
{
    if(num %2 ==0 )
    {
        console.log(`Given Num is ${num} is "EVEN" No.`);
    }else{
        console.log(`Given Num is ${num} id "ODD" no`);
    }

}
checkEvenOdd(45);
checkEvenOdd(70);
checkEvenOdd(67);
checkEvenOdd(98);

console.log("check Candidate is Eligible for Vote OR Not");
function checkEligiblilityForVote(personAge)
{
    if(personAge >= 18)
    {
        console.log("Person is eligible for Voting");
    }else{
        console.log("Person is not eligible for Voting");
    }
}
checkEligiblilityForVote(18);
checkEligiblilityForVote(20);
checkEligiblilityForVote(17);
checkEligiblilityForVote(40);

console.log("=======================Check String Contain More that 10 Character=============");
function checkString(str)
{
    if(str.length >=10)
    {
        console.log("String Contain more than 10 Charachter");
    }else
    {
        console.log("String does not contain more than 10 character");
    }

}
checkString("Javascript-ES6");
console.log("=======================Check String StartWith=============");
function checkStringStartWith(str)
{
    if(str.includes("Java"))
    {
        console.log(`Yes String Start With "Java"`);
    }
}
checkStringStartWith("JavaScript Language");
