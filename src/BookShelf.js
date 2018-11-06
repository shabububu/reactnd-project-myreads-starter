import React, { Component } from 'react';
import PropTypes from 'prop-types'
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
              {/* TODO: avoid arrow functions in onChange events for better efficiency */}
              <li key={b.id} 
                  onChange={(event) => this.props.onUpdateShelf(b, event.target.value)}>
	        <Book book={b} />
              </li>
	    ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
