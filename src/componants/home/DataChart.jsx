import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from 'react-easy-bar-chart'
function DataChart() {
    const [student, setStudent] = useState([])
    const [chartdata, setChartdata] = useState([])

    const config = {
        headers: {
            Authorization: localStorage.getItem("token"),
        }
    };
    const fetch_student = () => {
      
        axios.get("http://localhost:8010/api/student/getstudent", config).then((data) => {
            setStudent(data.student)
        })
    }
    useEffect(() => {
        fetch_student()
    }, [])
   

     const final_arr = []
    student.map((ele, ind) => {
        const data = {
            title: ele.name,
            value: ele.age,
            color: "#185f3d",
            key: "ind",
        }
        final_arr.push(data)
    })
    setChartdata(final_arr)
    console.log(chartdata)

  return (
    <>
 <div className="App">
            <header className="App-header">
            </header>
            <BarChart
                xAxis='React Bar Chart'
                yAxis="Values"
                height={400}
                width={1000}
                 data={final_arr}
            />
        </div>

    </>
  )
}

export default DataChart