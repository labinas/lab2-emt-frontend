import React from 'react'
import Book from "./Book";

const Books = (props) => {
    return (
        <div>
            {props.books.map((book) => {
                return <Book book={book}></Book>
            })}
        </div>

    )
}
export default Books;