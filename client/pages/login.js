import {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';
import {useRouter} from 'next/router'

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, isLoading] = useState(false);
    const {state, dispatch} = useContext(Context)
    const router = useRouter()
      // state
    //   console.log('state',state)
      const {user} = state;
    //   console.log(user)
      useEffect(()=>{
        if(user!==null){
            router.push('/')
          }

      },[user])
     
      const handleSubmit = async (e) =>{
        // console.log(e);
        e.preventDefault();
        // console.table({name,email,password});
        
        try{
            isLoading(true);
            const {data} = await axios.post(`/api/login`,{
                email,
                password
            })
            // console.log('login data:',data)
            // dispatch the action 
            dispatch(
                {
                    type:'LOGIN',
                    payload:data
                }
            )

            // save the state in local storage
            window.localStorage.setItem('user',JSON.stringify(data));

            //redirect user to home page after login
            router.push('/')

            isLoading(false);

        }

        catch(err){
            isLoading(false);
            toast.error(err.response.data);

        }
       
    }
    return <>
   <h1 className=" jumbotron text-center bg-primary sqaure">Login</h1>
   <div className="container col-md-4 offset-md-4 pb-5">
    <form onSubmit={handleSubmit}>

          <input type='text'
         className = 'form-control mb-4 p-4' 
         value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder='Enter Email'
          required/>
          <input type='password'
         className = 'form-control mb-4 p-4' 
         value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder='Enter password'
          required/>
         
          <button type='submit' className='btn btn-block btn-primary center' disabled={!email || !password}> 
          {loading ? <SyncOutlined spin/> : "Submit"}</button>
    </form>
    <p className='text-center p-3'>Not yet registered? {" "}
    <Link href="/register">Register</Link>
    </p>
   </div>
   </>
}

export default Login;