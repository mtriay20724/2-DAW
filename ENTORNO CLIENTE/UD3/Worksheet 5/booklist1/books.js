class bookList{
    constructor(){
        this.book=[];
        this.booksReaded = 0;
        this.booksNotReaded = 0;
        this.booksNext = null;
        this.bookCurrent = null;
        this.bookLast = null;

    }

    add(book){
        this.book.push(book);

    }

    finishCurrentBook(){
        
    }
}

class book{
    constructor(title, genre, read = false, readDate = null){
        this.title = title;
        this.genre = genre;
        this.read = read;
        this.readDate = readDate;
    }
}