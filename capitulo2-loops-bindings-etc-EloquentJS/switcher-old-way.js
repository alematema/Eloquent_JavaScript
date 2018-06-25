let s = {

    map:{},

    add: function(key,callBack){
        this.map[key] = callBack;
    },

    remove:function(key){
        delete this.map[key];
    },

    switch:function(thing){
        try {
            if(this.map[thing]) {
                this.map[thing]();
            }else this.default(thing);
        } catch (error) {
            throw new Error(error);
        }
        
    },

    default: key => console.log(`DEFAULT : no action for key ${key} `),

    clear:function(){
        this.map = {};
    }

};

        //window.Switcher = s
       // window.Switch = Switcher.switch.bind(Switcher);

/*

switcher.add('vanila', function(){console.log('vanila callBack')});
//switcher.add('vanila', undefined);

console.log(switcher.map);

switcher.switch('vanila');

switcher.add('ice', function(){throw new Error('ice error')});
console.log(switcher.map);
try {
    switcher.switch('ice');
} catch (error) {
    console.log(error)
}


let timeKeysValues = {};
let keysCount = 100;
let key,value;
while(keysCount > 0){

    key = new Date().getTime() + keysCount*keysCount;
    value = () => console.log(`function called by ${key}`);

    timeKeysValues[key] = value;

    keysCount--;
};

switcher.clear();


for (key in timeKeysValues) switcher.add(key, timeKeysValues[key]);


window.switch = switcher.switch.bind(switcher);
console.log(this.switch('amora'));
//switcher.add('a','z');
//switcher.switch('a');



//switcher.switch(key);
//switcher.switch('amora');

*/



