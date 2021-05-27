const products = [
    { id: 1, title: "Notebook", price: 2000 },
    { id: 2, title: "Mouse", price: 20 },
    { id: 3, title: "Keyboard", price: 200 },
    { id: 4, title: "Gamepad", price: 2000 }
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
    <h3>${title}</h3>
    <p>${price}</p>
    <button class="bay-btn" type="button">Купить</button>
    </div>`
};

const renderPage = (list = [{ title: "test", price: 300 }]) => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    productsList.forEach(card => {
        document.querySelector(".products").innerHTML += card;
    });
};

renderPage(products);

// Запятая выводится потому, что productsList это массив, и его элементы записываются через запятую.
// Чтобы это исправить, нужно его деструктуризировать.