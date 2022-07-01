import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom'
import getbooks from '../redux/action';

const Singlebook = () => {
    const dispatch=useDispatch();
    const {id}=useParams();
    const books=useSelector((state)=>state.reducer.books);
    const [currentbook, setcurrentbook] = useState({});
    useEffect(()=>
    {
        if(books.length===0)
        {
            dispatch(getbooks());
        }
    },[books?.length,dispatch])
    useEffect(()=>
    {
        if(id)
        {
            const temp=books.find(book=>book.id===Number(id));
            temp&&setcurrentbook(temp);
        }
    },[books,id])
    console.log(currentbook);
    
  return (
    <div>
        <h2>{currentbook?.book_name}</h2>
        <img width="350px" src={currentbook?.cover_photo} alt="" />
        <h3>Author:{currentbook?.author}</h3>
        <p>{currentbook?.release_year}</p>
        <button>
        <Link to={`/book/${currentbook.id}/edit`}>Edit</Link>
      </button>
    </div>
  )
}

export default Singlebook