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
              <li key={b.title+b.authors} 
                  onChange={(event) => this.props.onUpdateShelf(b, event.target.value)}>
                <Book 
                  id={b.id}
                  title={b.title}
                  authors={b.authors}
                  coverUrl={b.coverUrl}
                  shelf={b.shelf} />
              </li>
	    ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
