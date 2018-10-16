import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'

class Book extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired
  }

  state = {
    shelf: 'none' // none | currentlyReading | wantToRead | read
  }

  render() {
    const { title, authors, coverUrl } = this.props
    const { shelf } = this.state

    return (
      <div className="book">
        <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${coverUrl})` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book
