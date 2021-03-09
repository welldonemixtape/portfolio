// Задание 1

function draw() {
    var table = document.createElement('table');
    var flag = true;

    var trr = document.createElement('tr');
    var arr = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (var i = 0; i < 8; i++) {
        var tr = document.createElement('tr');

        var tdd = document.createElement('td');
        tdd.style.width = '50px';
        tdd.style.height = '50px';
        tdd.innerHTML = 8 - i;
        tr.appendChild(tdd);

        for (var j = 0; j < 8; j++) {

            if (j == 0)
                flag = !flag;

            var td = document.createElement('td');

            td.style.width = '50px';
            td.style.height = '50px';
            if (flag) {
                td.style.background = 'black';
            } else
                td.style.background = 'white';

            tr.appendChild(td);
            flag = !flag;
        }
        table.appendChild(tr);
    }

    for (var k = 0; k < 9; k++) {

        var td = document.createElement('td');
        td.style.width = '50px';
        td.style.height = '50px';
        td.style.background = 'white';
        td.innerHTML = arr[k];

        trr.appendChild(td);

    }
    table.appendChild(trr);

    document.body.appendChild(table);
}

draw();

// Задание 2

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.num}</div>
                    <div><b>Стоимость</b>: ${good.num * good.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [{
            id: 007,
            product: 'iMac',
            price: 126000,
            num: 1,
        },
        {
            id: 022,
            product: 'iPhone 12 256GB',
            price: 89000,
            num: 2,
        },
        {
            id: 017,
            product: 'AirPods',
            price: 11900,
            num: 2,
        },
        {
            id: 089,
            product: 'Чехол Red',
            price: 990,
            num: 1,
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине <b>${this.goods.length}</b> позиций(а) стоимостью <b>${this.getCartPrice()}</b>`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function(price, good) {
            return price + good.price * good.num;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();