import React from 'react'
import api from './Api'

export default class BookForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            book: {
                title: '...',
                author: '...'
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        api.post('books', this.state.book)
            .then(json => { 
                console.log("json", json)
                alert('A new book was submitted: ' + json.title + ', written by ' + json.author + ', id: ' + json.id) })
            .catch(ex => { console.log('Error fetch', ex) })
        event.preventDefault()
    }

    handleChange(key) {
        return event => {
            let newState = this.state.book
            newState[key] = event.target.value
            console.log('newState', newState)
            this.setState({book: newState})
        }
      }
    
    render() {
        return (
            <div className="App-panel">
            <span>Book Form</span>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" value={this.state.book.title} onChange={this.handleChange('title')} />
                    </label>
                    <br/>
                    <label>
                        Author:
                        <input type="text" value={this.state.book.author} onChange={this.handleChange('author')} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}