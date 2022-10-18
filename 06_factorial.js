function fact(num)
{
    let count = num;
    var factorial =1;
   while(count >= 1)
   {
        factorial = factorial *  count;
        count--;
   }
   return factorial;
}
let ans = fact(5);
console.log(ans);