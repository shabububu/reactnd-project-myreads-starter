import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class AddBook extends Component {
  state = {
    books: [],
  }

  updateBooks = (e) => {
    var query = e.target.value;
    console.log("AddBook.updateBooks values="+BooksAPI.search(query));
    if (query && query !== '') {
      BooksAPI.search(query).then((books) => {
        //console.log(books);
        if (books.error) {
          this.setState({ books: [] });
	} else {
          this.setState({ books: (books) });
          //console.log("BooksAPI.search "+query+": "+JSON.stringify(books));
        }
      })
    } else {
      this.setState({ books: [] });
    }
  }

  render() {
    return (
          <div className="search-books">
            <form className="search-books-form">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" onChange={this.updateBooks} placeholder="Search by title or author"/>

              </div>
            </div>
            </form>
            <div className="search-books-results">
              <ol className="books-grid">
                { this.state.books.map( book =>
                    <li key={book.id}
                        onChange={ (event) => this.props.addBook(book, event.target.value) } >
                      <Book
                        book={book}
                        key={book.id}
                      />
                    </li>
                 )}
              </ol>
            </div>
          </div>
    )
  }
}

export default AddBook
