import React from 'react';
import './App.css';
import BookList from './BookList';
import BookForm from './BookForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/add">Add Book</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={BookList} />
        <Route path="/add" component={BookForm} />
      </div>
    </Router>
  );
}

export default App;
