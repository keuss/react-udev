import React from 'react'
import api from './Api'
import Book from './Book';

export default class BookList extends React.Component {

    constructor(props) {
        super(props)
        // initial state 
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        api.get('books')
            .then(json => { this.setState({ books: json }) })
            .catch(ex => { console.log('Error fetch', ex) })
    }

    renderBook(book, index) {
        return (
            <div key={index}>
                <Book book={book}/>
            </div>
        )
    }

    render() {
        const rows = this.state.books.map((b, index) => this.renderBook(b, index))
        return (
            <div className="App-panel">
                <span>Book List</span>
                {rows}
            </div>
        )
    }
}