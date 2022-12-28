console.log("======================Eligibility for Boys===================");

var marriageEligibilityBoys = function (gender,age)
{

    var result = gender === "Male" && age >= 21 ? `hey boy your are eligible for marriage` : `Unfortunatly this boy is not eligible for marriage`;
    console.log(result);
}
marriageEligibilityBoys("Male", 23);
maleMarriageEligibilityBoys("Male",20);
console.log("======================Eligibility for Girls===================");
var marriageEligibilityGirls = function(gender,age)
{
    var result =gender == "Female" && age >= 21 ? `hey girl your are eligible for marriage` : `Unfortunatly this girl is not eligible for marriage`;
    console.log(result);
}
marriageEligibilityGirls("Female",25);
marriageEligibilityGirls("Female",19);
