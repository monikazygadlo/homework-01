function numbers(minimum, maximum, onlyOdd) {
    let array = [];
    let min = Math.min(minimum, maximum);
    let max = Math.max(minimum, maximum);
    if (typeof (onlyOdd) === "undefined") {
        for (var i = min; i <= max; i++) {
            array.push(i);
            return array;
        }
    } else {
        if (onlyOdd === true) { //generujemy tylko nieparzyste
            if (min % 2 === 0) { //pierwsza liczba parzysta zaczynamy od min+1
                for (var i = min + 1; i <= max; i += 2) {
                    array.push(i);
                    return array;
                }
            }
            else {       //pierwsza liczba nieparzysta zaczynamy od min
                for (var i = min; i <= max; i += 2) {
                    array.push(i);
                    return array;
                }
            }
        }
        else if (onlyOdd === false) { //onlyOdd jest fałsz generujemy tylko parzyste
            if (min % 2 === 0) { //pierwsza parzysta zaczynamy od min
                for (var i = min; i <= max; i += 2) {
                    array.push(i);
                    return array;
                }
            }
            else {       //pierwsza liczba nieparzysta zaczynamy od min+1
                for (var i = min + 1; i <= max; i += 2) {
                    array.push(i);
                    return array;
                }
            }
        }
    }
}

numbers(10, 2);


//min=1, max=10 10
//min=1, max=11 11
//min=2, max=10
//min=2, max=11