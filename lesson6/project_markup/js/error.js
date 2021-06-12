Vue.component("error", {
    props: ["visibility"],

    template: `
    <div v-show="visibility">
        <p>адрес не найден</p>
    </div>
`
});

{/* <div class="cart-block" v-show="visibility">
<cart-item v-for="item of cartItems" :key="item.id_product" :img="img" :cart-item="item">
</cart-item>
</div> */}