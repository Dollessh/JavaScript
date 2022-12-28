class person{
    name;
    age;
    city;
    gender;


    constructor(name,age,city,gender)
    {
        this.name= name;
        this.age= age;
        this.city= city;
        this.gender= gender;
       
        
    }
        
}
let tomDetails = new person("Tom",120,"Mexico","Male");
let jerryDetails = new person("Jerry",90,"Florida","Male");
console.log(tomDetails);

const array = [ tomDetails, jerryDetails];
console.log(array[1]);

for(let index =0;index<array.length;index++)
{
    const element = array[index];
    
}

// FOR OF LOOP
    for (const element of array) {
        if(element.age>100){
            console.log(`${element.name} ${element.age}${element.city}${element.gender}`);
    
        }
    }