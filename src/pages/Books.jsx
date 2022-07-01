import React from 'react'
import BookList from '../components/BookList';
import SortFilter from '../components/SortFilter';
import styled from 'styled-components'

const Books = () => {
  return (
    <div>
      Books
      <div style={{display:'flex'}}>
        <div style={{width:'300px',border:'1px solid red'}}>
        <SortFilter/>
        </div>
        <BookListWraper>
        <BookList/>
        </BookListWraper>
      </div>
      </div>
  )
}

export default Books

const BookListWraper=styled.div`
border:1px solid green;
width:100%;
display :grid;
grid-templete-colums:repeat(auto-fit,minmax(310px,max-count));
grid-gap:16px;
justify-content:center;
padding:initial
`