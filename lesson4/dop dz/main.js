"use strict";

document.querySelector(".btn").addEventListener("click", () => {
    let nameValue = document.querySelector("#name").value;
    let telValue = document.querySelector("#tel").value;
    let emailValue = document.querySelector("#email").value;

    let name = nameValue.match(/^[a-zа-яё]+$/igu);
    let tel = telValue.match(/^\+7\(\d{3}\)\d{3}-\d{4}$/);
    //let email = emailValue.match(/^[a-z0-9]{2}.?-?[a-z0-9]{4}@mail.ru$/);
    let email = emailValue.match(/^[\w._-]+@\w+\.[a-z]{2,4}$/i);

    if (name == null) {
        document.querySelector("#name").classList.toggle("error");
        alert("Имя должно состоять только из букв");
    } else {
        document.querySelector("#name").classList.toggle("green");
    }

    if (tel == null) {
        document.querySelector("#tel").classList.toggle("error");
        alert("Телефон должен иметь вид +7(000)000-0000");
    } else {
        document.querySelector("#tel").classList.toggle("green");
    }

    if (email == null) {
        document.querySelector("#email").classList.toggle("error");
        alert("E-mail должен иметь вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.");
    } else {
        document.querySelector("#email").classList.toggle("green");
    }
})