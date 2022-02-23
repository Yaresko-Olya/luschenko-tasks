/*
Реализовать алгоритм, вычисления пополнения бонусного счета по номеру промокода. 
Промокод состоит из 8 цифр, другие различные символы отличные от цифр недопустимы. 
Промокод не может иметь другое количество цифр отличное от восьми. Таким образом промокод - восьмизначное число.

    Если в промокоде есть минимум две пары рядом стоящих цифр, и две таких цифры нечетные, и есть вторая пара цифр промокода рядом 
    стоящих цифр аналогичны эти цифры нечетные, и две эти пары разделены между собой одним или более четными цифрами, 
    то такой промокод имеет бонус 1000 грн. Условия 3 и 4 игнорируются.
    Условие аналогично пункту 1. Только абсолютно все найденные пары нечетных цифр, должны в рамках каждой отдельно взятой пары быть 
    по возрастанию. Т.е. первая цифра в паре меньше следующей. Такой промокод имеет -> бонус 2000 грн. Если они равны например 77, 
    считаем что они не по возрастанию. В этом промокоде игнорируются условия 1, 3 и 4 пунктов.
    Если сумма цифр промокода кратные двум больше чем сумма цифр промокода не кратных двум -> бонус 100 грн. Условие 4 игнорируется.
    Любая другая последовательность значений говорит что промокод не корректен.

    Если обнаружится более 2х цифр не кратные двум, выбирайте на свое усмотрение либо левую крайнюю пару цифр либо правую пару цифр.
    В таком случае в каждой группе цифр выбирайте пару с одинаковой стороны если будет две группы с нечетными значениями более 3х цифр 
    в каждой. Например промокод: 35787918
Либо: 35 и 79 участвуют в дальнейшей логики, либо 57 и 91.

При условии что обнаружите ситуацию не описанную в этом документе, применяйте на свое усмотрение, 
но при этом обязательно сообщите рекрутеры или интервьюеру на собеседовании.
    Примеры промокодов
Пример когда промокод не действительный
Промокод: 84533920, тогда:
Сумма кратных цифр промо кода: 8+4+2 = 12
Сумма не кратных цифр промо кода: 5+3+3+9 = 20

12 > 20 - условие не выполнено.
    Т.к. нет последовательности из двух подряд не кратным двум парам, промокод не действительный.
    Пример когда промокод подходит по пункту 3
Промокод: 48183276
Сумма кратных цифр промо кода: 4+8+2+6 = 20
Сумма не кратных цифр промо кода: 1+3+7 = 11
20 > 11 - условие действительное. Т.к. Нет ни одной пары подряд двух некратных цифр в промокоде, условие подходит по третьему пункту.

    Промокод на 1000 грн
Промокод: 73289388  -> Пара 73 и пара 93 цифр состоящие из некратных. Следовательно две пары или более подходит по системе 1000 грн.  
Не имеет значения условия остальных пунктов берется в приоритете условие на 1000 грн
Промокод на 2000 грн
Промокод: 37283988, аналогично есть две пары не кратных цифр, и они идут и первая и вторая пара по возрастанию, следовательно применяем 
промокод на 2000 грн, остальные пункты игнорируются. - Максимальный приоритет.

    Требование к выполнению работы
Функция должна принимать по параметрам промокод типа number.
    Функция должна возвращать 100, 1000, 2000 или 0 в случае если промокод не действителен.
    Использовать преобразования числа или цифр в строку для любых целей - запрещено.
    Результат выполнение - это представление функции в любом текстовом виде.

    P.S В случае если по каким либо причинам, задание будет выполнено не полностью, например реализованы не все варианты определения 
    стоимости промокода, Ваше решение также будет рассмотрено. В случае если запрет на использование преобразований чисел и цифр 
    в строки затруднит реализацию проекта, можете использовать преобразование в строку. В любом случае будет рассмотрен 
    Ваш вариант реализации задачи.
*/



function promoCode(num) {

    if (typeof num === 'number' && num.toString().length === 8) {
        return 'correct';
    } else {
        return 'invalid';
    }

    function promo100 (num) {
        
    }

    function promo1000 (num) {
        for (let i = 0; i < num.length; i++) {

            if (num[0] % 2 !== 0 && num[1] % 2 !== 0 && num[4] % 2 !== 0 && num[5] % 2 !== 0) {
                return 1000
            } else if (num[0] % 2 !== 0 && num[1] % 2 !== 0 && num[5] % 2 !== 0 && num[6] % 2 !== 0) {
                return 1000
            } else if (num[1] % 2 !== 0 && num[2] % 2 !== 0 && num[4] % 2 !== 0 && num[5] % 2 !== 0) {
                return 1000
            } else if (num[1] % 2 !== 0 && num[2] % 2 !== 0 && num[5] % 2 !== 0 && num[6] % 2 !== 0) {
                return 1000
            }
        }
        
    }

    function promo2000 (num) {
        for (let i = 0; i < num.length; i++) {
            
        }
        
    }

    

}

console.log(promoCode(12345679))

