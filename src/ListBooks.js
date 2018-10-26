import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {
    shelves: [
      {"title": "CurrentlyReading",
       "id": "currentlyReading"},
      {"title": "Want to Read",
       "id": "wantToRead"},
      {"title": "Read",
       "id": "read"},
    ]
  }
  
  render() {
    const { title, books } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
        <h1>{title}</h1>
        </div>
        <div className="list-books-content">
          <div>
	    {this.state.shelves.map( shelf => 
              <BookShelf
                onUpdateShelf={this.props.onUpdateShelf}
                key={shelf.id}
                title={shelf.title}
                books={books.filter( book => book.shelf === shelf.id)}
              />
            )}
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks