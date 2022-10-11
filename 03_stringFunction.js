var str = "My name is Dollesh Rathod";
// chatAt();
console.log("=================-------------charAt()------------------================");
var nutan = function(str){
    console.log(str.charAt(15));
    console.log(str.charAt(16));
    console.log(str.charAt(18));
    console.log(str.charAt(17));

}
nutan(str);
var str1 =" I am an Engineer";//string

//concat function
console.log("=================-------------concat()------------------================");
var join = function(text1,text2){

    console.log(str.concat(str1));
}
join(str,str1);

//indexOf()
console.log("=================-------------indexOf()------------------================");
var idx =function (str1)
{
    console.log(str1.indexOf('f'));
    
}
idx(str1);// NUtan"s string
idx(str);//Dollesh"string

//lastindexOf()
console.log("=================-------------lastIndexOf()------------------================");
var last = function(str){
    console.log(str.lastIndexOf("d"));
    console.log(str.lastIndexOf('j'));
    console.log(str.lastIndexOf('z'));//z is not included in string
}
last(str);


//slice
console.log("=================--------------slice()------------------================");
var cut = function(str)
{
    console.log(str.slice(11,19));
    console.log(str.slice(16,21));
}
cut(str);
cut(str1);




// subString
console.log("=================-------------substring(start,end)------------------================");
var sub = function(str){
    console.log("Substring of given string is-:"+ str+" = " + str.substring(11,19));
}
sub(str);



// replace
console.log("=================-------------replace()------------------================");
var change = function(str)
{
    console.log("Replaces the string nutan whith dollesh :original string is: " + str+ " after replace the new string = " + str.replace("nutan","Dollesh"));

}
change(str1);

// toUpperCase
console.log("=================-------------toUpperCase()------------------================");
var capitalize = function(str){
    console.log(str.toUpperCase());
}
console.log("whole string will converted into uppercase");
capitalize(str);


// toLowerCase
console.log("=================-------------toLowerCase()------------------================");
var small = function(str){
    console.log(str.toLowerCase());
}
console.log("whole string will coverted into lower case");
small(str1);


// trim
console.log("=================-------------trim()------------------================");
var whiteSpaces = function(str)
{
    console.log(str.trim());
}
var temp = "                      Dollesh             Rathod";
console.log("It removes all the whitespaces from both the side of string");
// we can use trimStart() and trimEnd()
whiteSpaces(temp);

//includes
console.log("=================-------------includes()------------------================");
var inc = function(str)
{
    console.log(str.includes("name"));
}
inc(str);

//split
console.log("=================-------------split()------------------================");

var studentList  = "Sunil | Anil| Andy| Jenny| Lata";
var splitResult = studentList.`split("|")`;
console.log(splitResult);


console.log("=================-------------string SUbstitution------------------================");
fName = "Dollesh";
lName = "Rathod";
console.log(`First Name : ${fName} and Last Name :${lName}`);
