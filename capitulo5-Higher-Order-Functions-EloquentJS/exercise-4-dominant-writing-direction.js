let text = '英国的狗说"woof"俄罗斯的狗:)说"тяв"brasuca';
text = 'Hey, مساء الخير';
console.log(dominantDirection(text));

/**
 * Tells, if any, the script the code belongs to.
 * 
 * @param {*} code the unicode associated with an character.
 * @returns the script the code belongs to; returns null, if code does not belong to any script. 
 */
function characterScript(code) 
{
    for (let script of SCRIPTS) {

        //if (script.ranges.some(([from, to]) => code >= from && code < to )) return script;
        if (script.hasCode(code)) return script;
    }

    return null;

}



for ( char of text){

    //console.log('calling ', char, char.codePointAt(0) );
   // console.log(characterScript(char.codePointAt(0))==null?characterScript(char.codePointAt(0)):characterScript(char.codePointAt(0)).name);

}

/**
 * This counting abstraction iterates over the items collection and, through function groupName, computes a group name for a given element.
 * It returns an array of objects, each of which with a group name and the counting for that name.
 * @param {*} items 
 * @param {*} groupName 
 */
function countBy( items , groupName ){

    let counts = [];
    
    for( item of items ){

        let name = groupName( item );

        let known = counts.findIndex( c => c.name == name );

        if( known == -1) {
            counts.push({name, count:1});
        }else{
            counts[known].count++;
        }

    }

    return counts;
}

function groupName( item ){

    return characterScript(item.codePointAt(0));

}

function dominantDirection(text) {
    
    let directions = countBy( text , char => {
    
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : 'none';
    
    }).filter( c => c.name!='none' );

    let total = directions.reduce(  (n , {count})  => n + count , 0);
    if(total == 0) return 'No directions found';
    
    let dominantDirection = directions.reduce( (a,b) => a.count > b.count ? a : b );

    return dominantDirection.name;

}

