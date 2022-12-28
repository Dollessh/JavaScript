
function checkPrime(num){
    for(let i =2; i< num;i++)
    {
        if(num %i ==0)
        {
            return false;

        }
    }
    return true;
}
console.log(checkPrime(9));


// WAP to get first 15 prime no
function printPrime(){
    let count =0;
    for(let index=1;count <= 15;index++)
    {
        let res = checkPrime(index);
        if(res == true)
        {
            console.log(index);
            count++;
        }
    }

}
printPrime();
