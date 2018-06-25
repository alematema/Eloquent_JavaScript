let lines = 7, pattern = '#';

for( let i = 1; i <= 7; i++){

    console.log(pattern);

    pattern += '#';

}

let out;
for( let i = 1; i <= 100; i++){

    out = i;

    if( i % 15 == 0 )
        out = 'FizzBuzz';
    else if( i % 5 == 0 ) 
        out = 'Buzz';
     else if( i % 3 == 0 ) 
        out = 'Fizz';

    console.log(out);

}

let boardLines = 8;
let l1=buildLine(' ', '#', boardLines), l2 = buildLine('#', ' ', boardLines);

let chessBoard='';
for( let i = 1; i <= boardLines; i++){
    

    if( i % 2 == 1 )
        chessBoard+=l1;
    else  
        chessBoard+=l2;

    chessBoard+='\n';

}

console.log(chessBoard);


function buildLine(lineStartChar,theOtherChar,lineLength){

    let line = '';

    for( let i = 0 ; i < lineLength; i++ ){

        if ( i % 2 == 0 ) 
            line+=lineStartChar;
        else 
            line+=theOtherChar;

    }

    return line;

}