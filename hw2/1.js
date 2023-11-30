"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #booksArr, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #booksArr
    constructor(booksArr) {
        if (!Array.isArray(booksArr)) {
            throw Error("Список книг не массив");
        }
        if (new Set(booksArr).size === booksArr.length) {
            this.#booksArr = booksArr;
        } else {
            const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
            const duplicates = findDuplicates(booksArr);
            throw Error(`В списке книг содержаться дубликаты с названием: "${duplicates.join('" , "')}"`);
        }
    }
    allBooks() {
        return this.#booksArr;
    };
    addBook(title) {
        if (this.hasBook(title)) {
            throw Error("Такая книга уже существует");
        }
        this.#booksArr.push(title);
    }
    removeBook(title) {
        if (!this.hasBook(title)) {
            throw Error("Такая книга отсутствует в массиве");
        }
        const index = this.#booksArr.indexOf(title);
        this.#booksArr.splice(index, 1);
    }
    hasBook(title) {
        return this.#booksArr.includes(title);
    }
}

const lib = new Library(["Вий", "Мцыри", "Зеленая миля"]);
// const lib1 = new Library(["Вий", "Вий", "Мцыри", "Мцыри", "Зеленая миля"]);
console.log(lib.allBooks());
// lib.addBook("Вий");
lib.addBook("Новая");
console.log(lib.allBooks());
// lib.removeBook("Еще одна");
lib.removeBook("Новая");
console.log(lib.allBooks());
console.log(lib.hasBook("Еще одна"));
console.log(lib.hasBook("Мцыри"));
