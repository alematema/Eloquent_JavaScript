

function loop(value, test, updater, code){

    while( test( value ) ){

        code( value );
        value = updater( value );

    }

}

loop(13, n => n > 0, n => n - 1, console.log);

