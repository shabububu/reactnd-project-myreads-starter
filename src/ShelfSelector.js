import React, { Component } from 'react';

class ShelfSelector extends Component {
  render() {
    const { selected } = this.props || "none";

    return (
      <div className="book-shelf-changer">
      <select className="move-book-to-shelf" defaultValue={selected}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfSelector
