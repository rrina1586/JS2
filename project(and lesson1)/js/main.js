// const products = [
//     { id: 1, title: "Notebook", price: 2000 },
//     { id: 2, title: "Mouse", price: 20 },
//     { id: 3, title: "Keyboard", price: 200 },
//     { id: 4, title: "Gamepad", price: 2000 }
// ];

// const renderProduct = item => {
//     return `<div class="product-item">
//     <h3>${item.title}</h3>
//     <p>${item.price}</p>
//     <button class="bay-btn" type="button">Купить</button>
//     </div>`
// };

// const renderPage = list => {
//     document.querySelector(".products").innerHTML = list.map(item => renderProduct(item)).join('');
// };

// renderPage(products);

class ProductsList {
    constructor(container = ".products") {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: "Notebook", price: 2000 },
            { id: 2, title: "Mouse", price: 20 },
            { id: 3, title: "Keyboard", price: 200 },
            { id: 4, title: "Gamepad", price: 2000 }
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }

    priceSum() {
        let sum = 0;
        for (let item of this.goods) {
            sum += item.price;
        }
        console.log(sum);
    }
}

class ProductItem {
    constructor(product, img = "https://via.placeholder.com/250x150") {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
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

// class Cart {
//     constructor(product) {
//         this.id = product.id;
//     }

//     addCart() {
//         let btn = document.querySelector(".bay-btn");
//         btn.addEventListener("click", function () {

//         }
//     }
// }

let list = new ProductsList();
list.render();
list.priceSum();