//a prototype, is JS, is another object that acts like a container, a source of properties shared by objects of the same type

let empty = {};
console.log(empty.toString)
console.log(empty.toString());

console.log(Object.getPrototypeOf(empty))
console.log(Object.keys(Object.getPrototypeOf(empty)))
console.log(typeof(Object.getPrototypeOf(empty)))

console.log(Object.getPrototypeOf(empty) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype))

// creating an object with specific prototype
//ALL Rabbits are supposed to have a mouth and make some sound
let protoRabbit = {

    say(noise){console.log(`The rabbit ${this.name} says ${noise}`, `its color is ${this.color}`)},
    color:'white'
}

let noisyRabbit = Object.create(protoRabbit);
//only noisy has a name. 
noisyRabbit.name = "bluc"
noisyRabbit.color = 'black'//is overidden
noisyRabbit.say('RSIIIIIIIIII-RSIIIIIIIIIIIIIII');

console.log(Object.getPrototypeOf(noisyRabbit))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(noisyRabbit)))