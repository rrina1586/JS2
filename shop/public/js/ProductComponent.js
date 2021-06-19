Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: []
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    item.imgPath = `img/products/${item.id_product}.jpg`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `<ul class="products-grid">
                    <product v-for="item of filtered" 
                    :key="item.id_product" 
                    :img = "item.imgPath"
                    :product="item"
                    @add-product="$parent.$refs.cart.addProduct"></product>
                </ul>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
            <li class="products__card">
                <img :src="img" alt="Some img">
                <div class="desc">
                    <h3 class="card-title">{{product.product_name}}</h3>
                    <p class="card-subtitle">Known for her sculptural takes on traditional
                    tailoring, Australian
                    arbiter of cool Kym Ellery
                    teams up with Moda Operandi.</p>
                    <p class="card-price">{{product.price}}</p>
                    <button @click="$emit('add-product', product)">Add to Cart</button>
                </div>
            </li>
    `
})