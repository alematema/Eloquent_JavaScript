function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }

  /*


Note that this program doesn’t necessarily find the shortest sequence of operations. It is satisfied when it finds any sequence at all.

It is okay if you don’t see how it works right away. Let’s work through it, since it makes for a great exercise in recursive thinking.

The inner function find does the actual recursing. It takes two arguments: the current number and a string that records how we reached this number. If it finds a solution, it returns a string that shows how to get to the target. If no solution can be found starting from this number, it returns null.

To do this, the function performs one of three actions. If the current number is the target number, the current history is a way to reach that target, so it is returned. If the current number is greater than the target, there’s no sense in further exploring this branch because both adding and multiplying will only make the number bigger, so it returns null. Finally, if we’re still below the target number, the function tries both possible paths that start from the current number by calling itself twice, once for addition and once for multiplication. If the first call returns something that is not null, it is returned. Otherwise, the second call is returned, regardless of whether it produces a string or null.

To better understand how this function produces the effect we’re looking for, let’s look at all the calls to find that are made when searching for a solution for the number 13.

find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!

        The indentation indicates the depth of the call stack. The first time find is called, it starts by calling itself to explore the solution that starts with (1 + 5). That call will further recurse to explore every continued solution that yields a number less than or equal to the target number. Since it doesn’t find one that hits the target, it returns null back to the first call. There the || operator causes the call that explores (1 * 3) to happen. This search has more luck—its first recursive call, through yet another recursive call, hits upon the target number. That innermost call returns a string, and each of the || operators in the intermediate calls passes that string along, ultimately returning the solution.


  */

  function findSolution(target) {
  
    let inspect = [];
    function find(current, history) {
      
    let badIdent = ' ', fiveBranchIdent = '',threeBranchIdent = '',branchIdent='';
    let find5,find3;
      
      if (current == target) {
        return history;
      } else if (current > target) {
        //badIdent-=' ';
        inspect.push(badIdent + 'bad:'+history);
        
        
        return null;
      } else {
        
        find5 = find(current + 5, `(${history} + 5)`);
        find3 = find(current * 3, `(${history} * 3)`);
        if(find5){fiveBranchIdent+=' ';badIdent = fiveBranchIdent;branchIdent=fiveBranchIdent;}
        if(find3){threeBranchIdent+=' ';badIdent = threeBranchIdent;branchIdent=threeBranchIdent;}
        
        inspect.push(branchIdent + 'branching:'+history);
        return find5 || find3;
        
      }
    }
    let s = find(1,'1');
    console.log(inspect.reverse().join('\n'));
    return s;
  }
  
  console.log(findSolution(13));