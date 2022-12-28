let map = new Map();
map.set(01,"Ricky");
map.set(02,"James");
map.set(03,"Dominic");
map.set(04,"Bryan");
map.set(05,"Rio");
console.table(map);
console.log("=======Adding Duplicate Value==========");
map.set(01,"torato"); // If the key is duplicate the it will overr rite the last occurance 
console.table(map);

console.log("=======Retriving Value=========");
let value = map.get(5);
console.log(value);

console.log("=======Deleting Record======");
map.delete(1);
console.table(map );

console.log("=======Traversing Map========");
let setOfKeys = map.keys();
console.log(setOfKeys);
for (let key of setOfKeys) {

   
    console.log(map.get(key));
    
}

console.log("=========Key as an Object===========");
class Person{
    rollNo;
    name;
    age;
    city;
    gender;
    constructor(rollNo,name,age,city,gender){
        this.rollNo =rollNo;
        this.name = name;
        this.age =age;
        this.city =city;
        this.gender =gender;

    }
    delail(){
        console.log(`${this.rollNo}  ${this.name}  ${this.age}  ${this.city}  ${this.gender}`);
    }
}
let personDom = new Person(21,"Dominic",35,"Alaska","Male");
let personLetty = new Person(22,"Letty",33,"Florida","Female");
let personBryan = new Person(23,"Bryan",30,"Colombia","Male");

let mapOfPerson = new Map();
mapOfPerson.set(21,personDom);
mapOfPerson.set(22,personLetty);
mapOfPerson.set(23,personBryan);

let mapKeys = mapOfPerson.keys();
console.log(mapKeys);

for (const key of mapKeys) {
    let personObject = mapOfPerson.get(key);
    personObject.delail();
    
}