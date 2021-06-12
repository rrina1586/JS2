Vue.component("mycomp", {
    props: ['name', 'title', 'x'],  //принимаем значения из вёрстки
    data() {
        return {
            name: "Иванов Иван",
            age: 30
        }
    },

    template: `<div>
                    Из атрибутов поступили значеения: {{ title }}, {{ x }}
                    <h1>Привет, {{ name }}, {{ $data.name }} возраст: {{ age }}</h1>
                    Поступили данные: <slot></slot>
                </div>`  //получаем данные по умолчанию из props, а не data
});