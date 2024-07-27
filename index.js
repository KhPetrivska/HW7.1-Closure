'use strict'; 

const sum = (function () {
let total = 0;
function inner (num){
total += num;
return total;
}
return inner
})();


console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7))