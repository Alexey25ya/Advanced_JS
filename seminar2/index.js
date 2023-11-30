/*
Задание 1: 
Давайте создадим класс для управления банковским счетом. В этом классе будет 
приватное свойство для хранения текущего баланса, а также методы для внесения 
и снятия денег со счета.
Необходимо реализовать класс BankAccount, в нем:
1. Приватное свойство #balance, которое инициализируется значением 0 и 
представляет собой текущий баланс счета.
2. Геттер balance, который позволит получить информацию о текущем балансе.
3. Метод deposit(amount), который позволит вносить средства на счет. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, в противном случае 
выбрасывайте соответствующую ошибку.
4. Метод withdraw(amount), который позволит снимать средства со счета. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, и сумма снятия 
не может превышать текущий баланс аккаунта в противном случае выбрасывайте 
соответствующую ошибку.
*/
class BankAccount {
    #balance = 0;
    // getBalance() {
    //    return this.#balance;
    // };
    get balance() {
        return this.#balance;
    }
    deposit(amount) {
        checkMoney(amount);
        this.#balance += amount;

    }
    withdraw(amount) {
        checkMoney(amount);
        if (amount > this.#balance) throw new Error("Средства не хватает");
        this.#balance -= amount;
    }

}
function checkMoney(money) {
    if (money < 0) throw new Error("Число не может быть отрицательным");
    if (!Number.isFinite(money)) throw new Error("Число должно быть нормальным");
    if (String(money).split('.')[1]?.length > 2) throw new Error("Дробная часть не корректная");
}


const account = new BankAccount();

// account.deposit(-1);
// account.deposit(NaN);
// account.deposit(45.566);
account.deposit(1001);
console.log(account.balance);

// account.withdraw(-1);
// account.withdraw(NaN);
// account.withdraw(45.566);
account.withdraw(34);
console.log(account.balance);

/*
Задание 2: 
Мы создаем приложение. У нас планируется два вида пользователей, обычные и 
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.
 
1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые 
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у 
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User 
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать 
соответствующий ответ из функции (в свободном формате).
*/

class User {
    constructor(name, surname,) {
        this.name = name;
        this.surname = surname;
    }
}
class PremiumUser extends User {
    constructor(name, surname, expiration) {
        super(name, surname);
        this.premiumExpiration = expiration;
    }
}
class RegularUser extends User {

}
function getAccountInfo(user) {

    if (user instanceof PremiumUser) {
        console.log(`Есть премиум аккаунт, срок действия ${user.premiumExpiration}`);
    } else { console.log('Нет премиум аккаунта') };
}

const user = new User('Иван', 'Иванов');
const userP = new PremiumUser('Петр', 'Петров', '20251212');
const userR = new RegularUser('Николай', 'Иванов');

getAccountInfo(user);
getAccountInfo(userP);
getAccountInfo(userR);

/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:
 
```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```
 
Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/

const num = document.querySelector('.number-input')
const button = document.querySelector('.check-button')
const message = document.querySelector('.message')

button.addEventListener('click', () => {
    /* if (!Number.isFinite(+num.value)) {
        message.textContent = 'Введено не корректное число'
    } */
    try {
        if (!Number.isFinite(+num.value)) throw new Error('Введено не корректное число')
    } catch (error) {
        message.textContent = error.message;
    } finally {
        console.log('Код завершен');
    }
})

/*
Задание 4:
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие: 
введенное значение должно содержать от 3 до 10 символов.
 
Создайте HTML-структуру:
 
```
<input type="text" class="user-input">
<button class="add-button">Добавить</button>
<ul class="item-list"></ul>
<div class="error-message"></div>
```
 
Необходимо обрабатывать событие добавления элемента в список. Функция, 
обрабатывающая событие, должна выбрасывать исключение, если длина введенного 
значения не соответствует требованиям.
Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
Не важно, была ошибка или нет, после того как мы совершим попытку добавления 
данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
*/

const num1 = document.querySelector('.user-input');
const button1 = document.querySelector('.add-button');
const list = document.querySelector('.item-list');
const message1 = document.querySelector('.error-message');
button1.addEventListener('click', addElement);

function addElement() {
    try {
        if (num1.value.length >= 3 && num1.value.length <= 10) {
            list.innerHTML += `<li>${num1.value}</li>`;
        } else {
            throw new Error('Число не корректно');
        }
    } catch (error) {
        message1.textContent = error.message;
    } finally {
        console.log('Попытка добавления элемента завершена');
    }
}

class Helper {
    static count = 0;
    static sayHello(name) {
        console.log(`Hello ${name}`);
        console.log(this);
        this.ttttt = name;
    }
    constructor() {
        Helper.count++;
    }
}

// console.log(Helper.ttttt);
// Helper.sayHello('Константин')
// console.log(Helper.ttttt);
const help = new Helper();
const help2 = new Helper();
// help.sayHello('Макс')
console.log(help.ttttt);
console.log(help);
// help.sayHello

console.log(Helper.count);