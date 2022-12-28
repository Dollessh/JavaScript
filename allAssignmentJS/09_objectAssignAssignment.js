console.log("*************************29 OCT Assignment***********************");
let bank_sbi ={
    IFSC : "MAHB0001",
    branch : "MGRoad",
    account : "Saving",
    accNo : 1 
}
let bank_location = {
    street : "MG Road",
    city :"Hyderabad",
    pinCode : 444105
}
console.log("*************************Using Assign Operator***********************");
var bank_details1 = Object.assign({},bank_sbi,bank_location);
console.log(bank_details1);

console.log("*************************Using Assign Operator***********************");
let bank_details2 = {...bank_sbi,...bank_location}
console.log(bank_details2);

let rate_of_intrest = {


























































    home_loan_intrest : "9%",
    personal_loan : "12%",
    due_intreat : "7%"
} 

let sbi_Details = Object.assign({},bank_sbi,bank_location,rate_of_intrest);
console.log(`This Is SBI Bank Branch name is ${sbi_Details.branch} with IFSC code ${sbi_Details.IFSC} and Your account type is ${sbi_Details.account}
                whereas Account No = ${sbi_Details.accNo}`);
console.log(`Home loan Intrest = ${sbi_Details.home_loan_intrest} Personal Loan Intrest = ${sbi_Details.personal_loan} Due Intrest = ${sbi_Details.due_intreat}`);

