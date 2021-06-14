import { addRow } from "../View/AddRow.js";

export class Product {
    static totalAmount = 0;
    static idKey = 0;

    date;
    hour;
    type;
    price;
    id = 0;

    format(toFormat) { return ("0" + toFormat).slice(-2) }

    constructor(type, price) {
        // counters
        Product.idKey++;
        Product.totalAmount += price;

        const date = new Date();
        // seeting values
        this.date = this.format(date.getDate()) + "/" + this.format(date.getMonth() + 1) + "/" + this.format(date.getFullYear());

        this.hour = this.format(date.getHours()) + ":" + this.format(date.getMinutes());
        this.type = type;
        this.price = price;
        this.id += Product.idKey;
        console.log("Total: R$" + Product.totalAmount);

        // adding into the table 
        addRow(this.date, this.hour, this.type, this.price)
    }
}