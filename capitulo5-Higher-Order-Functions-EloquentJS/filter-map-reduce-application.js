//**************************************** */
// FIND THE SCRPIT WITH THE MOST CHARACTERS

function characterCount( script ){

    return script.ranges.reduce( ( count , [from,to] ) => count + (to - from), 0 );

}

console.log(SCRIPTS.reduce( (mostCharacterScript, b) => characterCount(mostCharacterScript) < characterCount(b) ? b : mostCharacterScript ));



//***************************************** */
//FINDS THE AVERAGE

function average( array ){
    return array.reduce( ( a , b) => a + b) / array.length;
}

//console.log('average',average([10,10,10]));

console.log( average(SCRIPTS.filter( s => s.living ).map( s => s.year )) );
console.log( average(SCRIPTS.filter( s => !s.living ).map( s => s.year )) );


//******************************************************* */
//FIGURING OUT WHAT SCRIPT A PIECE OF TEXT IS USING

//Remember that each script has an array of character code ranges associated with it. So given a character code, we could use a function like this to find the corresponding script (if any):

function characterScript(code) 
{
    for (let script of SCRIPTS) {
          //script.ranges.some( e => code >= e[0] && code < e[1] )
        if (script.ranges.some(([from, to]) => code >= from && code < to )) return script;
    }

    return null;

  }
  
  console.log(characterScript(121));

  //console.log([1,2,3,4,5].some(e => e < 0 || e > 4));

function countBy( items, groupName ){

    let counts = [];

    for( let item of items ){

        let name = groupName(item);
        
        let known = counts.findIndex( count => count.name == name );
        
        if( known == -1){

            counts.push({name,count:1});

        }else{

            counts[known].count++;

        }

    }

    return counts;

}

//console.log(countBy([1, 2, 3, 4, 5, 6, 7, 8, 9], n => n%2==0 ? 'pares':'impares'));

let groupName = function(char){
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
}
let text = '英国的狗说"woof"俄罗斯的狗:)说"тяв"';
//console.log(countBy(text, groupName).filter(({name}) => name != "none"));


//function that tells us which scripts are used in a piece of text.
//FUNCTION THAT TELLS US WICH SCRIPTS ARE USED IN A PIECE O TEXT

function textScripts(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");
  
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
  
    return scripts.map(({name, count}) => {
      return `${Math.round(count * 100 / total)}% ${name}`;}).join(", ");
  }
  
  console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
 