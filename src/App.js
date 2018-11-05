import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import AddBook from './AddBook'

class BooksApp extends Component {
  state = {
    books: [],
  }

  /**
   * @description Loads books from localStorage or BooksAPI call
   */
  componentDidMount() {
    let cachedBooks = localStorage.getItem("cachedBookAppBooks");
    if ( cachedBooks ) {
        this.setState({ books: JSON.parse(cachedBooks) })
    } else {
      BooksAPI.getAll().then((books) => {
        this.setState(() => {
          localStorage.setItem("cachedBookAppBooks", JSON.stringify(books));
          return books
        })
      })
    }
  }

  /**
   * @description Moves a book to a certain shelf. If the book does not exist, it is added as well.
   * @param: book - book to be moved or added
   * @param: newShelf - the shelf where the book is to be added
   */
  moveBookToShelf = (book, newShelf) => {
    this.setState((state) => {
      var found = false;
      for (var ind in state.books) {
        if (state.books[ind].id === book.id) {
          state.books[ind].shelf = newShelf;
          found = true;
        }
      }
      if (found === false) {
        book.shelf = newShelf;
        state.books = state.books.concat( book );
      }
      localStorage.setItem("cachedBookAppBooks", JSON.stringify(state.books));
      return state.books
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            title="MyReads"
            books={ this.state.books }
            onUpdateShelf={ this.moveBookToShelf } 
          />
	)} />
        <Route path='/search' render={({ history }) => (
          <AddBook
            existingBooks={ this.state.books }
            addBook={ (book, newShelf) => { this.moveBookToShelf(book, newShelf) }} 
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
