Vue.component("mycomp", {
    data() {
        return {
            name: "Иванов Иван",
            age: 30
        }
    },

    template: `<div>
                    <h1>Привет, {{ name }}, возраст: {{ age }}</h1>
                    <inner-comp></inner-comp>
                </div>`
});

Vue.component("inner-comp", {
    data() {
        return {
            counter: 0
        }
    },

    template: `<div>
                    <button @click='increase'>Push</button>
                    <span>{{ counter }}</span>
                </div>`,

    methods: {
        increase() {
            this.counter++;
        }
    }
});