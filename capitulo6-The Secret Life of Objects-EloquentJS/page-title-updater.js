

let scripts = document.getElementsByTagName('script');

for( let script of scripts ){

    if(script.attributes['add-my-name-to-page-title'])
    {
        setTimeout(function(){
       
            document['title'] = document.title +
                                            '-'+
                                            script.src.split(['/'])
                                            [script.src.split(['/']).length-1];

        },1500);
        break;
    }
}

