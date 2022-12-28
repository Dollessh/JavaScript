var tcsEligibilityCheck = function (grad_Score,hsc_Score,ssc_Score,candidate_Name)
{
    var result =grad_Score >= 70 || hsc_Score >= 80 || ssc_Score >= 90 ? `Congrats ${candidate_Name} is eligible for interview`: `Unfortunately ${candidate_Name} is not eligible for interview`;
    console.log(result);
}
tcsEligibilityCheck(71,81,70,"Dollesh RAthod");
tcsEligibilityCheck(69,65,55,"Roshan");
