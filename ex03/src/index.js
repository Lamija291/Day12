function rangeOfNumber(startN, endN) {
    if (startN == endN) {
        return [startN];
    } else {
        var numbers = rangeOfNumber(startN, endN - 1);
        numbers.push(endN)
        return numbers;
    }
};
console.log(rangeOfNumber(1, 7));
console.log(rangeOfNumber(3, 10));
console.log(rangeOfNumber(5, 5));
console.log(rangeOfNumber(7, 7));

module.exports = rangeOfNumber;