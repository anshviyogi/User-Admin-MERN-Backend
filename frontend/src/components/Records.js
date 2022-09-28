import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import './Record.css'

function Records() {
    const[data,setData] = useState([])
    const[months,setMonths] = useState('')
    const[filteredData,setFilteredData] = useState([])

    const month = ['Select Month','Jan','Feb','March','April','May','June','July','August','September','Octuber','November','December']

    // Fetching data from MongoDB
    useEffect(()=>{
        axios('http://localhost:4000/fetch')
            .then(response => setData(response.data))
    },[data])

    // Filtering data according to state
    useEffect(()=>{
        data.map(dataList =>{
            if(dataList.months === months){
                setFilteredData([dataList])
            }else{
                console.log("No rec found")
            }
        })
    },[months])
    
  return (
    <div className='records'>
        <Container>
        <h1 style={{textAlign:"center"}}>All Records</h1> 

        <label for="sel1">Select month to filter the record</label>
  <select class="form-control" onChange={e => setMonths(e.target.value)}>
    {
        month.map(data =>{
            return <option>{data}</option>
        })
    }
  </select>
<br/>
{
    filteredData.map(data =>{
        console.log(data)
        return(
            <>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>State Name</th>
          <th>Month - Year</th>
          <th>Active Users</th>
          <th>Total Users</th>
          <th>Resources Used</th>
          <th>Videos Watched</th>
          <th>Teachers</th>
          <th>Assignments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.state}</td>
          <td>{data.months} - {data.years}  </td>
          <td>{data.activeUsers}</td>
          <td>{data.totalUsers}</td>
          <td>{data.resources}</td>
          <td>{data.videosWatched}</td>
          <td>{data.teacher}</td>
          <td>{data.assignments}</td>
        </tr>
      </tbody>
    </Table>
            </>
        )
    })
}

        </Container>
    </div>
  )
}

export default Records