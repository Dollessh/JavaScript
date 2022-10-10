console.log("Area of square");

var square = function(side)    //ek function create kel name square type var value is argument/parameter
{
    console.log(side*side);
}
square(5);  //calling the function

console.log("Area of Triangle");
var triangle = function(base,height)
{
    console.log(base*height/2);
}
triangle(30,10); //calling to function and passing two values 

console.log("Area OF Rectangle");
var rectangle = function(length,bredth)
{
    console.log(length * bredth);//logic
}
rectangle(10,5);

console.log("Area of circle");
var circle = function(radius){
    var pi = 3.14;
    console.log(pi*radius*radius);
}
circle(12);