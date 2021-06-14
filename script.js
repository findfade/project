"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert('Вы - классический зритель');
} else if (numberOfFilms >= 30) {
    alert('Вы - киноман');
} else {
    alert('Ошибка');
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

console.log(personalMovieDB);


