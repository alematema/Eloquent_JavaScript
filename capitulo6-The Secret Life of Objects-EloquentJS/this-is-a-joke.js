var test = function(){console.log(this)};
//(test)();
//test = ()=>console.log(this);
//(test)();


test = function(){console.log(this.obj)};
var obj = {test};
obj.test();

test = ()=>console.log(this.obj);
obj = {test};
obj.test();

(function(){

    let env = 0;
    console.log('env ', env, 'obj ', this.obj);

})();

var test2 = function(){console.log('my name is ', this.name)};
test2 = ()=>console.log('my name is ', this.name);
var object = {name:'obj',sayName:()=>console.log('my name is ', this.name)};
object.sayName();