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


let mapEmployee = new Map();
mapEmployee.set(22,"Anil");
mapEmployee.set(33,"Radha");
mapEmployee.set(55,"Rishi");
mapEmployee.set(66,"Sonali");
mapEmployee.set(77,"Monika");
mapEmployee.set(88,"Vinayak");
mapEmployee.set(99,"Mahesh");


mapEmployee.forEach((key,value) => {
    console.log(`Id = ${key} =====> ${value}`);
});
