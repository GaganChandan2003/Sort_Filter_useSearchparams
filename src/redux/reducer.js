import { getbookse, getbooksr, getbookss } from "./types";

const initialState={
    books:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case getbooksr:
            {
                return{
                    ...state,isLoading:true,isError:false
                }
            }
          case getbookss:
            {
                return{
                    ...state,books:payload,isLoading:false,isError:false
                }
            }
            case getbookse:
                {
                    return{
                        ...state,isLoading:false,isError:true
                    }
                }

        default:
            {
                return state;
            }
    }
}