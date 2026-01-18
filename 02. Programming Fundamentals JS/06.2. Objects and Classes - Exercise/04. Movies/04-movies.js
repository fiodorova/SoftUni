function movies(array){
    let moviesList = [];

    for (const elem of array) {
        if(elem.includes('addMovie')){
            let nameMovie = elem.split('addMovie ')[1]
            moviesList.push({ name: nameMovie });
        } else if(elem.includes('directedBy')) {
            let info = elem.split(' directedBy ');
            let name = info[0];
            let director = info[1];
            let movie = moviesList.find((mov) => mov.name === name)
            if(movie){
                movie.director = director
            }       
        } else if(elem.includes('onDate')){
            let info = elem.split(' onDate ');
            let name = info[0];
            let date = info[1];
            let movie = moviesList.find((mov) => mov.name === name)
            if(movie){
                movie.date = date
            }  
        }  
    }

    for (const movie of moviesList) {
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }        
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )