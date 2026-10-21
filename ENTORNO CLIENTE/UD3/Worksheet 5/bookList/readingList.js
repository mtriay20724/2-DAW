class Book {
  constructor(title, genre, author, read = false, readDate = null) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate; // null o un objeto Date
  }

  markAsRead() {
    this.read = true;
    this.readDate = new Date(Date.now());
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.booksRead = 0;
    this.booksUnread = 0;
    this.currentBook = null;
    this.nextBook = null;
    this.lastBook = null;
  }

  // Primer libro sin leer que no sea el que se está leyendo
  findNextUnread() {
    return this.books.find(book => !book.read && book !== this.currentBook) || null;
  }

  add(book) {
    this.books.push(book);

    if (book.read) {
      this.booksRead++;
    } else {
      this.booksUnread++;
    }

    // Si no hay libro actual, el primero sin leer pasa a serlo
    if (!this.currentBook && !book.read) {
      this.currentBook = book;
    }

    this.nextBook = this.findNextUnread();
  }

  finishCurrentBook() {
    if (!this.currentBook) {
      console.log("No hay ningún libro en lectura.");
      return;
    }

    this.currentBook.markAsRead();
    this.booksRead++;
    this.booksUnread--;

    this.lastBook = this.currentBook;
    this.currentBook = this.nextBook;
    this.nextBook = this.findNextUnread();
  }

  // Método extra
  showStatus() {
    console.log("Leídos:", this.booksRead);
    console.log("Sin leer:", this.booksUnread);
    console.log("Actual:", this.currentBook ? this.currentBook.title : "ninguno");
    console.log("Siguiente:", this.nextBook ? this.nextBook.title : "ninguno");
    console.log("Último leído:", this.lastBook ? this.lastBook.title : "ninguno");
  }
}

// Pruebas
const lista = new BookList();
lista.add(new Book("Dune", "Ciencia ficción", "Frank Herbert"));
lista.add(new Book("1984", "Distopía", "George Orwell"));
lista.add(new Book("El Hobbit", "Fantasía", "J.R.R. Tolkien"));

lista.showStatus();
lista.finishCurrentBook();
lista.showStatus();
lista.finishCurrentBook();
lista.finishCurrentBook();
lista.finishCurrentBook(); // ya no queda ninguno: avisa sin romper
lista.showStatus();