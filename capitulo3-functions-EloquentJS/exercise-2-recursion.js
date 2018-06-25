function isEven(num) {
    
    let isEven;

    if( Number.isInteger(num) ){
      
      let isEven = function(num){
       
        if( num == 0 ) {isEven = true;return}
        if( num == 1 ) {isEven = false;return}
    
        num >= 0 ? num-=2 : num+=2 ; 
        
        isEven(num);
      
      } 
      
      isEven(num);//inner most isEven call

      return isEven;
    
    }else{

      return `ERROR : not an INTEGER ${num}`; 

    }
      
  }

  console.log(isEven(0));