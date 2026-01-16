function songsList(input){
    let n = input[0];
    let typeSong = input.pop()

    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    
    let songs = [];

    for (let i = 1; i <= n; i++) {
        let tokens = input[i].split('_');
        let song = new Song(tokens[0], tokens[1], tokens[2])
        songs.push(song);
    }
    
    if(typeSong == 'all'){
        songs.forEach((i) => console.log(i.name));

    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}

songsList([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )
songsList([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )
songsList([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )
