import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';
import { useRouter } from 'next/router';
const Register = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, isLoading] = useState(false);
    const {state, dispatch} = useContext(Context);
    const router =useRouter();
    const {user} = state;
    useEffect(()=>{
        if(user !== null){
            router.push('/')
        }
    },[user])
   
    const handleSubmit = async (e) =>{
        // console.log(e);
        e.preventDefault();
        // console.table({name,email,password});
        
        try{
            isLoading(true);
            const data = await axios.post(`/api/register`,{
                name,
                email,
                password
            })
            console.log('data:',data)

            toast.success('Registration is successful. Please log in')
            isLoading(false);

        }

        catch(err){
            isLoading(false);
            toast.error(err.response.data);

        }
       
    }
    return <>
   <h1 className=" jumbotron text-center bg-primary sqaure">Register</h1>
   <div className="container col-md-4 offset-md-4 pb-5">
    <form onSubmit={handleSubmit}>
        <input type='text'
         className = 'form-control mb-4 p-4' 
         value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder='Enter Name'
          required/>
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
         
          <button type='submit' className='btn btn-block btn-primary center' disabled={!name || !email || !password}> 
          {loading ? <SyncOutlined spin/> : "Submit"}</button>
    </form>
    <p className='text-center p-3'>Already Registered? {" "}
    <Link href="/login">Login</Link>
    </p>
   </div>
   </>
}

export default Register;