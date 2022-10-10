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
    console.log(str.lastIndexOf('z'));
}
last(str);



// console.log("UsING THE INBUILT FUNCTION charAt()");
// var search = function(count){
//     console.log(count.charAt(9));
//     console.log(count.charAt());
// }
// search(count);
