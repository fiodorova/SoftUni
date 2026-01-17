function towns(input){
    for (const elem of input) {
        let info = elem.split(' | ');
        let townInfo = {}
        let town = info[0];
        let latitude = Number(info[1]).toFixed(2);
        let longitude = Number(info[2]).toFixed(2);
        townInfo.town = town;
        townInfo.latitude = latitude;
        townInfo.longitude = longitude;
        console.log(townInfo);        
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
towns(['Plovdiv | 136.45 | 812.575'])