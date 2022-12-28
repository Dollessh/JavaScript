function doAssignment(callback,callbackMaster){
    console.log("I an Doing Assignment and it is done now");
    callback();
    callbackMaster();
    
}

function copyAssignment(){
    console.log("Copying Assignment anfd it is done and successfully passed to next one");
    
}

function masterCopyAssignment(){
    console.log("Making Master Copy Of it");

}
doAssignment(copyAssignment,masterCopyAssignment);

console.log("==========SetInterval Vs setTimeout===============");
function display(){
    console.log("Display Function");
}
setTimeout(display,10000);


setInterval(display,2000);