let objectName ={
    fullname: "Sachin Tendulkar",
    age: 35,
    isMarried : true,
    city : "Mumbai",
    address: {
        street: "Mangrulpir Road",
        pinCode:444105,
        state: "MH"
    },
    eat: function(){
        console.log("I am a HardCoder");
    },
    sleep: function(){
        console.log("I walk daily");
    },
    details: function(){
        console.log(this.fullname);
    }
}
objectName.details();
objectName.eat();
var street =objectName.address.street;
console.log(street);
console.log(objectName.address.pinCode);
objectName.dob= 13;
objectName.profession =  "Angular Developer";

delete objectName.age;
console.log(objectName.age);
console.log(objectName.fullname);
console.log(objectName.age);
console.log(objectName.isMarried);
console.log(objectName.city);


Object.entries(objectName);
Object.keys(objectName);
Object.values(objectName);