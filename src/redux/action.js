import * as types from './types';
import axios from "axios";
 const getbooks=(params)=>(dispactch)=>
 {
    dispactch({type:types.getbooksr})
    axios.get("http://localhost:8080/books",params)
    .then((res)=>dispactch({type:types.getbookss,payload:res.data}))
    .catch((err)=>dispactch({type:types.getbookse}))
 }
 export default getbooks 