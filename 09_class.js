class Person{
    fullName
    city
    age
    gender

    constructor(fName,myCity,myAge,myGender)
    {
        this.fullName = fName;
        this.city = myCity;
        this.age = myAge;
        this.gender = myGender;
    }

   
}
let mohit = new Person("Dollesh","Pune",24,"Male");
console.log(mohit);
mohit.fullName = "MOhit";
console.log(mohit);
let sachin = new Person("Sachin","Mumbai",26,"Male");
console.log(sachin);

console.log(mohit instanceof Person);