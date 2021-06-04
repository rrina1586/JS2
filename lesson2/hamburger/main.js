"use strict";

class Param {
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset["price"];
        this.calories = +element.dataset["calories"];
    }
}

class Burger {
    constructor(size, add, topping) {
        this.size = new Param(this._select(size));
        this.add = new Param(this._select(add));
        this.topping = this._getTopping(topping);
    }

    _select(name) {
        return document.querySelector(`input[name=${name}]:checked`);
    }

    _selectAll(name) {
        return [...document.querySelectorAll(`input[name=${name}]:checked`)];
    }

    _getTopping(name) {
        let result = [];
        this._selectAll(name).forEach(el => result.push(new Param(el)));
        return result;
    }

    showSum(price, calories) {
        document.querySelector(price).textContent = this._sumPrice();
        document.querySelector(calories).textContent = this._sumCalories();
    }

    _sumPrice() {
        let result = this.size.price + this.add.price;
        this.topping.forEach(el => result += el.price);
        return result;
    }

    _sumCalories() {
        let result = this.size.calories + this.add.calories;
        this.topping.forEach(el => result += el.calories);
        return result;
    }
}