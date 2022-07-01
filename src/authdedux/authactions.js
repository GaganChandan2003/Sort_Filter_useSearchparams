import axios from "axios"
import { GET_LOGIN_FAILED, GET_LOGIN_LOADING, GET_LOGIN_SUCCESS } from "./authtypes"

export const loginApi=(logincred)=>(dispactch)=>
{
    dispactch({type:GET_LOGIN_LOADING})
    axios.post("https://reqres.in/api/login",logincred)
    .then((res)=>dispactch({type:GET_LOGIN_SUCCESS,payload:res.data}))
    .catch(()=>dispactch({type:GET_LOGIN_FAILED}))
}