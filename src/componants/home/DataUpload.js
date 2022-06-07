import React, { useState } from 'react';
import axios from 'axios';
import { ExcelRenderer } from 'react-excel-renderer';




    const DataUpload = () => {
        
    const [state, setState] = useState({})
    const [fileData,setfileData]= useState([])
    const fileHandler = (event) => {
        let fileObj = event.target.files[0];

    
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            }
            else {
                setState({
                    cols: resp.cols,
                    rows: resp.rows
                });
            }
        });
    }
    
    const upload = () => {
        let Json_data = []
        let rows = state.rows[0]
        let col = state.rows.slice(1)
        for (let i = 0; i < col.length; i++) {
            let res = {}
            for (let j = 0; j < col[0].length; j++) {
                res[rows[j]] = col[i][j]
            }
            Json_data.push(res)
        }
        setfileData(Json_data)
        console.log(fileData)
       async function dataupload () {
            try {
                var config = {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    }
                };
                console.log(config)
                let response =  await axios.post("http://localhost:8010/api/student/data", fileData,config,) 
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        } dataupload()
    }

  return (
    <>
      <h2 className='text-center text-dark'> File Upload XLSX</h2> 
      <div className='border border-dark my-2 p-2 d-flex bg-light'>
          <input type="file" onChange={fileHandler} className='border border-light bg-light mx-1' />
          <button onClick={upload} className='btn btn-primary d-flex'> upload Data</button>
          <h4 className='text-center text-dark mx-3'> File upload in xlsx</h4>
      </div> 
    </>
  )
}

export default DataUpload