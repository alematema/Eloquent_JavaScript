console.log(countBs('ABBBBbCDEISDFffCCDFF'));

function countChar(str, char){

    let charCount = 0;

    for( let i = 0; i < str.length; i++ ){
        if( str[i] == char ) charCount++;
    }

    return charCount;

}

function countBs(str){
    return countChar(str, 'B'); 
}


/*
function countBs(str){

    let bCount=0;

    for( let i = 0; i < str.length; i++){

        if( str[i] == 'B' ) bCount++;

    }

    return bCount;

}
*/

