
// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */
// 7859d9d42a8834141d529577207c9596
function t1() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this.responseText)
        }
    } 
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=1", true);
    xhttp.send();

    function myFunction(data) {
        document.querySelector('.out-1').innerHTML = data;
        console.log(data);
    }
}   

document.querySelector('.b-1').onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this.responseText)
        }
    } 
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=2&name=Olya", true);
    xhttp.send();

    function myFunction(data) {
        document.querySelector('.out-2').innerHTML = data;
        console.log(data);
    }
}   

document.querySelector('.b-2').onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this.responseText)
        }
    } 
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=3&num1=5&num2=3", true);
    xhttp.send();

    function myFunction(data) {
        document.querySelector('.out-3').innerHTML = data;
        console.log(data);
    }
}   

document.querySelector('.b-3').onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this.responseText)
        }
    } 
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=4&num1=2&num2=25", true);
    xhttp.send();

    function myFunction(data) {
        document.querySelector('.out-4').innerHTML = data;
        console.log(data);
    }
}   

document.querySelector('.b-4').onclick = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this.responseText)
        }
    } 
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=5", true);
    xhttp.send();

    function myFunction(data) {
        document.querySelector('.out-5').innerHTML = data;
        console.log(data);
    }
}   

document.querySelector('.b-5').onclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this.responseText)
        }
    } 
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=6&num1=2&num2=15", true);
    xhttp.send();

    function myFunction(data) {
        document.querySelector('.out-6').innerHTML = data;
        console.log(data);
    }
}   

document.querySelector('.b-6').onclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this.responseText)
        }
    } 
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=7", true);
    xhttp.send();

    function myFunction(data) {
        document.querySelector('.out-7').innerHTML = data;
        console.log(data);
    }
}   

document.querySelector('.b-7').onclick = t7;

// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this.responseText)
        }
    } 
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=8&year=1997", true);
    xhttp.send();

    function myFunction(data) {
        document.querySelector('.out-8').innerHTML = data;
        console.log(data);
    }
}   

document.querySelector('.b-8').onclick = t8;

// ваше событие здесь!!!


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this.responseText)
        }
    } 
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=9&m=1&d=1&y=1", true);
    xhttp.send();

    function myFunction(data) {
        document.querySelector('.out-9').innerHTML = data;
        console.log(data);
    }
}   

document.querySelector('.b-9').onclick = t9;

// ваше событие здесь!!!


