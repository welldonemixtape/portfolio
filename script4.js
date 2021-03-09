//Задание 1


var max = +prompt("Введите любое число от 0 до 990");
var digit = {
    number: max,
    units: 0,
    tens: 0,
    hundreds: 0,
};
if (digit.number <= 9) {
    digit.units = digit.number;
} else if (digit.number <= 999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10);
} else {
    digit.number = 0;
    console.log('Вы ввели число за диапазоном 0 - 999');
}
console.log(digit);


//Задание 2


const basket = {
    allItems: [{
            product: 'Фонарик "Light"',
            num: +prompt("Сколько фанариков вы хоите купить?"),
            price: 250
        },
        {
            product: 'Батарейки AAA',
            num: +prompt("Сколько батареек вы хотите купить?"),
            price: 20
        },
        {
            product: 'Лапмочки OLED',
            num: +prompt("Сколько лампочек вы хотите купить"),
            price: 35
        },
        {
            product: 'Шуруповерты DeWalt',
            num: +prompt("Сколько шуруповертов вы хотите купить?"),
            price: 3500
        },
    ],

    countBasketPrice(n) {
        let sum = 0;
        for (let i = 0; i < n.length; i++) {
            sum += n[i].num * n[i].price;
        };
        return sum;
    },

    showBasket(n) {
        let show = 0;
        for (let i = 0; i < n.length; i++) {
            show += n[i].num;
        };
        return show;
    },

    showProducts(n) {
        let products = 0;
        for (let i = 0; i < n.length; i++) {
            products = console.log("Вы положили в корзину " + n[i].product + " " + n[i].num + " шт. по цене " + n[i].price + " рублей ");
        };
        return products;
    },
};

console.log("В корзине " + basket.showBasket(basket.allItems) + " продуктов на " + basket.countBasketPrice(basket.allItems) + " рублей");
basket.showProducts(basket.allItems);