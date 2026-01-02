function NxNMatrix(n){

    for (let index = 1; index <= n; index++) {
        row(n);       
    }

    function row(a){
        let res = ""
        for (let j = 1; j <= n; j++) {
            res += a + ' ';            
        }
        console.log(res);  
    }    
}

NxNMatrix(3)
NxNMatrix(7)
NxNMatrix(2)