class Group {

    constructor(){
        this.elements = [];
        return this;
    }

    add(e){
        if ( ! this.has(e) ) this.elements.push(e);
    }

    delete(e){
        if ( this.elements.includes(e) ) this.elements = this.elements.filter( gEl => gEl != e );
    }

    has(e){
        return this.elements.includes(e);
    }

    get size(){return this.elements.length}

    static from( iterable ){

        let elements = [];
        for( let e of iterable ) if( ! elements.includes(e) ) elements.push(e);

        let g = new Group();
        g.elements = elements;

        return g;
    }

}


let group = new Group();
console.log(group.has({}));
console.log(group.has(1));
let obj = {};
group.add(obj);
group.add('1');
console.log(group.has(obj));
console.log(group.has('1'));
group.delete(obj);
group.delete('1');
console.log(group.has(obj));
console.log(group.has('1'));
console.log(group.elements);
console.log(group.size);

group = Group.from([1,2,3]);
console.log(group.elements);
console.log(group.has(2))
group.add(2);
console.log(group.elements);
group = Group.from('sixteenyearsold');
console.log(group.elements);
group.delete('s');
console.log(group.elements);


