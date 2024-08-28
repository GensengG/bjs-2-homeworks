class PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
  
    fix(){ 
        this.state = this.state * 1.5;
    }
  
    set state(state){
        if(state === 0) {
            this._state = 0;
        }
        if(state >= 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }
  
    get state(){
        return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
  }


  class Library {
    constructor(name, books){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let foundBook = this.books.find(book => book[type] === value);
        if (foundBook) {
            return foundBook;
        } else {
            return null;
        }
    }


    giveBookByName(bookName){
        let indexBook = this.books.findIndex(book => book.name === bookName);
        if (indexBook !== -1) {
            let foundBook = this.books[indexBook];
            this.books.splice(indexBook, 1);
            return foundBook;
        } else {
            return null;
        }
    }
  }


class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    addMark(mark, subjectName) {
        if (mark >= 2 && mark <= 5) {
            if (Object.keys(this.marks).includes(subjectName)) {
                this.marks[subjectName].push(mark);
            } else {
                this.marks[subjectName] = [mark];
            }
        } else {
            return;
        }
    }

    getAverageBySubject(subjectName) {
        if (Object.keys(this.marks).includes(subjectName) === false) {
            return 0;
        } else {
            let sum = this.marks[subjectName].reduce((acc, mark) => acc + mark,0);
            return sum / this.marks[subjectName].length;
        }
    }

    getAverage(){
        if (Object.keys(this.marks).length === 0){
            return 0;
        } else {
        let sum = 0;
            for(let subject in this.marks){
                let subjectSum = this.marks[subject].reduce((acc, mark) => acc + mark,0);
                sum += (subjectSum / this.marks[subject].length);
        }
        return sum / Object.keys(this.marks).length;
      }
    }
    
}
