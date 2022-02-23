// 1
// При нажатии кнопки .b-1 срабатывает функция f1. 
// Функция должна прочитать содержимое .i-1 и сравнить его с числом 4 (сравнение ==). 
// Результат сравнения - true или false выведите в .out-1.

let input1 = document.querySelector('.i-1');
let button1 = document.querySelector('.b-1');
let out1 = document.querySelector('.out-1');

button1.onclick = function f1() {
    let b = +input1.value;
    out1.innerHTML = b == 4;
}

// 2
// Даны две переменные a21 и a22. При нажатии кнопки .b-2, запускается функция f2. 
// Функция должна сравнить переменные с помощью if else и вывести в .out-2 число, которое больше. 
// Вариант равенства переменных не рассматриваем.

let a21 = 5;
let a22 = 3;
let button2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');

button2.onclick = function f2() {
    if (a21 > a22) {
        out2.innerHTML = a21;
    }
    else {
        out2.innerHTML = a22;
    }
}

// 3
// Даны 2 input - .i-31 и .i-32, оба - input[type=number]. 
// При нажатии кнопки .b-3 срабатывает функция f3. 
// Функция должна сравнить числа из input, вывести в .out-3 большее число.
// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let input31 = document.querySelector('.i-31');
let input32 = document.querySelector('.i-32');
let button3 = document.querySelector('.b-3');
let out3 = document.querySelector('.out-3');

button3.onclick = function f3() {
    if (input3_1 > input3_2) {
        let a = +input3_1.value;
        out3.innerHTML = a;
    }
    else {
        let b = +input3_2.value;
        out3.innerHTML = b;
    }
}

// 4
// Пользователь вводит в .i-4 год своего рождения. Есть кнопка .b-4 которая запускает функцию f4. 
// Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let input4 = document.querySelector('.i-4');
let button4 = document.querySelector('.b-4');
let out4 = document.querySelector('.out-4');

button4.onclick = function f4() {
    if (+input4.value < 2005) {
        out4.innerHTML = 1;
    }
    else {
        out4.innerHTML = 0;
    }
}

// 5
// На странице есть input c классом i-5, куда пользователь может ввести число. 
// Есть кнопка b-5 которая запускает функцию f5. 
// Функция должна вывести в .out-5 символ 'm' если число меньше нуля, 
// 0 если число равно нулю и число 1 если больше.

let input5 = document.querySelector('.i-5');
let button5 = document.querySelector('.b-5');
let out5 = document.querySelector('.out-5');

button5.onclick = function f5() {
    if (+input5.value < 0) {
        out5.innerHTML = 'm';
    }
    else if (+input5.value == 0) {
        out5.innerHTML = 0;
    }
    else {
        out5.innerHTML = 1;
    }
}

// 6
// На странице есть input с классом i-6, куда пользователь может ввести число. 
// Есть кнопка .b-6 которая запускает функцию f6. 
// Функция должна вывести в .out-6 слово even если число четное и odd если нечетное. 
// Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). 
// Если остаток равен нулю - четное, нет - нечетное.

let input6 = document.querySelector('.i-6');
let button6 = document.querySelector('.b-6');
let out6 = document.querySelector('.out-6');

button6.onclick = function f6() {
    if (+input6.value %2 == 0) {
        out6.innerHTML = 'even';
    }
    else {
        out6.innerHTML = 'odd';
    }
}

// 7
// Даны 2 input - .i-71 и .i-72, оба - input[type=number]. 
// При нажатии кнопки .b-7 срабатывает функция f7. 
// Функция должна число из .i-71 возвести в степень .i-72, вывести результат в .out-7. 
// Для возведения в степень можно использовать **, или Math.pow.

let input71 = document.querySelector('.i-71');
let input72 = document.querySelector('.i-72');
let button7 = document.querySelector('.b-7');
let out7 = document.querySelector('.out-7');

button7.onclick = function f7() {
    let a = +input71.value;
    let b = +input72.value;
    out7.innerHTML = a ** b;
}

// 8
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. 
// При ее нажатии срабатывает функция f8. 
// Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с 1, 2, 3. 
// И если число выбрано - 1, то вывести в .out-8 строку one, если 2 - two, если 3 - three. 
// Напоминаю - это программирование. 
// Как указано в задании - так и выводим. Т.е. Three с большой буквы - ошибка!!!

let select8 = document.querySelector('.s-8');
let button8 = document.querySelector('.b-8');
let out8 = document.querySelector('.out-8');

button8.onclick = function f8() {
    const value = select8.value
    switch(value) {
        case 'value1':
            out8.innerHTML = 'one';
            break
        case 'value2':
            out8.innerHTML = 'two';
            break
        case 'value3':
            out8.innerHTML = 'three';
            break
    }
    
}


// 9
// Есть input с классом .i-9, куда пользователь может ввести номер квартиры. 
// Есть кнопка .b-9 которая запускает функцию f9. 
// Функция должна вывести в .out-9 номер подъезда, в котором находится квартира.

// если от 1 включительно до 32 включительно - то вывести цифру 1
// если от 33 (включительно) до 43(включительно) - то вывести 2
// если от 44(включительно) до 64 (всключительно) - то 3
// В противном случае, вывести 0.

let input9 = document.querySelector('.i-9');
let button9 = document.querySelector('.b-9');
let out9 = document.querySelector('.out-9');

button9.onclick = function f9() {
    const value = input9.value
    if (value >= 1 && value <= 32) {
        out9.innerHTML = 1;
    }
    else if (value >= 33 && value <= 43) {
        out9.innerHTML = 2;
    }
    else if (value >= 44 && value <= 64) {
        out9.innerHTML = 2;
    }
    else {
        out9.innerHTML = 0;
    }
}

// 10
// Дан select .s-100. По нажатию кнопки, выведите value выбранного option в .out-10.

let select10 = document.querySelector('.s-100');
let button10 = document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');

button10.onclick = function f10() {
    const value = select10.value
    out10.innerHTML = value;
}

// 11
// Дан select .s-110. 
// По изменению состояния select (событие onchange) выведите value выбранного option в .out-11.

let select11 = document.querySelector('.s-110');


select11.onchange = function f11() {
    let out11 = document.querySelector('.out-11');
    out11.innerHTML = select11.value;
}

// 12
// Дан input .i-120. По нажатию кнопки получите значение из input в переменную, 
// а затем выведите в .out-12 typeof полученной переменной. Typeof позволяет определить тип данных. 
// Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12(){
   let v = i120.value;
   document.querySelector('.out-12').innerHTML = (typeof v);
}

document.querySelector('.b-12').onclick = f12;

// 13
// Дан input i-130. В отличие от предыдущего задания - input type number. 
// По нажатию кнопки получите значение из input в переменную, а затем выведите в out-13 typeof полученной переменной. 
// Typeof позволяет определить тип данных. 
// Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?

let i130 = document.querySelector('.i-130');

function f13(){
    let v = i130.value;
    document.querySelector('.out-13').innerHTML = (typeof v);
}

document.querySelector('.b-13').onclick = f13;

// 14
// Дан input .i-141 и .i-142, type=number. Дан select .s-143, который содержит две операции - +, -, *, / . 
// Дана кнопка b-14, при нажатии на которую срабатывает функция f14. 
// Функция выводит в .out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. 
// Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е. 14.


let button14 = document.querySelector('.b-14');

document.querySelector('.b-14').onclick = f14;

function f14(){
    let i141 = +document.querySelector('.i-141').value;
    let i142 = +document.querySelector('.i-142').value;
    let select143 = document.querySelector('.s-143').value;
    let out14 = document.querySelector('.out-14');
   
    if (select143 === "+") {
        out14.innerHTML = i141 + i142;
    }
    else if (select143 === "-") {
        out14.innerHTML = i141 - i142;
    }
    else if (select143 === "*") {
        out14.innerHTML = i141 * i142;
    }
    else if (select143 === "/") {
        out14.innerHTML = i141 / i142;
    }
}


// 15
// Дан select .s-151 и .s-152, каждый из которых содержит 1 и 0. 
// Дан select .s-153, который содержит две операции - && и || . 
// Дана кнопка .b-15, при нажатии на которую срабатывает функция f15. 
// Функция выводит в .out-15 результат логических операций выбранных в 3 select 
// к числам выбранным в первом и втором select. 
// Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.


let button15 = document.querySelector('.b-15');

function f15(){
    let select151 = +document.querySelector('.s-151').value;
    let select152 = +document.querySelector('.s-152').value;
    let select153 = document.querySelector('.s-153').value;
    let out15 = document.querySelector('.out-15');
    if (select153 === '&&') {
        out15.innerHTML = select151 && select152
    }
    else if (select153 === '||') {
        out15.innerHTML = select151 || select152
    }
}

document.querySelector('.b-15').onclick = f15;
