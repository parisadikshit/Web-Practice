import { useReducer, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
// initial state
const initialState = {
    user:null,
}

// create context 
const Context = createContext();


// root reducer 
const rootReducer = (state,action) =>{
    switch (action.type){
        case "LOGIN":
            return {
                ...state,
            user:action.payload};
        case "LOGOUT":
            return {
                ...state,
                user:null
            };
        default:
            return state;

    }
}

// context provider
const Provider = ({children}) =>{
    const [state, dispatch] = useReducer(rootReducer, initialState);
    const router = useRouter();
    useEffect(()=>{
        dispatch({
            type:'LOGIN',
            payload:JSON.parse(window.localStorage.getItem('user'))
        })
    },[]);
    // 
    axios.interceptors.response.use(
        function(response){
            // any response with status code 2XX will be resolved here
            return response
        },
        function(error){
            let res = error.response;
            // any error status code will be resolved here
            if(res.status == '401' && res.config && res.config.__isRetryRequest){
                return new Promise((resolve, reject) =>{
                    axios.get('/api/logout')
                    .then((data)=>{
                        console.log('401 error ')
                        dispatch({type:'LOGOUT'});
                        window.localStorage.removeItem('user')
                        router.push('/login')

                    })
                    .catch(err=> {
                    console.log(err)
                    reject(err);})
                    return Promise.reject(error);

                }
                )
            }
        }
    )

    return (
        <Context.Provider value ={{state,dispatch}}>
            {children}

        </Context.Provider>
    )
}

export {Context, Provider};