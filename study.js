"use strict";

// УСЛОВИЯ

let num = 50;

//(num === 50) ? console.log("good") : console.log("not");

// switch (num) {
//     case "49": 
//         console.log("49");
//         break;
//     default:
//        console.log("noo");
//         break;
// }

//      ЦИКЛЫ

// do { 
//     console.log(num);
//     num++;
// }
// while (num <55);

// for (let i = 1; i < 15; i++) {
//     if (i === 6){
//         //break;
//         continue;
//     }
//     console.log(i);
// }

//       ФУНКЦИИ

// function ret() {
//     return 4 + 6;
// }

// const anNum = ret();
// console.log(anNum);

//      МЕТОДЫ СТРОК

// let str = 'my test string';
// console.log(str.indexOf('z'));
// console.log(str.toUpperCase());
// console.log(str.slice(0, 3));
// console.log(str.slice(3));
// console.log(str.substring(3, 0));
// console.log(str.substr(3, 4));
// console.log(str);

//     МЕТОДЫ ЧИСЕЛ

// const numb = 15.75;
// console.log(Math.round(numb));

// const numb2 = "54.6px";
// console.log(parseInt(numb2));
// console.log(parseFloat(numb2)); 

//      CALLBACK ФУНКЦИИ

// function callbackTest(lang, callback) {
//     console.log(`Я учу:${lang}?`);
//     callback();
// }

// function done() {
//     console.log('test callback');
// }

// callbackTest('Java Script', done);

//       ОБЪЕКТЫ

// let options = {
//     name: 'Test',
//     width: 1024,
//     disign: [1, 2, 3, 4],
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     maketest: function() {
//         console.log(options.name.toLowerCase());
//     }
// };

// options.maketest();

// const {border, bg} = options.colors;
// console.log(bg);
// console.log(options);

// console.log(Object.keys(options).length);

// delete options.height;
// for (let key in options ) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

//          МАССИВЫ

// let arr = [-1, 23, 3, 48, 6, 8];
// function compareNum (a, b) {return a - b;}
// arr.sort(compareNum); // сортировка по величине 
// console.log(arr);

// arr.forEach(function (number, i, arr) { 
//     // number - название элемента; i - порядковый номер элемента; 
//     //arr - ссылка на массив для работы
//     console.log(`${i}: ${number} внутри массива ${arr}`);
// });
// let strin = 'я, мы, ты, вы, он, она, оно';
// let arrStr = strin.split(', '); // split позволяет сделать массив из строки
// strin = arrStr.join(', '); // join наоборот делает строку из массива; strin до и после не отличается 
// arrStr.sort(); 

// for (let value in arr) {
//     console.log(arr[value]);
// }
// // "for of" с массивами выводит индексы 
// for (let value of arr) {
//     console.log(value);
// }
// // а "for in" значения 

