// Создание массива альбомов
const albums = [
    { title: "Abbey Road", artist: "The Beatles", year: "1969" },
    { title: "Dark Side of the Moon", artist: "Pink Floyd", year: "1973" },
    { title: "Thriller", artist: "Michael Jackson", year: "1982" },
    { title: "Back in Black", artist: "AC/DC", year: "1980" }
  ];
  
  // Определение объекта musicCollection
  const musicCollection = {
    // Сохраняем массив альбомов в свойстве объекта
    albums: albums,
  
    // Реализация метода Symbol.iterator
    [Symbol.iterator]() {
      let index = 0;
      // Возвращаем итератор
      return {
        next: () => {
          // Если еще есть альбомы для итерации
          if (index < this.albums.length) {
            // Возвращаем следующий альбом
            return { value: this.albums[index++], done: false };
          } else {
            // Если альбомов больше нет
            return { value: undefined, done: true };
          }
        }
      };
    }
  };
  
  // Используем цикл for...of для перебора альбомов
  for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
  }
  