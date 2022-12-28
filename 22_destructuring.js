console.log("========Object Destructuring============");
let person = {
    fullname : "James Bond",
    age :30,
    city :"LA",
    country : "USA"

}
// IF we want to extract the data in one line we use object destructutring
let {fullname,age,city="NY",country} = person; // Object Destructuring with default values
console.log(fullname,age,city,country);

console.log("========Array Destructuring============");

let arrayOfNames = ["Monu", "Golu", "Chottu", "Ponu", "dholu"]
//  let ele0 =  arrayOfNames[0];
//  let ele1 =  arrayOfNames[1];
//  let ele2 =  arrayOfNames[2];
//  let ele3 =  arrayOfNames[3];
//  let ele4 =  arrayOfNames[4];
//  let ele5 =  arrayOfNames[5];
console.log("Instead of writing this We can use arrayDestructuring"); 
let [ele0, ele1, ele2, ele3, ele4 ] = arrayOfNames;
 console.log(ele0,ele1,ele2,ele3);
