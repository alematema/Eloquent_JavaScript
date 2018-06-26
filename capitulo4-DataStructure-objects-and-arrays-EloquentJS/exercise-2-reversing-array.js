function reverseArrayInPlace( array ){

    let meio = array.length / 2;
   
    for ( let i = 0; i < meio ; i ++) trocaPosicoes(i,array.length-1-i,array);

    function trocaPosicoes (p,q,array){
        let temp = array[p];
        array[p] = array[q];
        array[q] = temp;
    }

}


function reverseArray(array){

    let reversed = [];

    for( let i = array.length - 1 ; i > -1; i--){

        reversed.push( array[i] );

    }

    return reversed;

}

//for easeness of use, just integer and bottom-top value arrays are made.
function makeArray(length, start=0){

    let newArray = [];

    for ( let i = start; i < length; i++ ){
        newArray[i] = i;
    }

    return newArray;

}

let array = makeArray(100);

console.log(timeIt(reverseArrayInPlace,array));
console.log(timeIt(reverseArray,array));
//console.log(array)

function timeIt(f,...args){

    let init =  new Date();
    
        f(...args);

    return new Date() - init;

}



