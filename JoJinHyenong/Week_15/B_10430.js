const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split(' ');

const a= parseInt(input[0]);
const b= parseInt(input[1]);
const c= parseInt(input[2]);

console.log((a+b)%c);
console.log(((a%c)+(b%c))%c);
console.log((a*b)%c);
console.log(((a%c)*(b%c))%c);


/*
메모리: 9584 KB
시간: 168 ms
*/