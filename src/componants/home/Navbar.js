import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
function Navbar() {

        const [user, setuser] = useState("")
        const navigate = useNavigate()
        const logout_func = () => {
            localStorage.removeItem('token')
            navigate('/')
        }
        const config = {
            header: {
                Authorization: localStorage.getItem('token')
            }
        }
        const getuser = () => {
            axios.post('http://localhost:8000/api/user/getuser', config).then((data) => {
                console.log(data.data)
            })
        }
    
        useEffect(() => {
         getuser() 
      },[])
  return (
    <>
         <nav className=" navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">geo SpacialApp</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                       <button className="btn btn-danger" onClick={logout_func}>Logout</button>
                </div>  
            </div>
        </nav>
    </>
  )
}

export default Navbar