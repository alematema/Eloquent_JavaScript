/**
 * Usando recursão, compara profundamente dois objetos. 
 * 
 * No caso dos argumentos a e b serem do tipo {}, a comparação leva em conta uma possível diferença 
 * na ordem das propriedades dos objetos. Por exemplo, 
 *  
 * se a = {0:0, 2:2, 1:1} e b = {2:2, 0:0, 1:1},
 * 
 * eles serão avaliados como iguais, porque a implementação compara por propriedade e
 * pelo valor que ela segura, independente da ordem relativa em que a propriedade aparece am a e em b.
 * 
 * @param a : um dos objetos a se comparar
 * @param b : outro objeto a se comparar 
 * 
 * @author alexandre
 */
function deepComparison( a , b ){

    //no momento, não sei comparar funções, por isso retorno undefined, caso algum parametro seja do tipo Function
    if(a instanceof Function || b instanceof Function) return undefined;

    if ( a instanceof Object && b instanceof Object){

        if( (a instanceof Array) && !(b instanceof Array) ) return false;
        if( !(a instanceof Array) && (b instanceof Array) ) return false;

        if( Object.keys(a).length != Object.keys(b).length ) return false;

        for( key of Object.keys(a) ) {

            if( ! Object.keys(b).includes(key) ) return false;

            if( ! deepComparison( a[key], b[key]) ) return false;

        }

        return true;

    }else {

        return a === b;

    }

}

let arg1 = {a:1,c:{0:0,1:1,2:2},b:1};
let arg2 = {b:1,a:1,c:{0:0,1:1,2:2}};

//let arg1 = [0,[1,2,3],1];
//let arg2 = [0,[1,2,3],1];

//let arg1 = {0:0,1:1,2:2}
//let arg2 = [0,1,2];

//let arg1 = function(a){console.log(a)};
//let arg2 = function(a){console.log(a)};

console.log(deepComparison(arg1, arg2));