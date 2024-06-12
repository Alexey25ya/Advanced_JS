// 2. Страница просмотра отзывов.
// Показывает список всех продуктов, на которые были оставлены отзывы.
// Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы"
// (надпись кнопки меняется), при нажатии на которую показываются / скрываются
// отзывы продукта.
// После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв
// из localstorage и со страницы.
// Если удалены все отзывы продукта, то продукта вовсе должен быть удален, как из
// localstorage, так и со страницы.

const product = document.querySelector('.product');
const comment = document.querySelector('.comment');
const add = document.querySelector('.btn');
const error = document.querySelector('.error')
const clear = document.querySelector('.clear')
const mainDiv = document.querySelector('.app');
manageProductList();
function manageProductList() {
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            //Создание элементов блока "Продукт"
            const productBox = document.createElement('div');
            mainDiv.appendChild(productBox);
            //название продукта
            const productListElem = document.createElement('h3');
            productListElem.textContent = key;
            productBox.appendChild(productListElem);
            // кнопка показать/скрыть отзывы
            const showBtn = document.createElement('button');
            showBtn.textContent = 'Скрыть отзывы';
            productBox.appendChild(showBtn);
            showBtn.addEventListener('click', () => {
                showRewiew(productContent, showBtn)
            })
            const productContent = document.createElement('div');
            productBox.appendChild(productContent);
            const commentList = JSON.parse(localStorage.getItem(key));
            commentList.forEach(element => {
                //элемент списка отзывов
                const commentListElem = document.createElement('li');
                commentListElem.textContent = element;
                productContent.appendChild(commentListElem);
                //кнопка удаления отзыва
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Удалить отзыв';
                productContent.appendChild(deleteBtn);
                deleteBtn.addEventListener('click', () => {
                    if (commentList.length > 1) {
                        commentListElem.remove();
                        const indexListElem = commentList.findIndex((elem) => elem === commentListElem.textContent);
                        deleteBtn.remove();
                        commentList.splice(indexListElem, 1);
                        localStorage.setItem(key, JSON.stringify(commentList));
                    } else {
                        productBox.remove();
                        localStorage.removeItem(key)
                    }
                })
            });
        }
    }
}


function showRewiew(hiddenElement, elem) {
    if (hiddenElement.hidden) {
        hiddenElement.hidden = false;
        elem.textContent = "Скрыть отзывы";
    }
    else {
        hiddenElement.hidden = true;
        elem.textContent = "Показать отзывы";
    }
}
