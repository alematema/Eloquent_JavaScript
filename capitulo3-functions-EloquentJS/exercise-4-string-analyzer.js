function stringAnalyzer(str){

    let analysis = {};

    for ( let i = 0; i < str.length; i++){

        if( analysis[str[i]] ){

            ++analysis[str[i]];

        }else{

            analysis[str[i]] = 1;

        }

    }

    return analysis;

}

console.log(stringAnalyzer('Stop coding non-responsive sites. Let users view sites from anywhere.'));