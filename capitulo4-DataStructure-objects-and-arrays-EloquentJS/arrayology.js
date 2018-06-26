let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

remember('task1');
remember('task2');

console.log(todoList);

console.log(getTask());

console.log(todoList);

rememberUrgently('task3')

console.log(todoList);

console.log([0, 1, 2, 3, 4].slice(2,4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
console.log([0, 1, 2, 3, 4].slice());

for (let i of [9,1,2,3,4,6,7])console.log(i);

function remove ( array , index ) {

    return array.slice(0,index).concat(array.slice(index+1));

}

let array = [0,1,2,3,4,5,6,7,8,9];

console.log(remove(array, 5));


console.log(typeof(1))
console.log(typeof('abc'));
console.log(typeof(false));

console.log("  okay \n ".trim());