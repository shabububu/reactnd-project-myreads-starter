import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ShelfSelector extends Component {
  static propTypes = {
    selected: PropTypes.string.isRequired // none | currentlyReading | wantToRead | read
  }

  render() {
    const { selected } = this.props

    return (
      <div className="book-shelf-changer">
        <select className="move-book-to-shelf" value={selected}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading" selected>Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfSelector
