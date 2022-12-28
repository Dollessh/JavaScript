'use-strict'
// import { startsWith  } from "lodash";
// import { startsWith } from "lodash";

class Employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
        this.empId = empId;
        this.empName = empName;
        this.empDept =empDept;
        this.empSalary =empSalary;
        this.empCompany = empCompany;
    }
}

const empAnil = new Employee(22,"Anil","IT",50000,"TCS");
const empRadha = new Employee(33,"Radha ","HR",74000,"Wipro");
const empRishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const empSonali = new Employee(66,"Sonali","FInance",45000, "Infosys");
const empMonika = new Employee(77,"Monika",40000,"wipro");
const empVinayak = new Employee(88,"Vinayak","IT",75000,"TCS");
const empMahesh = new Employee(99,"Mahesh","IT",85000,"Infosys");

console.log("Adding all Employee Object into an array");
let arrayEmployess  = [empAnil,empRadha,empRishi,empSonali,empVinayak,empMonika,empMahesh];
console.log(arrayEmployess);
console.log("============================================");
console.log("Qno.1 Find all the employe working in TCS and log only name and company on colsole");
(function queFirstSol() {
    for (const element of arrayEmployess) {
        if(element.empCompany==="TCS"){
            console.log(`Employee Name = ${element.empName} working in ${element.empCompany}`);
        }
    }
    
})();

console.log("============================================");
console.log("Qno 2 Find the finance department employees log only department and name");
(function queSecondSol(){
    for (const element of arrayEmployess) {
        if(element.empDept === "Finance")
        {
            console.log(`Employee Name = ${element.empName} from Department ${element.empDept}`);
        }
    }
})();
console.log("============================================");
console.log("Q No 3 Find the employe whose name start with R log emoloyee complete detail  ");
(function queThirdSol(){
    for (const element of arrayEmployess) {
        var res = "" + element.empName;
        if(res.startsWith("R"))
        {
            console.log(`${element.empId} and ${element.empName}`);
            
        }

       
    }
})();

console.log("============================================");
console.log("Qno 4 Find the employe name whose salary is greater than 70000 and log name company and salary");
(function queFourthSol(){
    for (const element of arrayEmployess) {
        if(element.empSalary > 70000){
            console.log(`Employee Name = ${element.empName} Employee Company = ${element.empCompany} Employee Salary = ${element.empSalary}`);
        }
    }
})();
console.log("============================================");
console.log("Qno 5 Find the employee whose salary >= 50000 and frol IT Dept" );
(function queFifth(){
    for (const element of arrayEmployess) {
        if(element.empSalary >= 50000 && element.empDept == "IT")
        {
            console.log(`${element.empId} ${element.empName} ${element.empDept}  ${element.empSalary}  ${element.empCompany}`);
        }
    }
})();

console.log("============================================");
console.log("Qno 6 Find out the all the employee from company Infosys log complete details ");
(function queSixthSoln(){
    for (const element of arrayEmployess) {
        if(element.empCompany == "Infosys")
        {
            console.log(`${element.empId} ${element.empName} ${element.empDept}  ${element.empSalary}  ${element.empCompany}`);
        }
    }
})();