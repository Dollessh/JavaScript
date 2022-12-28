const arrayNum =[20,11,40,25,23,11,9,31,60,2,19];

const newArray = arrayNum.map( (element) => {
    return 10+ element;
});
console.log(newArray);

arrayNum.map( (element) => {
        console.log(element * element);
});


arrayNum.map( (element,index) => {
    console.log(element,index);
});

console.log("Assignment: map() ");
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


console.log("Qn No 1) get the list of all employe");
let arr = [empAnil,empRadha,empRishi,empSonali,empMonika,empVinayak,empMahesh];
let newArr = arr.map( (element) =>{
        console.log(element.empName);
});

console.log("Qno 2) get the list of department and log on console");
arr.map( (element) =>{
    console.log(element.empDept);
});

console.log("QNo3) Get trhe lis of employe id");
arr.map( (element) =>{
    console.log(element.empId);
});