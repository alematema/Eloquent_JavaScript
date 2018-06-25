let scripts = document.getElementsByTagName('script');

for( let i = 0; i < scripts.length; i++ ){

    if(scripts[i].attributes['add-my-name-to-page-title'])
    {
        setTimeout(function(){
       
            document['title'] = document.title +
                                            '-'+
                                            scripts[i].src.split(['/'])
                                            [scripts[i].src.split(['/']).length-1];

        },1500);
        break;
    }
}

