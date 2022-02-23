import Goods from './Goods.js';

export default class Goods2 extends Goods{
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count)
        this.sale = sale;
    }
    draw(selector) {
        let a = `<p>${this.sale}</p>`;
        document.querySelector(selector).innerHTML = a;
    }
}