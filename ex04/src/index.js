function sumFibonacci(num) {
    let fibbonacciSequence = [0, 1];
    let counter = fibbonacciSequence[fibbonacciSequence.length - 2] + fibbonacciSequence[fibbonacciSequence.length - 1]

    while (counter <= num) {
        fibbonacciSequence.push(counter);
        counter = fibbonacciSequence[fibbonacciSequence.length - 2] + fibbonacciSequence[fibbonacciSequence.length - 1]
    }
    let sumOfOddFibbonacciNumbers = 1;

    fibbonacciSequence.forEach(num => {
        if(num % 2 != 0) { sumOfOddFibbonacciNumbers += num;}
    });

    return sumOfOddFibbonacciNumbers
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(1));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;