const arrNum = [1,2,4,5];
const arrNum2 = [6,7,8,9];
const arrRes= arrNum.concat(arrNum2);
console.log(arrRes);



Object.freeze(arrNum);// We cant add any element to the array using freeze// Immutable we cant change the array values
// arrNum.push(6);
console.log(arrNum);


const student = {
    name: "Dollesh Rathod",
    subject: "Angular",

}
console.log(student);
//THERE IS ONE MORE WAY TO COPY THE OBJECT OR CLONING THE OBJECT
let res = Object.assign({},student);
console.log(res);

const address = {
    city : "Pune",
    street : "FC Road"
}
student.name="Mohit Sharma";
console.log(student);
console.log(res);


let studAndAddress = Object.assign({},student,address);//merged the object
console.log(studAndAddress);