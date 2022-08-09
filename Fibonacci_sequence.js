//Fibonacci sequence

let numberA = 0;
let numberB = 1;
let numberC;
let sequence = [];
for(let i = 0; i < 8; i++){
    sequence.push(numberA);
    numberC = numberA + numberB;
    numberA = numberB;
    numberB = numberC;
}
    console.log(sequence);
    
/*Output
[ 
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13
]*
