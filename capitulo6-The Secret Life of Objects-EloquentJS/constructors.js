//constructors constructs objects that have in common with others the prototype but differ in some other properties.


let rabbitsCommonProperties= {
    speak(noise){console.log(`The rabbit${this.name ? ` ${ this.name } ` : ' ' }says ${noise}`)}
}

function makeRabbit(name=undefined){

    let rabbit = Object.create(rabbitsCommonProperties);
    if(name) rabbit.name = name;
    return rabbit;

}

let rabbit = makeRabbit('crusk');
rabbit.speak('ISISISISISIS');

let namelessRabbit = makeRabbit();
namelessRabbit.speak('IOSOSOSOSOS');

//AN EASIER way

// If you put the keyword new in front of a function call, the function is treated as a constructor. This means that an object with the right prototype is automatically created, bound to this in the function, and returned at the end of the function.

        function Rabbit(type) {
            this.type = type;
        } 


//The prototype object used when constructing objects is found by taking the prototype property of the constructor function.

        Rabbit.prototype.speak = function(line) {
            console.log(`The ${this.type} rabbit says '${line}'`);
        };


        let weirdRabbit = new Rabbit("weird");
        weirdRabbit.speak('bla');
        
//Constructors (all functions, in fact) automatically get a property named prototype, which by default holds a plain, empty object that derives from Object.prototype. You can overwrite it with a new object if you want. Or you can add properties to the existing object, as the example does.

//By convention, the names of constructors are capitalized so that they can easily be distinguished from other functions.

//It is important to understand the distinction between the way a prototype is associated with a constructor (through its prototype property) and the way objects have a prototype (which can be found with Object.getPrototypeOf). The actual prototype of a constructor is Function.prototype since constructors are functions. Its prototype property holds the prototype used for instances created through it.

console.log(Object.getPrototypeOf(Rabbit) ==  Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// → true        

console.log(Object.getPrototypeOf(Rabbit));
console.log(Rabbit.prototype);
//console.log(Object.getPrototypeOf(Rabbit)('ji'))

//CLASS NOTATION
//So JavaScript classes are constructor functions with a prototype property. That is how they work, and until 2015, that was how you had to write them.

/*

awkward is something very not fitting but the not awkward words refer to an idea of a thing that fits pretty well, i would say the not awkward words reference an idea that can be precisely referenced by the word suitable. So, not awkwards is equals to suitable, or equivalently, awkwards is equivalent to not fittable.
In the human realm, finding equivalences is a higher order mind functioning.
Using mind for mesures, comparisons, and other objectiveness encompasses the human material realm. 
But going beyond mind is the highest human endeavour and the most worth achievement.
But be aware... even the going beyond mind is some thing like dreaming... because what is the distance of a thought ? Are you aware that you have been living in a thought identity ? 
We have been sleeping for a while, under the spell of the drug of the I... we got hypnotized by the serpent's voice ... that  as God's voice says I AM... but when we woked up from that spell, we see we were just dreaming ... and nothing really happened ... we just confused ourselves with our bodies and our minds... but the breathig effect of the desgusting odors of death have gone... and we just can see clearly again. We still remain the same. Unbounded, limitless, un born, untouched, formless, ... because the Truth cannot be changed. Its immutable. I am THAT.  


*/