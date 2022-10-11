console.log("=======================Assignment NO.1 `String Template`=========================================");

var givenString = "   Hey you are doing good,keep it up    ";

var stringHandsOn = function(str){
    console.log("Que No 1 -: " + str);
    console.log("Que No 2 -: length of given string = " + str.length);
    console.log("Que No 3 -: After removing extra spaces = " + str.trim() +"After trim the string the lenght =  "+ str.trim().length);
    console.log("Que No 4 -: whiteSpaces = " + str.length + " - " + str.trim().length + " = 7"  );
    console.log("Que No 5 -: " + "Given String Start With char = " + str.trim().charAt(0) + " Given String End With char = " + str.trim().charAt(32));
    console.log("Que No 6 -: " + "String after split ="+ str.trim().split(" ") + " &&&&  No. of word In string = " + str.trim().split(" ").length );
    console.log("Que No 7 -: " + "Index of word `good` = " + str.indexOf("good"));
    console.log("Que No 8 -: " + "Print subString Starting from 22 = " + str.substring(22) + "Print slice Starting from 22 = " + str.slice(22));
    console.log("Que No 9 -: " + "Check String End With `up`"+"  Before Trim -:" +" = " + str.endsWith("up") +"  Ater Trim -:"+ "  Check String End With `up` = " + str.trim().endsWith("up"));
    console.log("Que No 10 -: " + " Check string start with `Hey` After trim -:" + str.trim(" ").startsWith());
}

stringHandsOn(givenString);