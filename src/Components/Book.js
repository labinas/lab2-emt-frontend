import React from 'react'
import './Book.css'

const Book = (props) => {
    return (
        <div className={'bookContainer'}>
            <div className={'bookDetails'}>
                <p className={'bookTitle'}>
                    {props.book.name}
                </p>
                <p className={'bookAuthor'}>
                    {props.book.author.name + " " + props.book.author.surname}
                </p>
            </div>
            <div className={'bookOptions'}>
                <button type={'button'} className={'addBook'}>Add</button>
                <button type={'button'} className={'editBook'}>Edit</button>
                <button type={'button'} className={'deleteBook'}>Delete</button>
            </div>
        </div>
    )
}

export default Book;