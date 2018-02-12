function numbers(minimum, maximum, onlyOdd) {
    let array = [];
    let min = Math.min(minimum, maximum);
    let max = Math.max(minimum, maximum);
    if (onlyOdd == null) {
        for (var i = min; i <= max; i++) {
            array.push(i);
        }
    }
    if (onlyOdd == true) { //generujemy tylko nieparzyste
        if (min % 2 == 0) { //pierwsza liczba parzysta zaczynamy od min+1
            for (var i = min + 1; i <= max; i += 2) {
                array.push(i);
            }
        }
        else {       //pierwsza liczba nieparzysta zaczynamy od min
            for (var i = min; i <= max; i += 2) {
                array.push(i);
            }
        }
    }
    else { //onlyOdd jest fałsz generujemy tylko parzyste
        if (min % 2 == 0) { //pierwsza parzysta zaczynamy od min
            for (var i = min; i <= max; i += 2) {
                array.push(i);
            }
        }
        else {       //pierwsza liczba nieparzysta zaczynamy od min+1
            for (var i = min + 1; i <= max; i += 2) {
                array.push(i);
            }
        }
    }
    console.log(array); //potrzebne do testów
}

numbers(10, 2, 1);


//min=1, max=10 10
//min=1, max=11 11
//min=2, max=10
//min=2, max=11