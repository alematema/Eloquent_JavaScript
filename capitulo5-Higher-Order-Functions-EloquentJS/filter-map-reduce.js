/*SUMMARY

Being able to pass function values to other functions is a deeply useful aspect of JavaScript. It allows us to write functions that model computations with “gaps” in them. The code that calls these functions can fill in the gaps by providing function values.

*/


/*HIGHER-ORDER FUNCTIONS are functions that operates on other functions or by taking function value as arguments or by returning them. */

/*COLLECTING WITH FILTER


    The function uses the argument named test, a function value, to fill a “gap” in the computation—the process of deciding which elements to collect.

    Note how the filter function, rather than deleting elements from the existing array, builds up a new array with only the elements that pass the test. 
    
    This function is pure. 
    It does not modify the array it is given.



*/ 
function filter ( array , test ){

    let filtered = [];
    for( e of array ) if ( test(e) ) filtered.push(e);
    return filtered;

}

//console.log (filter ( SCRIPTS , script => script.living  ));
//console.log (filter ( SCRIPTS , () => true  ));
//console.log (filter ( SCRIPTS , () => false  ));
//console.log( SCRIPTS.filter( script => script.living )); 
//A VALUE AS FUNCTION IS PASSED TO FILTER TO DECIDE WICH ELEMENT TO COLLECT

/*TRANSFORMING WITH MAPS
Say we have an array of objects representing scripts, produced by filtering the SCRIPTS array somehow. But we want an array of names, which is easier to inspect.

The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been mapped to a new form by the function.*/ 

function map ( array , transform ){

    let transformed = [];

    for ( e of array ) transformed.push( transform(e) );

    return transformed;

}
// only if transform != Identity Function,ID, we can see the transforming effects ID : t => t // console.log(SCRIPTS.map( e => e ));
//console.log( map( SCRIPTS.filter( s => s.living) , script => script.name ) );
//console.log( map( SCRIPTS.filter( s => !s.living) , script => script.name ) );
//let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
//console.log(map(rtlScripts, s => s.name));
//console.log( SCRIPTS.filter( s => !s.living ).map( s => s.name ) );


/*SUMMARIZING WITH REDUCE

Another common thing to do with arrays is to compute a single value from them. Our recurring example, summing a collection of numbers, is an instance of this. Another example is finding the script with the most characters.

The higher-order operation that represents this pattern is called reduce (sometimes also called fold). It builds a value by repeatedly taking a single element from the array and combining it with the current value. When summing numbers, you’d start with the number zero and, for each element, add that to the sum.

The parameters to reduce are, apart from the array, a combining function and a start value. 

*/

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
  }

//console.log( reduce( [1,2,3,4,5,6,7,8,9,10] , (a , b) => a + b , 0));
//console.log( [1,2,3,4,5,6,7,8,9,10].reduce( (a , b) => a + b) );


