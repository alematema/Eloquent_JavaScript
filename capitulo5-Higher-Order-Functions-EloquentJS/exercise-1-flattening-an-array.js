//let arrays = [[1, 2, 3], [4, 5], [6]];
let arrays = [0, 1, [2,3], [4, 5, 6]];
function isArray(e){
    return typeof(e) == typeof(Array);
}
let arrayFlattener = ( a , b ) =>  { a = !Array.isArray(a)?[a]:a;return a.concat(b) } ;

console.log( arrays.reduce( arrayFlattener ));
