/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    let a = n;
    return function () {
        return a++;
    };

};

console.log("num = " + createCounter);
console.log("num = " + createCounter);
console.log("num = " + createCounter);


