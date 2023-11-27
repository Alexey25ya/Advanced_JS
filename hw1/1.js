"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/
const albums = [
  { title: "Queen", artist: "A Kind of Magic", year: "1986" },
  { title: "The Beatles", artist: "Let It Be", year: "1970" },
  { title: "AC/DC", artist: "Highway to Hell", year: "1979" },
]

const musicCollection = {
  albums,
  *[Symbol.iterator]() {
    for (let i = 0; i < this.albums.length; i++) {
      yield `${this.albums[i].title} - ${this.albums[i].artist}(${this.albums[i].year})`;
    }
  }
}

for (const album of musicCollection) {
  console.log(album);
}


console.log('');