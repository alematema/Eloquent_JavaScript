function minimo(x,y){

    return x < y ? x : y;

}


function min(...args){

    let minimum;
    
    encontraMinimoRecursivamente(...args);

    return minimum;

    function encontraMinimoRecursivamente(...args){

        console.log(...args);

        minimum = Math.min(args.shift(), args.shift());
     
        if(args.length == 0){
            
            return;

        }

        encontraMinimoRecursivamente(minimum,...args);

    }

    

}

console.log(min(11, 10, 12,13,14));