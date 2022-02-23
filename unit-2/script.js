// 1
// Создайте две переменные a = 7 и b = 9. 
// Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;

console.log(a * b); //63

// 2
// Создайте две переменные c = 7 и d = 9. 
// Выведите на страницу результат деления c на d.

let c = 7;
let d = 9;

document.querySelector('.cd').innerHTML = c / d; //0.7777777777777778

// 3
// Создайте две переменные e = 3 и f = 5. 
// Выведите на страницу результат сложения e + f.

let e = 3;
let f = 5;

document.querySelector('.ef').innerHTML = e + f; //8

// 4
// Создайте две переменные e1 = '3' и f1 = 5. 
// Выведите на страницу результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;

document.querySelector('.e1f1').innerHTML = e1 + f1;
//35 Оператор "+" при работе со строкой и числом соединяет (канкатенация) строку, 
// в которой число (string) с числом (number), а не производит операцию "сложения".

// 5
// Создайте две переменные e2 = 3 и f2 = 0. 
// Выведите на страницу результат деления e2 на f2.

let e2 = 3;
let f2 = 0;

document.querySelector('.e2f2').innerHTML = e2 / f2; //Infinity

// 6
// Создайте две переменные e3 = 3 и f3 = 'Hello'. 
// Выведите на страницу результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';

document.querySelector('.e3hello').innerHTML = e3 + f3; // 3Hello

// 7
// Создайте две переменные e4 = 3 и f4 = 'Hello'. 
// Выведите на страницу результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';

document.querySelector('.e4hello').innerHTML = e3 * f3; //Nan

// 8
// По нажатию на кнопку .b-8 выполняется функция, которая выводит в div.out-8 то, 
// что пользователь ввел в input.i-8.

let input8 = document.querySelector('.i-8');
let button8 = document.querySelector('.b-8');
let div8 = document.querySelector('.out-8');

button8.onclick = function() {
    let b = input8.value;
    div8.innerHTML = b;
}

// 9
// По нажатию на кнопку .b-9 выполняется функция t9, 
// которая выводит в div.out-9 то, что пользователь ввел в input.i-9.
// Добавьте очистку input после нажатия кнопки.

let input9 = document.querySelector('.i-9');
let button9 = document.querySelector('.b-9');
let div9 = document.querySelector('.out-9');

button9.onclick = function t9() {
    let b = input9.value;
    div9.innerHTML = b;
    input9.value = ''
}

// 10
// По нажатию на кнопку .b-10 выполняется функция t
// которая выводит в div.out-10 то, что пользователь ввел в input.i-10 умноженное на 20.

let input10 = document.querySelector('.i-10');
let button10 = document.querySelector('.b-10');
let div10 = document.querySelector('.out-10');

button10.onclick = function t() {
    let b = input10.value;
    div10.innerHTML = b * 20;
}

// 11
// По нажатию на кнопку .b-11 выполняется функция t11, 
// которая выводит на страницу в .out-11 число, 
// которое ввел пользователь в i-11 и к нему добавленное число 55. 
// В этой задаче мы не приводим к числу полученное из input.

let input11 = document.querySelector('.i-11');
let button11 = document.querySelector('.b-11');
let div11 = document.querySelector('.out-11');

button11.onclick = function t11() {
    let b = input11.value;
    div11.innerHTML = b + 55;
}

// 12
// По нажатию на кнопку выполняется функция t12. 
// Функция должна получить данные из input i.12-1 и i.12-2 
// (пользователь вводин в них фамилию и имя). После чего вывести в .out-12 
// строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
// Обращаю ваше внимание - с этого момента мы работаем строго по заданию. 
// Hello - с большой буквы. Между Hello имя один пробел 
// (вы же включили отображение пробелов?).
// Вы не добавляете "от себя" - запятые, любые другие слова и символы. 
// Аналогичные правила действуют и дальше по курсу.

let inputN = document.querySelector('.i-12-1');
let inputS = document.querySelector('.i-12-2');
let button12 = document.querySelector('.b-12');
let div12 = document.querySelector('.out-12');

button12.onclick = function t12() {
    let n = inputN.value;
    let s = inputS.value;
    // div12.innerHTML = 'Hello' ' ' + n + ' ' + s;
    div12.innerHTML = `Hello ${n} ${s}`
}

// 13
// При нажатии кнопки .b-13 выполняется t13. 
// Функция получает из input.i-13-1 и .i-13-2 числа в переменные a, b. 
// После чего в .out-13 выводит их сумму. Преобразовывайте a, b в числа!!!!

let inputFirst = document.querySelector('.i-13-1');
let inputSecond = document.querySelector('.i-13-2');
let button13 = document.querySelector('.b-13');
let div13 = document.querySelector('.out-13');

button13.onclick = function t13() {
    let f = +inputFirst.value;
    let s = +inputSecond.value;
    div13.innerHTML = f + s;
}

// 14
// По нажатию кнопки .b-14 выполняется функция t14. 
// Она заменяет значение value в input.i-14 на строку 'Go'

let input14 = document.querySelector('.i-14');
let button14 = document.querySelector('.b-14');


button14.onclick = function t14() {
    input14.value = 'Go';
}

// 15
// По нажатию кнопки .b-15 выполняется функция t15. 
// Она присваивает .i-15 свойство style.border = "4px solid red".

let input15 = document.querySelector('.i-15');
let button15 = document.querySelector('.b-15');

button15.onclick = function t15() {
    input15.style.border = "4px solid red";
}

// 16
// По нажатию на кнопку .b-16 выполняется функция t16. 
// Функция получает из .i-16-1 и i-16-2 числа. 
// Выведите в .out-16 сумму данных чисел по нажатию кнопки b-16. 
// Не переводите полученное из input в число!!!!

let inputFir = document.querySelector('.i-16-1');
let inputSec = document.querySelector('.i-16-2');
let button16 = document.querySelector('.b-16');
let div16 = document.querySelector('.out-16');

button16.onclick = function t16() {
    let f = inputFir.value;
    let s = inputSec.value;
    div16.innerHTML = f + s;
}

// 17
// По нажатию на кнопку .b-17 выполняется функция t17. 
// Функция получает из .i-17 число. Изучите работу кода и запомните отличия. 
// Попробуйте ввести числа 5, 4zz, zz4, -200, 33.05

let input17 = document.querySelector('.i-17');
let button17 = document.querySelector('.b-17');
let div17 = document.querySelector('.out-17');

button17.onclick = function t17() {
    let b = +input17.value;
    div17.innerHTML = b;
}

// 18
// По нажатию на кнопку .b-18 выполняется функция t18. 
// Функция получает из .i-18 число в переменную a. 
// Выводит в out-18 результат операции parseFloat(a). 
// Попробуйте ввести значения 5, 33.02, 33.9a, -20.01

let input18 = document.querySelector('.i-18');
let button18 = document.querySelector('.b-18');
let div18 = document.querySelector('.out-18');

button18.onclick = function t18() {
    let a = input18.value;
    div18.innerHTML = parseFloat(a);
}

// 19
// По нажатию кнопки .b-19 функция t19 дожна в out-19 
// вывести сумму двух отрицательных чисел из input .i-19-1 и .i-19-2.

let inputFirs = document.querySelector('.i-19-1');
let inputSeco = document.querySelector('.i-19-2');
let button19 = document.querySelector('.b-19');
let div19 = document.querySelector('.out-19');

button19.onclick = function t19() {
    let f = +inputFirs.value;
    let s = +inputSeco.value;
    div19.innerHTML = f + s;
}

// 20
// При нажатии на кнопку .b-20 в out-20 выводится число - 
// сколько раз была нажата кнопка .b-20.

let button20 = document.querySelector('.b-20');
let div20 = document.querySelector('.out-20');
let a20 = 0
    
button20.onclick = function t20() {
    a20++
    div20.innerHTML = a20;
}
    
