import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import './AddUsers.css'

function AddUsers() {
    const[state,setState] = useState('')
    const[years,setYears] = useState('')
    const[months,setMonths] = useState('')
    const[activeUsers,setActiveUsers] = useState()
    const[totalUsers,setTotalUsers] = useState()
    const[resources,setResources] = useState('')
    const[videoWatched,setVideoWatched] = useState('')
    const[teacher,setTeacher] = useState('')
    const[assignments,setAssignments] = useState('')
    const[data,setData] = useState([])

const states = ['Select State','Uttar Pradesh','Jammu & Kashmir',"Andra Pradesh","Gujrat"]
const year = ['Select Year',2000,2001,2003,2004,2005,2006,2007,2008,2009,2010]
const month = ['Select Month','Jan','Feb','March','April','May','June','July','August','September','Octuber','November','December']

// Getting data from MongoDB
useEffect(()=>{
    axios('http://localhost:4000/fetch')
    .then(response => setData(response.data))

    console.log(data)
},[])

// Checking if users already exists
useEffect(()=>{
    data.map(data =>{
        if(data.months == months && data.years == years){
            alert("Record already exists")
        }
    })
},[months,years])

// Saving data in MongoDb
function saveHandler(){
    const data = {
        state,
        years,
        months,
        activeUsers,
        totalUsers,
        resources,
        videoWatched,
        teacher,
        assignments
    }

    if(data.months == months && data.years == years){
        alert(`The record for ${months}-${years} already exists. Please select some other month/year to proceed`)
    }else{
    axios.post('http://localhost:4000/submit',data)
    alert("Data Saved Successfully")

    setState('')
    setYears('')
    setMonths('')
    setActiveUsers('')
    setTotalUsers('')
    setResources('')
    setVideoWatched('')
    setTeacher('')
    setAssignments('')
    }
}

  return (
    <div className='addUsers'>
        <Container>
            <div className='form'>
                <h1 style={{textAlign:"center"}}>Add Users</h1>
                <br/>

{/* First Row...... */}
<div className='row'>
    <div className='col-sm-3'>
                <label>State Name</label>
                <br/>
                <select className='form-control' onChange={e => setState(e.target.value)}>
                    {
                        states.map(data =>{
                            return <option>{data}</option>
                        })
                    }
                </select>
    </div>

    <div className='col-sm-3' onChange={e => setYears(e.target.value)}>
                <label>Year</label>
                <br/>
                <select className='form-control'>
                    {
                        year.map(data =>{
                            return <option>{data}</option>
                        })
                    }
                </select>
    </div>

    <div className='col-sm-3'>
                <label>Month</label>
                <br/>
                <select className='form-control' onChange={e => setMonths(e.target.value)}>
                    {
                        month.map(data =>{
                            return <option>{data}</option>
                        })
                    }
                </select>
    </div>
</div>
{/* Second row....... */}
<br/>
<div className='row'>

    <div className='col-sm-6'>
        <label>Active Users</label>
        <input className='form-control'placeholder='Number of active users' type='number' onChange={e => setActiveUsers(e.target.value)}/>
    </div>

    <div className='col-sm-6'>
    <label>Total Users</label>
    <input className='form-control'placeholder='Total number of users' type='number' onChange={e => setTotalUsers(e.target.value)}/>
    </div>

</div>

{/* Third Row */}
<br/>
<div className='row'>

    <div className='col-sm-6'>
        <label>Resources Used</label>
        <input className='form-control'placeholder='What are the resources used here' onChange={e => setResources(e.target.value)}/>
    </div>

    <div className='col-sm-6'>
    <label>Videos Watched</label>
    <input className='form-control'placeholder='How many videos has been watched here' onChange={e => setVideoWatched(e.target.value)}/>
    </div>

</div>

{/* Fourth Row */}
<br/>
<div className='row'>

    <div className='col-sm-6'>
        <label>Teachers</label>
        <input className='form-control'placeholder='Name Teachers here' onChange={e => setTeacher(e.target.value)}/>
    </div>

    <div className='col-sm-6'>
    <label>Assignments</label>
    <input className='form-control'placeholder='Assignments' onChange={e => setAssignments(e.target.value)}/>
    </div>

</div>
<br/>
<div className="d-grid gap-2">

     <Button variant="outline-primary" size="md" onClick={saveHandler}>
        Save Record
      </Button>

    </div>
        </div>
        </Container>
    </div>
  )
}

export default AddUsers