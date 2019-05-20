import React from 'react'

const Book = (props) => {
    return (<div>{props.book.title} - {props.book.author}</div>);
  };
  
export default Book;