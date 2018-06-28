/*
//FIRST PROGRAM

        let total = 0, count = 1;
        while (count <= 10) {
        total += count;
        count += 1;
        }
        console.log(total);


//SECOND PROGRAM

        console.log( sum(range(1, 10)) );




Which one, FIRST PROGRAM OR SECOND, is more likely to contain a bug?

If we count the size of the definitions of sum and range, the second program is also big—even bigger than the first. But still, I’d argue that it is more likely to be correct.

It is more likely to be correct because the solution is expressed in a vocabulary that corresponds to the problem being solved.Summing a range of numbers isn’ t about loops and counters.It is about ranges and sums.

The definitions of this vocabulary (the functions sum and range) will still involve loops, counters, and other incidental details. But because they are expressing simpler concepts than the program as a whole, they are easier to get right.    


ABSTRACTION

In the context of programming, these kinds of vocabularies are usually called abstractions. Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.

As an analogy, compare these two recipes for pea soup. The first one goes like this:

As an analogy, compare these two recipes for pea soup. The first one goes like this:

        Put 1 cup of dried peas per person into a container. Add water until the peas are well covered. Leave the peas in water for at least 12 hours. Take the peas out of the water and put them in a cooking pan. Add 4 cups of water per person. Cover the pan and keep the peas simmering for two hours. Take half an onion per person. Cut it into pieces with a knife. Add it to the peas. Take a stalk of celery per person. Cut it into pieces with a knife. Add it to the peas. Take a carrot per person. Cut it into pieces. With a knife! Add it to the peas. Cook for 10 more minutes.

And this is the second recipe:

        Per person: 1 cup dried split peas, half a chopped onion, a stalk of celery, and a carrot.

        Soak peas for 12 hours. Simmer for 2 hours in 4 cups of water (per person). Chop and add vegetables. Cook for 10 more minutes.

        The second is shorter and easier to interpret. But you do need to understand a few more cooking-related words such as soak, simmer, chop, and, I guess, vegetable.

When programming, we can’t rely on all the words we need to be waiting for us in the dictionary. Thus, we might fall into the pattern of the first recipe—work out the precise steps the computer has to perform, one by one, blind to the higher-level concepts that they express.

It is a useful skill, in programming, to notice when you are working at too low a level of abstraction.

ABSTRACTING REPETITION

Plain functions, as we’ve seen them so far, are a good way to build abstractions. But sometimes they fall short.

It is common for a program to do something a given number of times. You can write a for loop for that, like this:

        for (let i = 0; i < 10; i++) {
        console.log(i);
        }
Can we abstract “doing something N times” as a function? Well, it’s easy to write a function that calls console.log N times.

        function repeatLog(n) {
            for (let i = 0; i < n; i++) {
                console.log(i);
            }
        }

But what if we want to do something other than logging the numbers? Since “doing something” can be represented as a function and functions are just values, we can pass our action as a function value.

        function repeat(n, action) {
            for (let i = 0; i < n; i++) {
                action(i);
            }
        }

repeat(3, console.log);
// → 0
// → 1
// → 2
We don’t have to pass a predefined function to repeat. Often, it is easier to create a function value on the spot instead.

        let labels = [];
        repeat(5, i => {labels.push(`Unit ${i + 1}`);});
        console.log(labels);

        // → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]




HIGHER-ORDER FUNCTIONS

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. Since we have already seen that functions are regular values, there is nothing particularly remarkable about the fact that such functions exist. The term comes from mathematics, where the distinction between functions and other values is taken more seriously.

Higher-order functions allow us to abstract over actions, not just values. They come in several forms. For example, we can have functions that create new functions.

        function greaterThan(n) {
            return m => m > n;
        }
        let greaterThan10 = greaterThan(10);
        console.log(greaterThan10(11));
        // → true

And we can have functions that change other functions.

        function noisy(f) {
            return (...args) => {
                console.log("calling with", args);
                let result = f(...args);
                console.log("called with", args, ", returned", result);
                return result;
            };
        }

noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1


We can even write functions that provide new types of control flow.

    function unless(test, then) {
        if (!test) then();
    }

    repeat(3, n => {
        unless(n % 2 == 1, () => {
            console.log(n, "is even");
        });
    });

// → 0 is even
// → 2 is even


*/


function repeat(n, action){
    for ( let i = 0; i < n; i++){
        action(i);
    }
}


let labels = [];
repeat(5, i => labels.push(`Unit ${i+1}`));
console.log(labels);

function noisy(f) {
    return (...args) => {   console.log("calling with", args);
                            let result = f(...args);
                            console.log("called with", args, ", returned", result);
                            return result;
                         };
}
console.log(noisy(Math.min));
noisy(Math.min)(3, 2, 1);

function unless(test, then) {
    if (!test) then();
}

repeat(3, n => unless( n % 2 == 1, () => console.log(n, "is even")));

["A", "B"].forEach(l => { let combine=''; combine+=l; console.log(combine)});