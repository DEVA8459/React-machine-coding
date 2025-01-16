import axios from "axios";
import { useEffect,useReducer } from "react"

const apiActions = {
    FETCH_DATA :"fetchData",
    SET_DATA:"setData",
    SET_ERROR:"setError"
}
const initialState ={
    data:null,
    loading:true ,
    error:null
}

// above thing is similar to 
// const [data ,setData]=useState(null) like initial value for data we can do same for loading and null

const reducer =(state ,{type ,payload})=>{
    switch(type){
        case apiActions.FETCH_DATA: return {...state ,loading:true};
        case apiActions.SET_DATA: return{...state ,data:payload ,loading:false };
        case apiActions.SET_ERROR:return {...state ,loading :false ,error:payload};
        default :
            state
    }
}
const useFetch =(url)=>{
    const [state ,dispatch ] =useReducer(reducer ,initialState)

    const getData=async()=>{

        try{
            dispatch({type:apiActions.FETCH_DATA})
            const response = await axios.get(url)
            dispatch({type:apiActions.SET_DATA ,payload :response?.data.data})
        }catch(error){
            if(!axios.isCancel(error)){
                dispatch({type:apiActions.SET_ERROR ,payload:error})
            }
        }
    }

    useEffect(()=>{
        
        getData()
    
    },[url])
    return  state
}

export default useFetch