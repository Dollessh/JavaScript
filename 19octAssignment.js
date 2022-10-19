console.log("==============================Design a Grade System================================");
function gradeSystem(score)
{
    if(score < 0 || score == "" || score == null || score == undefined)
    {
        console.log("Invalid Input");
    }else{
        
        if(score < 35 )
    {
        console.log("You are failed");
    }
    if(score >= 35)1
    {
        console.log("You are Passed");
    }
    if(score >= 35 && score < 60)
    {
        console.log("You are Passed");
        console.log("Yor Grade is C");
    }
    if(score >= 60 && score < 75)
    {
        console.log("You are Passed");
        console.log("Yor Grade is B");
    }
    if(score >= 75 && score < 90)
    {
        console.log("You are Passed");
        console.log("Yor Grade is A");
    }
    if(score >= 90 && score < 100)
    {
        console.log("You are Passed");
        console.log("Yor Grade is A+");
    }
    }
    

}
console.log(gradeSystem(66));
console.log("=========================");

console.log(gradeSystem("Fifty Five"));
console.log("=========================");

console.log(gradeSystem(undefined));
console.log("=========================");

console.log(gradeSystem(13));
console.log("=========================");

console.log(gradeSystem(35));
console.log("=========================");

console.log(gradeSystem(-20));
console.log("=========================");

console.log(gradeSystem(" "));
console.log("=========================");

console.log(gradeSystem(75));
console.log("=========================");

console.log(gradeSystem(55));
console.log("=========================");

console.log(gradeSystem(98));
console.log("=========================");

console.log(gradeSystem(null));
console.log("=========================");

console.log(gradeSystem(82));
console.log("=========================");
