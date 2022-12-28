console.log("QUESTION:COUNT THE CHARACTER IN STRING");

console.log("=================-------------length------------------================");

var text = function(nut){
    console.log(nut.length);
}
var str = "My name is Dollesh Rathod I am from Karanja lad"; //str
console.log(str);
text(str);



// chatAt();
console.log("=================-------------charAt()------------------================");
var nutan = function(str){
    console.log(str.charAt(15));
    console.log(str.charAt(16));
    console.log(str.charAt(18));
    console.log(str.charAt(17));

}
nutan(str);
var str1 =" and My name is nutan londe I am from Mumbai";//string

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