//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

let button1 = document.querySelector('.b-1');

function t1() {

    let out = document.querySelector('.out-1')

    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++) {
            out.innerHTML += '*'
        }
        out.innerHTML += '_'
    }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>

let button2 = document.querySelector('.b-2');

function t2() {
    let out = document.querySelector('.out-2')

    for (let i = 1; i < 4; i++){

        out.innerHTML += `${i} <br>`;В

        for (let j = 0; j < 3; j++) {
            out.innerHTML += '*_'
        }
        out.innerHTML += '<br>';
    }
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>

let button3 = document.querySelector('.b-3');

function t3() {
    let out = document.querySelector('.out-3')

    for (let i = 1; i < 5; i++){

        for (let j = 0; j < 3; j++) {
            out.innerHTML += '*_'
        }
        out.innerHTML += '<br>';
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *

let button4 = document.querySelector('.b-4');

function t4() {
    let out = document.querySelector('.out-4')

    for (let i = 1; i < 4; i++){

        out.innerHTML += i + '_';

        for (let j = 1; j < 6; j++) {
            out.innerHTML += j + '*';
        }
        
    }
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>

let button5 = document.querySelector('.b-5');

function t5() {
let out = document.querySelector('.out-5')

    for (let i = 0; i < 3; i++){

        out.innerHTML += '<br>';
        
        for (let j = 1; j < 6; j++) {

            if (j % 2 !== 0) {
            out.innerHTML += 1;
            }
            else {
                out.innerHTML += 0;
            }
        }
        
    }
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x

let button6 = document.querySelector('.b-6');

function t6() {
    let out = document.querySelector('.out-6')

    for (let i = 0; i < 3; i++){

        out.innerHTML += '<br>';

        for (let j = 0; j < 1; j++) {
            out.innerHTML += '10x01x';
        }
        
    }
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

let button7 = document.querySelector('.b-7');

function t7() {
    let out = document.querySelector('.out-7')

    for (let i = 1; i < 5; i++){

        for (let j = 0; j < i; j++) {
            out.innerHTML += '*';
        }
        out.innerHTML += '<br>';
    }
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

let button8 = document.querySelector('.b-8');

function t8() {
    let out = document.querySelector('.out-8')

    for (let i = 1; i < 5; i++){

        for (let j = 0; j > i; j--) {
            out.innerHTML += '*';
        }
        out.innerHTML += '<br>';
    }
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

let button9 = document.querySelector('.b-9');

function t9() {
    let out = document.querySelector('.out-9')

    for (let i = 1; i < 7; i++){

        for (let j = 1; j < i; j++) {
            out.innerHTML += `${j} _`;
        }
        out.innerHTML += '<br>';
    }
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_

let button10 = document.querySelector('.b-10');

function t10() {
    let out = document.querySelector('.out-10')
    let text = '';

    for (let i = 0; i < 5; i++){

        for (let j = 1; j <= 10; j++) {
            
            if (i === 0 && j < 10) {
                
                text += '0';
            }
            
            text += (10 * i + j) + '_';
            
        }
        text += '<br>';
    }
    out.innerHTML = text;
}

document.querySelector('.b-10').onclick = t10;





// 1.1
function f11() {
    const text = document.querySelector('.out-11');
    let out = '';

    for (let i = 1; i <= 9; i++) {
        for (let k = 1; k <= 9; k++) {
            out += `${i} * ${k} = ${k*i}<br>`;
        }
        out += '<br>'
    }

    text.innerHTML = out;
}
document.querySelector('.b-11').onclick = f11;


// 1.2
function f12() {
const text = document.querySelector('.out-12');
    let out = '';

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 5; k++) {
            out += '*';
        }
        out += '<br>';
    }
    text.innerHTML = out;
}
document.querySelector('.b-12').onclick = f12;

// 1.3
function f13() {
const text = document.querySelector('.out-13');
    let out = '';

    for (let i = 5; i > 0; i--) {
        for (let k = 0; k < i; k++) {
            out += '*';
        }
        out += '<br>';
    }
    text.innerHTML = out;
}

document.querySelector('.b-13').onclick = f13;


// 1.4
function f14() {
    const text = document.querySelector('.out-14');
    let out = '';
    let q = 3;
    let q2 = 11;

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 12; k++){

            if (k < q || k > q2) {
                out += '&nbsp;&nbsp;';
            }
            else {
                out += '* ';
            }
        }
        q--;
        q2--;
        out += '<br>';
    }
    text.innerHTML = out;
}

document.querySelector('.b-14').onclick = f14;

// 1.5
function f15() {
    const text = document.querySelector('.out-15');
    let out = '';
    let q = 2;
    let q2 = 1;

    for(let i = 0; i < 5; i++){
        for(let k = 1; k < 4; k++) {
            if (k > q && (i === 1 || i === 3)) {
                out += '&nbsp;&nbsp';

            } else if (k > q2 && (i === 0 || i === 4)) {
                out += '&nbsp;&nbsp';
            } else {
                out += '*';
            }
        }
            out += '<br>';
     }
    text.innerHTML = out;
}

document.querySelector('.b-15').onclick = f15;
// 1.6
function f16() {
    const text = document.querySelector('.out-16');
    let out = '';
    for(let i = 0; i < 5; i++){
        for(let k = 0; k < 6; k++){
            if(i > 3 || i < 1){
                out += '*';
            } else if(k < 1){
                out += '* *' + '&nbsp;&nbsp'
            }

        }
        out += '<br>';
    }
    text.innerHTML = out;
}

document.querySelector('.b-16').onclick = f16;
// 1.7
function f17() {
    const text = document.querySelector('.out-17');
    let out = '';
    for(let i = 5; i > 0; i--){
        for(let k = 0; k < i; k++){
            out += `${(i - k) + ' '}`;
        }
        out += '<br>';
    }
    text.innerHTML = out;
}

document.querySelector('.b-17').onclick = f17;
// 1.8
function f18() {
    const text = document.querySelector('.out-18');
    let out = '';
    for(let i = 1; i < 6; i++){
        for(let k = 0; k < i; k++){
            out += `${(i - k) + ' '}`;
        }
        out += '<br>';
    }
    text.innerHTML = out;
}

document.querySelector('.b-18').onclick = f18;
// 1.9
function f19() {
    const text = document.querySelector('.out-19');
    let out = '';
    let q = 5;
    for(let i = 1; i < 6; i++){
        for(let k = 1; k < 6; k++){
            if(k < q){
                out += 'X ';
            } else {
                out +=  `${((i - k) + 1) + ' '}`;
            }
        }
        q--;
        out += '<br>';
    }
    text.innerHTML = out;
}

document.querySelector('.b-19').onclick = f19;
// 1.10
function f20() {
    const text = document.querySelector('.out-20');
    let out = '';
    for(let i = 2; i < 7; i++){
        for(let k = 2; k <= i; k++){
            out +=  `${(i - 1) + ' '}`;
        }
        out += '<br>';
    }
    text.innerHTML = out;
}

document.querySelector('.b-20').onclick = f20;
// 1.11

function f21() {
    const text = document.querySelector('.out-21');
    let out = '';

    for(let i = 0; i <= 5; i++){
        for(let k = 0; k < i; k++){

            if(i % 2 !== 0){
                out += `${(5 - i + 1) + ' '}`
            } else {
                out += 'X ';
            }
        }
        out += '<br>';
    }
    text.innerHTML = out;
}

document.querySelector('.b-21').onclick = f21;

// 1.12
function f22() {
    const text = document.querySelector('.out-22');
    let out = '';
    let q = 3;
    let q2 = 7;

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 12; k++){

            if (k < q || k > q2) {
                out += '&nbsp;&nbsp;';
            }
            else {
                out += '* ';
            }
        }
        q--;
        q2++;
        out += '<br>';
    }
    text.innerHTML = out;
}

document.querySelector('.b-22').onclick = f22;

// 1.13
function f23() {
    const text = document.querySelector('.out-23');
    let out = '';
    let q = 4;
    let q2 = 2;
    for(let i = 0; i < 5; i++){
        for (let k = 1; k <= 6; k++){
            if(k > q && (i === 1 || i === 3)) {
                out += '&nbsp;&nbsp';
            }
            else if((i === 0 || i === 4) && k > q2){
                    out += '&nbsp;&nbsp';
                }
             else {
                out += '*';
            }
        }
        out += '<br>';
    }
    text.innerHTML = out;
}
document.querySelector('.b-23').onclick = f23;