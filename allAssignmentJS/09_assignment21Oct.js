console.log("===================Assignment NO 1 21 Oct=====================");
class Vehicle{
    company;
    model;
    color;
    type;

    constructor(vCompany,vModel,vColor,vType)
    {
        this.company = vCompany;
        this.model = vModel;
        this.color = vColor;
        this.type = vType;
    }
    display()
    {
        console.log("This is class Vehicle");
    }
}
let v = new Vehicle();
v.display();
let v1 = new Vehicle("BMW","Coupe","Black","4-wheeler");
console.table(v1);
let v2 = new Vehicle("Tata","Punch","Grey","4-wheeler");
console.table(v2);
let v3 = new Vehicle("Hero","Splendor","Black","2-wheeler");
console.table(v3);
let v4 = new Vehicle("Ashok Leyland","Truck","Orange","12-wheeler");
console.table(v4);
let v5 = new Vehicle("Mahindra","Thar","Red","4-wheeler");
console.table(v5);

class College {
    cName;
    cCity;
    
   
        constructor(name, city) {
            this.cName = name;
            this.cCity = city;

            

        }
        display(){
            console.log("This Is COllege class");
        }

        
}
console.log("=====================object==========================");
let c = new College();
c.display();
let c1 = new College("COEP","Pune");
console.table(c1);
let c2 = new College("VJTI","Mumbai");
console.table(c2);
let c3 = new College("SGGS","Nanded");
console.table(c3);
let c4 = new College("SSGMCE","Shegaon");
console.table(c4);

console.log("*****************************Traverse Object**************************************");
function traverseObject(obj)
{
    for (const key in obj) 
    {
        
        if (Object.hasOwnProperty.call(obj, key))
         {
            const element = obj[key];
            console.log(`${key} = "${element}"`);
            
           
        }
    }
    
}
traverseObject(c1);
traverseObject(c2);
traverseObject(c3);
traverseObject(c4);



