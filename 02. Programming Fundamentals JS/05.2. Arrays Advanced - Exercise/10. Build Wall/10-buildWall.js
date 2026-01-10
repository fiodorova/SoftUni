function buildWall(array){
    let cubicsDay = [];
    let cubicsTotal = 0
    let crews = array.filter(x => x < 30).length;

    while(crews > 0){
        let cubicsAllCrews = 0;

        for (let index = 0; index < array.length; index++) {
            if(array[index] < 30){
                array[index]++;
                cubicsAllCrews += 195;
                if(array[index] == 30){
                    crews--;
                }
            }            
        }
        cubicsTotal += cubicsAllCrews;
        cubicsDay.push(cubicsAllCrews);        
    }
    
    let costs = cubicsTotal * 1900;    
    console.log(cubicsDay.join(', '));
    console.log(`${costs} pesos`);
} 

buildWall([21, 25, 28])
buildWall([17])
buildWall([17, 22, 17, 19, 17])