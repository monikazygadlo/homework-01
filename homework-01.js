function numbers(min,max,onlyOdd) {
    let array = [];
    if(onlyOdd=true){
        if(min%2 == 0){ //pierwsza liczba parzysta zaczynamy od min+1
            for (var i = min+1; i <= max; i++) {
                array.push(i);
            }
            else{       //pierwsza liczba nieparzysta zaczynamy od min

            }
        }
        else { //onlyOdd jest fałsz generujemy tylko parzyste

        }
    }
    else{

    }
}

console.log(numbers(2,10,1))

//min=1, max=10 10
//min=1, max=11 11
//min=2, max=10
//min=2, max=11