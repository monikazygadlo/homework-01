function numbers(min, max, onlyOdd) {
    let array = [];
    if (min > max) {    //sprawdzenie czy min to min a max to max
        let min = max;
        let max = min;
    }
    if (onlyOdd == true) {
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
        if (min % 2 == 0) { //pierwsza liczba parzysta zaczynamy od min+1
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
    console.log(array);
}

numbers(2, 10, 0);


//min=1, max=10 10
//min=1, max=11 11
//min=2, max=10
//min=2, max=11