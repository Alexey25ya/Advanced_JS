/*
Задание 1: 
Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" 
во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на 
кнопку "Загрузить новости", ваш код должен имитировать задержку, словно 
происходит реальная загрузка данных из внешнего источника, а после этой 
задержки — отображать новости на странице.
 
1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером 
для их отображения.
2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна 
имитировать задержку в 2 секунды перед успешным возвращением данных из 
"виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она 
должна возвращать ошибку вместо данных.
3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), 
обрабатывая успешное выполнение и ошибки с использованием then() и catch().
При успешной загрузке отобразите статьи на странице. При ошибке покажите 
сообщение об ошибке.
4. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" 
новостей и активирует её снова после завершения операции (будь то успешная 
загрузка или ошибка).
*/
const mockDatabase = [
    { title: "Новость 1", content: "Содержимое новости 1..." },
    { title: "Новость 2", content: "Содержимое новости 2..." },
    // ... другие статьи
];

function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() * 10 > 3) {
                resolve(mockDatabase)
            } else {
                reject(new Error('Проблемы с сетью'))
            }

        }, 1000);
    })
}



const button = document.querySelector('button');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
    button.disabled = true;
    fetchNews()
        .then((arr) => printNews(arr))
        .catch((err) => printErr(err.message))
        .finally(() => button.disabled = false)
});

function printNews(arr) {
    container.textContent = '';
    arr.forEach(element => {
        container.textContent += `${element.title} ${element.content}`
    });

}
function printErr(err) {
    container.textContent = err
}


/*
Задание 2:
Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов.
Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для
своего гарнитура. После того как пользователь собрал свой комплект и сохраняет
свой выбор, информация о нем сохраняется в localStorage. При следующем посещении
сайта их индивидуальные настройки автоматически загружаются, и они видят ранее
созданный мебельный комплект.

1. Создайте базовую HTML-структуру с различными элементами мебели (например,
стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой
мебельный гарнитур.
3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить
комплект", которая сохраняет текущий выбор пользователя в localStorage.
4. При следующем посещении сайта автоматически загрузите сохраненные параметры
из localStorage и отобразите ранее созданный комплект.
5. Убедитесь, что у пользователей есть возможность очистить сохраненные
настройки (очистить localStorage).
*/

// const table = document.querySelector('.table__select');
// const char = document.querySelector('.char__select');
// const save = document.querySelector('.save');
// const clear = document.querySelector('.clear');
// const furnitureKey = 'furniture';

// save.addEventListener('click', () => {
//     localStorage.setItem(furnitureKey, JSON.stringify({ table: table.value, char: char.value }));
// })
// clear.addEventListener('click', () => {
//     localStorage.removeItem(furnitureKey);
// })

// const furniture = localStorage.getItem(furnitureKey);

// if (furniture) {
//     const parseLocalStor = JSON.parse(furniture);
//     table.value = parseLocalStor.table;
//     char.value = parseLocalStor.char;
// }
