class Library {
    // Конструктор класса
    constructor(initialBooks = []) {
      // Проверяем наличие дубликатов в начальном массиве книг
      if (new Set(initialBooks).size !== initialBooks.length) {
        throw new Error('Начальный список книг содержит дубликаты.');
      }
  
      // Приватное свойство для хранения списка книг
      this.#books = [...initialBooks];
    }
  
    // Приватное свойство для хранения списка книг
    #books;
  
    // Геттер для получения текущего списка книг
    get allBooks() {
      return [...this.#books];
    }
  
    // Метод для добавления книги в список
    addBook(title) {
      if (this.#books.includes(title)) {
        throw new Error(`Книга с названием "${title}" уже существует в библиотеке.`);
      }
      this.#books.push(title);
    }
  
    // Метод для удаления книги из списка
    removeBook(title) {
      const index = this.#books.indexOf(title);
      if (index === -1) {
        throw new Error(`Книга с названием "${title}" не найдена в библиотеке.`);
      }
      this.#books.splice(index, 1);
    }
  
    // Метод для проверки наличия книги в библиотеке
    hasBook(title) {
      return this.#books.includes(title);
    }
  }
  
  // Примеры использования
  
  try {
    // Создаем экземпляр библиотеки с начальным списком книг
    const library = new Library(['1984', 'Война и мир', 'Гарри Поттер']);
  
    // Получаем текущий список книг
    console.log('Список книг в библиотеке:', library.allBooks);
  
    // Добавляем книги
    library.addBook('Убийство на улице Морг');
    console.log('После добавления книги:', library.allBooks);
  
    // Попробуем добавить книгу, которая уже есть
    try {
      library.addBook('1984');
    } catch (error) {
      console.error(error.message);
    }
  
    // Удаляем книги
    library.removeBook('Война и мир');
    console.log('После удаления книги:', library.allBooks);
  
    // Попробуем удалить книгу, которой нет
    try {
      library.removeBook('Неизвестная книга');
    } catch (error) {
      console.error(error.message);
    }
  
    // Проверяем наличие книги
    console.log('Есть ли "Гарри Поттер"?', library.hasBook('Гарри Поттер'));
    console.log('Есть ли "1984"?', library.hasBook('1984'));
  
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
  