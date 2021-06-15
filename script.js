"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

detectPersonalLevel();

rememberMyFilms();

writeYourGenres(personalMovieDB.genres);

showMyDB();

function showMyDB() {
    if (personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}



function rememberMyFilms() {
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
}

function detectPersonalLevel () {
    if (numberOfFilms < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert('Вы - классический зритель');
    } else if (numberOfFilms >= 30) {
        alert('Вы - киноман');
    } else {
        alert('Ошибка');
    }
}

function writeYourGenres(massive) {
    let q;

    for (let i = 1; i < 4; i++) {
        q = prompt('Ваш любимый жанр по номером ' + i);
        massive.push(q);

        while (q == '' || q == null) {
            q = +prompt('Ваш любимый жанр по номером ' + i);
        }

        massive.push(q);
    }
}

    
