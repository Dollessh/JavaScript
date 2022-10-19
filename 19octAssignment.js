function gradeSystem(score)
{
   if(score <0 || score > 100)
   {
    console.log("Invalid Input");
   }else{
        if(score < 35)
        {
            console.log("You are fail");
        }else if(score >=35 && score <=60)
        {
            console.log("You are pass with C Grade");
        }else if(score >= 60 && score <= 75)
        {
            console.log("You are pass with B Grade");
        }else if(score >= 75 && score <= 90)
        {
            console.log("You are pass with A Grade");
        }else if(score >= 90)
        {
            console.log("You are pass with A+ Grade");
        }
        else if(score != " " ||score == null)
        {
            console.log("Invalid Inputs");
        }
        else{
            console.log("Your are pass");
        }
        
   }
}
var result = gradeSystem(66);
var result = gradeSystem("Fifty Five");
var res = gradeSystem(undefined);
var res = gradeSystem(13);
var res = gradeSystem(35);
var res = gradeSystem(-20);
var res = gradeSystem(" ");
var res = gradeSystem(75);
var res = gradeSystem(55);
var res = gradeSystem(98);
var res = gradeSystem(null);
var res = gradeSystem(82);



// console.log(gradeSystem("Fifty Five"));
// console.log("=========================");



// console.log(gradeSystem(13));
// console.log("=========================");

// console.log(gradeSystem(35));
// console.log("=========================");

// console.log(gradeSystem(-20));
// console.log("=========================");

// console.log(gradeSystem(" "));
// console.log("=========================");

// console.log(gradeSystem(75));
// console.log("=========================");

// console.log(gradeSystem(55));
// console.log("=========================");

// console.log(gradeSystem(98));
// console.log("=========================");

// console.log(gradeSystem(null));
// console.log("=========================");

// console.log(gradeSystem(82));
// console.log("=========================");
