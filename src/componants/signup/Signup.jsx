import React, { useState } from 'react'
 import { Link,useNavigate } from "react-router-dom"
import './Signup.css'
import axios from 'axios';
function Signup() {
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })


    const navigate = useNavigate();

    const [error,setError]= useState("");

    const handleChange =({currentTarget:input}) =>{
        setData({...data,[input.name]:input.value})
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const url ="http://localhost:8010/api/users/signup";
            const {data:res} =await axios.post(url,data);
            navigate('/login')
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status >= 400 &&
                error.response.status <=500){
                    setError(error.response.data.message)
                }
        }
    }
    return (
        

            <div className='signup_container'>
                <div className='signup_form_container' onSubmit={handleSubmit}>
                    <div className='left'>
                        <h1>welcome back</h1>
                        <Link to='/login'>
                            <button type='button' className='white_btn' > Sign In</button>
                        </Link>
                    </div>
                    <div className='right'>
                        <form className='form_container'>
                            <h1> Create Account</h1>
                            <input type="text"
                                placeholder='Name'
                                name='name'
                                onChange={handleChange}
                                value={data.name}
                                required

                                className='input'
                            />
                            <input type="email"
                                placeholder='Email'
                                name='email'
                                onChange={handleChange}
                                value={data.email}
                                required
                                className='input'
                            />
                            <input type="password"
                                placeholder='Password'
                                name='password'
                                onChange={handleChange}
                                value={data.password}
                                required
                                className='input'
                            />
                            {error && <div className='error_msg'>{error}</div>}
                            <button type='submit' className='green_btn' >
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        
    )
}



export default Signup;