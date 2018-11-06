import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ShelfSelector from './ShelfSelector'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  }

  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          { (book.imageLinks !== undefined) ?
              <div
                className="book-cover"
                style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail })` }}>
              </div>
              :
              <div className="book-cover"></div>
          }
          <ShelfSelector selected={book.shelf || "none"} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>
    );
  }
}

export default Book
