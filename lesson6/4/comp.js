Vue.component("mycomp", {
    data() {
        return {
            name: "Иванов Иван",
            age: 30
        }
    },

    template: `<div>
                    <div>
                        <h1>Привет, {{ name }}, возраст: {{ age }}</h1>
                        Поступили данные <slot></slot>
                    </div>
                    <div>
                        <h1>Добрый день, {{ name }}, возраст: {{ age }}</h1>
                    </div>
                </div>`
});