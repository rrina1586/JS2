Vue.component("mycomp", {
    data() {
        return {
            name: "Иванов Иван",
            age: 30
        }
    },

    template: `<div>
                    <h1>Привет, {{ $parent.name }}</h1>
                    <inner-comp x = 10></inner-comp>
                </div>`
});

Vue.component("inner-comp", {
    props: ['x'],

    template: `<div>
                    <h1>Добрый день, {{ $root.name }}, {{ x }}</h1>
                    <h1>Здравствуйте, {{ $parent.name }}</h1>
                    <h1>Здравствуйте, {{ $parent.$parent.name }}</h1>
                </div>`
});

//$parent - обращаемся к родительскому компоненту из дочернего
//$root - обращение к main