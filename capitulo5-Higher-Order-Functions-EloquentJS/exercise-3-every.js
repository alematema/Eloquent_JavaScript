function every( array , test ){

    if( array.length == 0 ) return undefined;

    let condition = true;

    for ( e of array ){

      if( Array.isArray( e ) ) condition = every( e , test );  

      if( ! test( e ) ) return false;

    }

    return condition && true ;

}

console.log( every([1,2,3,[1,[1,2],1], [2,3], 3], e => e > 0));