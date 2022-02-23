// 1
export default class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw(selector) {
        let a = `<div> <img src='${this.image}'><p>${this.name}, ${this.amount}</p></div>`;
        document.querySelector(selector).innerHTML = a;
    }
}
