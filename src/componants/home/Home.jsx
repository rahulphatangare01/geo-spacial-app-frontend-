// import { STATES } from 'mongoose';
import React, { useState } from 'react'
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import { NavLink } from 'react-router-dom';
import './Home.css'
import SideNav from './SideNav';
// import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import MaterialTable from "material-table";

function Home() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }


    const [file, setFile] = useState({rows: "",cols: ""});

    let rows = file.rows[0]
    let col = file.rows.slice(1)
     let res ={}
  for(let i=0; i<col.length;i++){
    for(let j =0;j<col[0].length; j++){
    res[rows[j]]=col[i][j]
    }
     console.log(res)
  }
    console.log(rows)


    const fileHandler = (event) => {
      let fileObj = event.target.files[0]
      ExcelRenderer(fileObj, (err, resp) => {
        if (err) {
          console.log(err)
        } else {
          setFile({
            cols: resp.cols,
            rows: resp.rows
          })
        }
      })
    }

  
  return (

    <div>
      <nav className='navbar'>
        <h2> Geospacial App</h2>
    <NavLink to="/studentdatatable" className='text-decoration-none text-light mx-3'>Services</NavLink>

      

        <button className='logout_btn' onClick={handleLogout}>Logout</button>
      </nav>
      {/* <SideNav/> */}

      <div>
<div className='app-header'>
<input type="file" onChange={fileHandler} style={{"padding":"10px"}}/>
<div>
{file.rows && <OutTable data={file.rows} columns={file.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading"/>}
</div>
</div>
</div>

    </div>
  )
}

export default Home






















       