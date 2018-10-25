import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  }

  render() {
    const { title, books } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map( b => (
	      <li key={b.title+b.authors} onChange={() => this.props.onUpdateShelf(b)}>
                <Book 
                  id={b.id}
                  title={b.title}
	          authors={b.authors}
                  coverUrl={b.coverUrl}
                  shelf={b.shelf}
	          />
              </li>
	    ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
