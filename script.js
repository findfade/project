"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() { 
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы - классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы - киноман');
        } else {
            alert('Ошибка');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''), 
                  b = prompt('Оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 20) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                alert('Вы ввели неправильные данные. Повторите попытку');
                console.log('заново');
                i--;
            }
        
        }
    },
    writeYourGenres: function(massive) {
        for (let i = 1; i < 4; i++) {
            let q = prompt('Ваш любимый жанр по номером ' + i);
            
            while (q == '' || q == null) {
                q = +prompt('Ваш любимый жанр по номером ' + i);
            }
            massive.push(q);
        }

        // personalMovieDB.genres.forEach((item, i) => {
        //     console.log(`Любимый жанр под номером ${i + 1} - это ${item}`);
        // });
    },
    showMyDB: function() {
        if (personalMovieDB.privat === false){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    forEach: () => {
        for(let i = 1; i < 4; i++) {
            console.log(`Любимый жанр под номером ${i} - это ${personalMovieDB.genres[i - 1]}`);
        }
    }
};

personalMovieDB.start();

personalMovieDB.detectLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres(personalMovieDB.genres);

personalMovieDB.forEach();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();
 
