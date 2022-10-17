const num = 50;
var n1 =0,n2 = 1, nextNum   ;
for (let index = 0; index < num; index++) {
    
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
    console.log(nextNum);
}
