let bankSbi = {
   accountNo : 123,
   branch : "Shivaji Nagar",
   accHolderName : "Jacky",
   accBalance : 54000    
}
console.table(bankSbi);
let bankLocation = {
    street :"Main Line",
    city :"Pune",
    pinCode :444014
}
console.table(bankLocation);
console.log("==========  BY USing Object.Assign Method===============");
// Q.No 1) Clonning using Object.Assign Method

let clonedObj = Object.assign({},bankSbi,bankLocation);
console.table(clonedObj);
console.log("==========By Using Spread Operator(...)===============");

// Q.No 2) Clonning By Using Spread Operator

let clonedObj2 = {...bankSbi,...bankLocation};
console.table(clonedObj2);


// Q NO 3) Create Object Using Literals rate Of Intrest
 let rateOfIntrest = {
    homeLone : 12,
    personalLoan : 10,
    durIntrest :8
 }

 // Qno 5) Merge all Three Object 

 let sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfIntrest);
 console.table(sbiDetails);

 console.log(`The person ${sbiDetails.accHolderName} with Account No ${sbiDetails.accountNo} is having ${sbiDetails.accBalance} balance in HI ACCOUNT `);