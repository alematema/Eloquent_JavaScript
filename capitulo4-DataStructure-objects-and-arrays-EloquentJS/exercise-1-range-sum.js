//suposing integer numbers
function range( start , end , step = 1 ){

    if ( step == 0 ) step = 1;

    //1. start < end  AND step >= 1
    //nothing to do
    //2. start > end AND step >= 1
    //swap(start,end) -> execute(1.)
    //3.start > end AND step <= -1
    //swap(start,end) , inverts step and returns a reversed range
    //4. start < end AND step <= -1
    //inverts step and returns a reversed range
    
    let mustReverseRange = false;
    
    if( start > end && step >= 0){

        let temp = start;
        start = end;
        end = temp;

    }else if ( start > end && step <= -1 ){

        let temp = start;
        start = end;
        end = temp;

        step *= -1;

        mustReverseRange = true;

    }else if( start < end && step <= -1){

        step *= -1;
        mustReverseRange = true;

    }

    let range = [];

    for( let number = start; number <= end; number = number + step ){
        range.push( number )
    }

    if ( mustReverseRange ) range = range.reverse();

    return range;

}


function sum(numbers){

    let sum = 0;

    for( number of numbers ) sum += number;

    return sum;

}

//console.log(sum(range(1,10)));
console.log('arguments:1,7,2', range(1,7,2) );
console.log('arguments:7,1,2', range(7,1,2) );
console.log('arguments:7,1,-2', range(7,1,-2));
console.log('arguments:1,7,-2', range(1,7,-2));

console.log('arguments:7,1,-2', range(7,1,0));

function arrayEquals(a, b){

    if ( a instanceof Array && b instanceof Array){

        if( a.length != b.length ) return false;

        for( let i = 0; i < a.length; i++ ){
            if (! arrayEquals( a[i], b[i]) ) return false;
        }

        return true;

    }else{

        return a == b;

    }

}
