console.log("==================================Assignment 13Oct OA============================================");
console.log("=============Using Ternary Operator===================");

function maleMarriageEligibility(gender,age,candidateName)
{
    var result = gender== "Male" && age >= 21 ? ` Hey ${candidateName} you are eligible for Marriage` : ` Not eligible for Marriage`;
    console.log(result);
}
maleMarriageEligibility("Male",25,"Bill Gates");
maleMarriageEligibility("Male",17,"Steave Jobs");

console.log("=============Using If else Block===================");
function femaleMarriageEligibility(gender,age,candidateName)
{
    if(gender=="Female" && age >= 18)
    {
        console.log(`Hey ${candidateName} you are eligible for marriage`);
    }else{
        console.log(`Not eligible for marriage`);
    }
}
femaleMarriageEligibility("Female",16,"Jennifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");