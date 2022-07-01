import {GET_LOGIN_LOADING,GET_LOGIN_FAILED,GET_LOGIN_SUCCESS} from './authtypes'
const initialstate={
    "isLoading":false,
    "token":"",
    "isError":false,
    "isAuth":false,
}


export const authreducer=(state=initialstate,{type,payload})=>
{
    switch(type)
    {
        case GET_LOGIN_LOADING: {
            return { ...state, isLoading: true, isError: false };
          }
      
          case GET_LOGIN_SUCCESS: {
            return {
              ...state,
              isAuth: true,
              isLoading: false,
              isError: false,
              token: payload,
            };
          }
      
          case GET_LOGIN_FAILED: {
            return { ...state, isLoading: false, isError: true };
          }
      
          default: {
            return state;
          }
    }
}