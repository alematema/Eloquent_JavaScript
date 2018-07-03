class Rabbit {
    
    constructor(type) {
      this.type = type;
    }

    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }

}
  
  let killerRabbit = new Rabbit("killer");
  let blackRabbit = new Rabbit("black");

  killerRabbit.speak('no words');
  blackRabbit.speak('black eyed peas');


console.log(Object.getPrototypeOf(killerRabbit) == Object.getPrototypeOf(killerRabbit));

//OVERRIDING DERIVED PROPERTIES

//When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself. If there was already a property with the same name in the prototype, this property will no longer affect the object, as it is now hidden behind the object’s own property.


Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
1

function Test(){
    this.test = 'testing';
}

Test.prototype.toString = function(){return 'ola'}

var obj = new Test();
console.log(obj);

    obj = {

    get prop() {return 'prop name is prop'},
    toString : function(){return this.prop}

}

console.log(obj.toString())


