// Дана массив 
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = [];
// for (let i = 0; i < a.length; i++) {
//     if (i < a[4]) {
//         newArr.push(a[i] * 5)
//     } else {
//         newArr.push(a[i])
//     }
// }
// console.log(newArr);

let b = a.map((item, index) => {
    if (index <= 4) {
        return item * 5;
    } else {
        return item;
    }
});
console.log(b);