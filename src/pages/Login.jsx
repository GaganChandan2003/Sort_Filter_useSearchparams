import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../authdedux/authactions';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  let location =useLocation();
  let navigate=useNavigate
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const dispatch=useDispatch();
  const isAuth=useSelector((state)=>state.auth.isAuth)
  const commingFrom = location.state?.from?.pathname || "/";
const handleOnsubmit=(e)=>
{
  e.preventDefault();
  if(email&&password)
  {
    dispatch(loginApi({email,password}))
  }

}
if (isAuth) {
  navigate(commingFrom, { replace: true });
}
  return (
    <div>
      <div>
      <form action="" onSubmit={handleOnsubmit}>
        <div>
          <input 
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} /></div>
        <div>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} /></div>
        <div>
          <input type="submit" value="Login In" />
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login