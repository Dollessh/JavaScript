let chequeProcess = true;
let learnPromise = new Promise(function(resolve,reject){
        if(chequeProcess)
        {
            resolve("Cheque is passed");
        }else{
            reject("cheque is bounced");
        }
});

learnPromise.then(function(suceess){
    console.log("Cheque is Passesd and deoposited to account");
}).catch(function(failure){
    console.log("Cheque is failed");
}).finally(function(){
    console.log("Done....");
}); 
    