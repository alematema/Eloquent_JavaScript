function loop(number,callBack){

    for(let i = 0; i < number; i++ ){
        for(let cbk = 0; cbk < callBack.length; cbk++ ) callBack[cbk](i);
    }

}

function power(){
    return 
    [

         iteration => console.log(`pow 2 to ${iteration} = `+Math.pow(2,iteration)),
         iteration => console.log(`pow 3 to ${iteration} = `+Math.pow(3,iteration)),
         iteration => console.log(`pow 4 to ${iteration} = `+Math.pow(4,iteration)),
         iteration => console.log(`pow 5 to ${iteration} = `+Math.pow(5,iteration)),
         iteration => console.log(`pow 6 to ${iteration} = `+Math.pow(6,iteration)),
         iteration => console.log(`pow 7 to ${iteration} = `+Math.pow(7,iteration)),
         iteration => console.log(`pow 8 to ${iteration} = `+Math.pow(8,iteration)),
         iteration => console.log(`pow 9 to ${iteration} = `+Math.pow(9,iteration)),
         iteration => console.log(`pow 10 to ${iteration} = `+Math.pow(10,iteration))

    ];
};

function pow(base=0){
    return [iteration => console.log(`${base} to the power of ${iteration} = `+Math.pow(base,iteration))];
}

function times(multiplicator=1){

    return [iteration => console.log(`${multiplicator} x ${iteration} = ${multiplicator*iteration}`),
    ];

};

function power(base,nthFirst){
    loop(nthFirst,pow(base));
}

function tabuada(numero){
    loop(11,times(numero));
}

//tabuada(3);
//power(-2,70);    

function a(...args){
    console.log(args);
}


//a([],{},'a',a);

function b(args)
{

    var retorno = [];
    for(let i = 0; i < args.length; i++) retorno.push(i);
    retorno.push(0);
    if(retorno.length>10) return retorno;
    console.log(retorno);
    b(retorno);
    
};
//b([]);

function popula(array, range){

    //console.log('populando de 0 a '+array.length)

    if(array.length>100) return;

    for( let i = 0; i <= 100; i++ ){
        array.push(i);
    }

    array.push(0);

    popula(array);

}



var array = [];
popula(array);
console.log(array);