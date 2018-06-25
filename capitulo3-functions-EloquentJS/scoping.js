if(true){
    var y = 'inside first if';
    console.log(y);
}

if(true){
    let y = 'inside second if';
    console.log(y);
}
console.log(y);

let f1 = function(...args){
    var y = 'inside FUNCTION';
    console.log(y);
}

f1()