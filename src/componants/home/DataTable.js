
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataChart from './DataChart'
import DataUpload from './DataUpload'
function DataTable() {
    const [data, setData] = useState([])

    const config = {
        headers: {
            Authorization: localStorage.getItem("token"),
        }
    };


    //  Delete student
    const handle_delete = (id) => {
        console.log(id)
      
        axios.delete(`http://localhost:8010/api/student/deletestudent/${id}`,config).then((res) => {
            console.log(res.data);
          });
        
      };
   
        // get student
      
    const fetch_student = () => {   
        axios.get("http://localhost:8010/api/student/getstudent", config).then((data) => {
            setData(data.data.student)
        })
    }
    useEffect(() => {
        fetch_student()
    }, [])
  return (
    <>
      <DataUpload />
            <hr />
            <div className="container d-flex">
                <div className="container">
                    <h3 className='text-center'> Student Table</h3>
                </div>
                <div className="container d-flex m-2">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-success btn-sm" type="submit">Search</button>
                </div>
            </div>
            <div className='container mx-2'>
                <table className="table">
                    <thead >
                        <tr className='table-secondary'>
                            <th scope="col">Sl.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Student ID</th>
                            <th scope="col"> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((ele, ind) => {
                                      {/* key={ele.id} */}
                                return <tr className='table-white' key={ele.id}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{ele.name}</td>
                                    <td>{ele.age} year</td>
                                    <td>{ele.contact}</td>
                                    <td>{ele.studentId}</td>
                                    <td>
                                        <button className='btn btn-primary btn-sm mx-2 bi bi-pencil-fill' ></button>
                                        <button  onClick={() => handle_delete(ele._id)} className='btn btn-danger btn-sm mx-2  bi bi-trash' >
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div> 
            {/* <DataChart/>  */}
    </>
  )
}

export default DataTable