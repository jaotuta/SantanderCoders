/*
-------------------- MODULO 3, EXERCÍCIO 2 --------------------
Grupo: Guilherme Lima, João Lucas, Rebeca Rodrigues, Talis Reis 
*/

class BookList {
    
    constructor() {
      this.readBook = 0; 
      this.notReadBook = 0;
      this.nextBook = {};
      this.currentBook = {};
      this.lastBook = {};
      this.allBooks = [];
    }

    add (newBook) {

        this.allBooks = [...this.allBooks, newBook];
        this.currentBook = this.allBooks.find(current => current.read === false)
        this.attNotReadBooks ()
    }
    attNotReadBooks () {
      this.notReadBook = this.allBooks.reduce((acc, curr) => {(!curr.read) ? acc += 1 : acc 
      return acc},0)
    }
    
    finishCurrentBook() {
        this.currentBook.read = true
        this.currentBook.readDate = Date.now()
        let proximo = this.allBooks.filter(current => !current.read)
        this.nextBook = proximo[1]
        this.lastBook = this.currentBook
        this.currentBook = proximo[0]
        this.readBook = this.allBooks.reduce((acc, curr) => {(curr.read) ? acc += 1 : acc 
        return acc},0)
        this.attNotReadBooks ()
    }

    


}

class Book {

    constructor(title, genre, author, read, readDate) {
      this.title = title; 
      this.genre = genre;
      this.author = author;
      this.read = read;
      this.readDate = (this.read) ? Date.now() : '';
    }
}


const book1 = new Book('Harry Potter', 'Aventura', 'J.K Rollbium', false);
const book2 = new Book('Dom Quixote, Miguel de Cervantes', 'Ação', 'Marcel Proust', false);
const book3 = new Book('Guerra e Paz, Liev Tolstói', 'Aventura', 'Liev Tolstói', false);
const book4 = new Book('A Montanha Mágica', 'Romance', 'Thomas Mann', false);
const book5 = new Book('Cem Anos de Solidão', 'Terror', 'Gabriel García Márquez', false);
const book6 = new Book('Ulisses', 'Aventura', 'James', false);

const novaListaDeLivros = new BookList()

novaListaDeLivros.add(book1)
novaListaDeLivros.add(book2)
novaListaDeLivros.add(book3)
novaListaDeLivros.add(book4)
novaListaDeLivros.add(book5)
novaListaDeLivros.add(book6)

novaListaDeLivros.finishCurrentBook()
novaListaDeLivros.finishCurrentBook()

console.log(novaListaDeLivros)