function Switcher(defaultBehaviour=undefined) {
    
   let map = {};

   let add = function(key,callBack,...args){
                map[key] = {callBack,args};
                return this;
            };

    let remove = function(key){
                
            if( !(key in map) ) {
                console.log(`can't delete!!! ${key} not found.`);
                return;
            }

            delete map[key];

            };

    let Switch = function(thing){
                      
                try {
                    if(thing in map) {
                        return Reflect.apply(map[thing]['callBack'],map[thing]['callBack'],map[thing]['args']);
                    }else Default(thing);
                } catch (error) {
                    throw new Error(error);
                }
                
            };

    let Default = defaultBehaviour ? defaultBehaviour : key => console.log(`DEFAULT : nothing todo for ${key} `);

    let clear = function(){
                map = {};
            };

    let keys = function(){
        return Object.keys(map);
    };

    let values = function(){
        return Object.values(map);
    };

    let get = function(key){
        
        let callBack=undefined;

        if( key in map ) callBack = map[key]['callBack'];

        return callBack;
    };

   return {add,remove,Switch,clear,get};

};


( (context=window,defaultBehaviour) => 
    {

        let switcher = new Switcher(defaultBehaviour);
        context.switcher = switcher;
                
        console.log(`switcher initialized on ${context.constructor.name.toLowerCase()} context. Can be called as follows ${context.constructor.name.toLowerCase()}.switcher or switcher` );

    }
)();

