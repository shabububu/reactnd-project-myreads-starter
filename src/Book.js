import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ShelfSelector from './ShelfSelector'

class Book extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired // none | currentlyReading | wantToRead | read
  }

  render() {
    const { title, authors, coverUrl, shelf} = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${coverUrl})` }}></div>
          <ShelfSelector selected={shelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book
