# MyReads Project

The MyReads Project creates a React-based application that allows a person to keep track of books that s/he is current reading, wanting to read, and has read in the past, by storing them on separate bookshelves. There is a search feature to find books to add to the bookshelves as well.

Note: This project was modified from the starter template for the final assessment project for Udacity's React Fundamentals course. This is basically a homework assignment to see if I can absorb and use React-based concepts.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── AddBook.js # React component that allows your to search for new books and add them to your bookshelves.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app, where you can view your books (ListBooks) or add new ones (AddBook).
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # React Component to represent a single book.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookShelf.js # React Component to represent on particular bookshelf.
    ├── ListBooks.js # React Component that allows your to view which books on shelves (BookShelf) that you are 
    │                # currently reading, want to read, or have read. You can update the books on your shelves
    ├── ShelfSelector.js # React Component to allow the user to select currently reading, want to read, or have read.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

We are using a backend server provided through the Udacity Front-end Developer Course. The file [`BooksAPI.js`](src/BooksAPI.js) was provided by Udacity and contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This original Udacity project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

I'm open to suggestions and feedback, but because this project was created from a course, I will not likely be updating it too often or taking in contribution requests. Most likely, you will not care to do that anyway, since so many other students are making applications just like this one.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
