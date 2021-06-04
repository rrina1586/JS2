const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class ProductsList {
    constructor(container = ".products") {
        this.container = container;
        this.goods = [];//массив их JSON документа
        //this.allProducts = [];//массив объектов
        this._getProducts()
            .then(data => {//data - объект JS
                this.goods = [...data];
                this.render();
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }

    priceSum() {
        let res = this.goods.reduce((sum, item) => sum + item.price, 0);
        console.log(res);//почему-то не работает
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;//не отображается
    }

    render() {
        return `<div class="product-item" data-id="${this.id}>
    <img src="${this.img}" alt="Some img">
    <h3>${this.title}</h3>
    <p>${this.price}</p>
    <button class="bay-btn" type="button">Купить</button>
    </div>`
    }
}

let list = new ProductsList();
list.render();
list.priceSum();