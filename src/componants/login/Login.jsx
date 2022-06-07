import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import './Login.css'
function Login() {

  const [data,setdata] = useState({
    email:"",
    password:""
  });
const [error,setError] = useState("");

  const handleChange =({currentTarget:input}) =>{
    setdata({ ...data, [input.name]:input.value});
  };

  
  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8010/api/users/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return (
    <div className='login_container'>
    <div className='login_formContainer'>
        <div className='leftside'>
        <form className='form_container' onSubmit={handleSubmit}>
        <h1> Login here</h1>
            <input type="email"
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={data.email}
            required
            className='login_input' />

            <input type="password"
            placeholder='Password'
                name='password'
                onChange={handleChange}
                value={data.password}
                required
                className='login_input'
            />
            {error && <div className='error_msg'>{error}</div>}
            <button type='submit' className='login_submit_btn'  > Sign In</button>
        </form>
            
        </div>
        <div className='rightside'>
            <h1>New Here ?</h1>
            <Link to="/signup">
            <button  type='button' className='right_side_btn' >Create Account </button>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Login