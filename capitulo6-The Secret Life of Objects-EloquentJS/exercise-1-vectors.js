class Vector {

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    plus(vector){return new Vector(this.x + vector.x, this.y + vector.y)};
    minus(vector){return new Vector(this.x - vector.x, this.y - vector.y)};

    get length() {return Math.sqrt(this.x*this.x + this.y*this.y)}

}


var v1 = new Vector(3,4);
var v2 = new Vector(-3,-4);

console.log(v1.length, v2.length);
console.log(v1.plus(v2));
console.log(v1.minus(v2));