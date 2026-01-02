function loadingBar(number){

    if(number < 100){
        let loadBar = loading(number);
        console.log(`${number}% [${loadBar}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }

    function loading(num){
        let perc = num / 10;
        let bar = ''
        for(let i = 1; i <= perc; i++){
            bar += '%';
        }
        for(let j = perc; j < 10; j++){
            bar += '.';
        }
        return bar;
    }
}

loadingBar(0)
loadingBar(50)
loadingBar(100)