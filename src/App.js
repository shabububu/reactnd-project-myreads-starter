import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import AddBook from './AddBook'

class BooksApp extends Component {
  state = {
    books: [],

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books }) //SAME AS: this.setState({ books: books })
    })
  }

  moveBookToShelf = (book, newShelf) => {
    this.setState((state) => {
      for (var ind in state.books) {
        if (state.books[ind].id === book.id) {
          state.books[ind].shelf = newShelf
        }
      }
      return state.books
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            title="MyReads"
            books={this.state.books}
            onUpdateShelf={this.moveBookToShelf} />
        )} />
        <Route path="/add" component={AddBook} />
      </div>
    )
  }
}

export default BooksApp
