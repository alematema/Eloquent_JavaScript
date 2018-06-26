console.log('#'.repeat(13));

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
console.log("coconut".lastIndexOf("o"));

console.log("one two three".indexOf("ee"));
/*
The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.*/

console.log("  okay \n ".trim());

/*The zeroPad function from the previous chapter also exists as a method. It is called padStart and takes the desired length and padding character as arguments.


1
*/ 
console.log(String(6).padStart(3, "0"));


function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }
  console.log(max(4, 5, 1,7, -2));

  let numbers = [5, 1, 7];
    console.log(max(4,...numbers,-2));