function numbers(minimum, maximum, onlyOdd) {
    var array = [];
    var min = Math.min(minimum, maximum);
    var max = Math.max(minimum, maximum);
    if (typeof (onlyOdd) === "undefined") {
        for (var i = min; i <= max; i++) {
            array.push(i);
        }
    } else {
        if (onlyOdd === true || onlyOdd === 1) { //only odd numbers
            if (min % 2 !== 0) {       //min is odd so start from min
                for (var i = min; i <= max; i += 2) {
                    array.push(i);
                }
            }
            else { //min is even so start from min+1
                for (i = min + 1; i <= max; i += 2) {
                    array.push(i);
                }
            }
        }
        else if (onlyOdd === false || onlyOdd === 0) { //only even number
            if (min % 2 === 0) { //min is even so start from min
                for (var i = min; i <= max; i += 2) {
                    array.push(i);
                }
            }
            else {       //min is odd do start from min+1
                for (var i = min + 1; i <= max; i += 2) {
                    array.push(i);
                }
            }
        }
    }
    return array;
}
console.log(numbers(3, 10, true));
console.log(numbers(3, 10, 1));
console.log(numbers(3, 10, false));
console.log(numbers(3, 10, 0));
console.log(numbers(3, 10));
console.log(numbers(11, 1, true));
console.log(numbers(11, 1, 1));
console.log(numbers(11, 1, false));
console.log(numbers(11, 1, 0));
console.log(numbers(11, 1));
console.log(numbers(11, 11, 0));
console.log(numbers(11, 11, 1));

