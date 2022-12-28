class Bank{
    bankName;
    location;
    accNo;
    IFSC;
    intrestRate;
    constructor(bankName,location,accNo,IFSC,intrestRate){
            this.bankName=bankName;
            this.location = location;
            this.accNo =accNo;
            this.IFSC =IFSC;
            this.intrestRate = intrestRate;
    }
    detail(){
        console.log(`Bank NAme = ${this.bankName} and Location = ${this.location}`);
    }
}
let axisBank = new Bank("Axis Bank","Mumbai",123,"Axism","12%");
let sbiBank = new Bank("Sbi","Pune",456,"SBiN","10%");
let iciciBank = new Bank("ICICI","Nagpur",789,"icici","9%");
let kotakBank = new Bank("Kotak","Goa",232,"kotakM","8.5%");
let hdfcBank = new Bank("HDFC","Panvel",122,"hdfc","11%");
let punjabBank = new Bank("Punjab","Punjab",154,"punjab","10%");

console.log("Add All the object element in array just log on console - BankNAme and Location");
const array = [axisBank,sbiBank,iciciBank,kotakBank,hdfcBank,punjabBank];
console.table(array);
for (const result of array) {
    console.log(`${result.bankName} from ${result.location}`);
    
}

console.log("======  QNo 2.   Add all object element in set and traverse using forof Loop and log on console just bankNAme and IFSC code=====");
let setOfObject = new Set();
setOfObject.add(axisBank);
setOfObject.add(sbiBank);
setOfObject.add(iciciBank);
setOfObject.add(kotakBank);
setOfObject.add(hdfcBank);
setOfObject.add(punjabBank);
for (const element of setOfObject) {
    console.log(`Bank Name = ${element.bankName} and IFSC =  ${element.IFSC}`);
}


console.log("======  QNo 3.  Create a Map in such way that key should be account_number and value is object that=====");

let mapBank = new Map();
mapBank.set(123,axisBank);
mapBank.set(456,sbiBank);
mapBank.set(789,iciciBank);
mapBank.set(232,kotakBank);
mapBank.set(122,hdfcBank);
mapBank.set(154,punjabBank);
let mapBankKeys = mapBank.keys();
console.log(mapBankKeys);
for (const key of mapBankKeys) {
    let bankKey = mapBank.get(key);
    bankKey.detail();
}



    