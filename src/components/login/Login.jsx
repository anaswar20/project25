import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
const [un,setUn]=useState('');
const [pwd,setPwd]=useState('');
const [error,setError]=useState('');
const navigate=useNavigate();

const readusername=(event)=>{
    event.preventDefault();
    setUn(event.target.value);

}
const readpassword=(event)=>{
    event.preventDefault();
    setPwd(event.target.value);
}
const readalldata=(event)=>{
    event.preventDefault();
    if(un.trim ()===''|| pwd.trim ()==='')
    {
        setError(true);
    }
    else
    {
        setError(false);
        navigate('/home')
    }
    }
return (
    <div  className='aa'>
     <h1 className='bb'>SIGN-IN</h1> 
     <form>
        USER NAME<input type="text" onChange={readusername}/><br/><br/>
        password<input type="password" onChange={readpassword}/><br/><br/>
        <button type='submit' onClick={readalldata}>Login</button>
        {error && 'erorr occured'}
     </form>
    </div>
  )
}


export default Login
