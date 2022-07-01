import React from 'react'

const BookCard = ({book}) => {
  return (
    <div>
        <img style={{width:'200px',heiht:'300px'}} src={book.cover_photo} alt="" />
        <div>{book.book_name}</div>
        <div>{book.release_year}</div>
        <div>{book.category}</div>
    </div>
  )
}

export default BookCard