Vue.component("inner-comp2", {
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