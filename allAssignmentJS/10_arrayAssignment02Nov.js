const arrayOfNames = ["Kamat",",Memon","Nashpati","Taimur","Menon","Kamat","Andy","Taimur"];
let legthWithDuplicate = arrayOfNames.length;
console.log(arrayOfNames);
let uniqueArray = [...new Set(arrayOfNames)];
// console.log(uniqueArray);
let lengthUnique = uniqueArray.length;
let countOfRemovedDup = legthWithDuplicate - lengthUnique;
console.log(countOfRemovedDup);