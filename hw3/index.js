// 1. Страница добавления отзыва о продукте.
// Должна содержать форму с полем для ввода названия продукта и текстовое поле
// для текста отзыва.
//     Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
// Необходимо реализовать проверку, оба поля должны быть заполнены, если это не
// так, необходимо выводить ошибку пользователю.

const product = document.querySelector('.product');
const comment = document.querySelector('.comment');
const add = document.querySelector('.btn');
const error = document.querySelector('.error')
const clear = document.querySelector('.clear')
const mainDiv = document.querySelector('.app');



add.addEventListener('click', () => {
    if (product.value !== "" && comment.value !== "") {
        error.textContent = "";
        let comments = JSON.parse(localStorage.getItem(product.value))
        if (comments === null) {
            comments = [];
        }
        comments.push(comment.value);
        localStorage.setItem(product.value, JSON.stringify(comments));
    } else {
        error.textContent = "Заполнены не все поля ввода"
    }
})
clear.addEventListener('click', () => {
    localStorage.clear();
})








