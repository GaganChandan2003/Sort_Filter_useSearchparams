import React,{useEffect} from 'react'
import {Link , useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import BookCard from './BookCard'
import getbooks from '../redux/action'

const BookList = () => {
  const dispatch=useDispatch();
  const books=useSelector((state)=>state.reducer.books);
  const [searchParams] = useSearchParams();
  const location =useLocation();
 
  useEffect(() => {
    if (books.length === 0 || location.search) {
      const sortBy = searchParams.get("sortBy");
      const getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort:sortBy &&"release_year",
          _order: sortBy,
        },
      };
      console.log(getBooksParams)
      dispatch(getbooks(getBooksParams));
    }
  }, [location.search]);
  return (
    <div>
        {
           books.length>0&&books.map((el)=>{
            return (<div key={el.id} style={{border:'1px solid blue',padding:"5px",width:'310px'}}>
            <Link to={`/books/${el.id}`}><BookCard book={el}/></Link>
        </div>)
            
})
        }
    </div>
  )
}

export default BookList