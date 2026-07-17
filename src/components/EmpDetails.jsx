import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EmpDetails = () => {
  const[emp, setEmp]=useState();
  const{eid}=useParams();

  useEffect(()=>{
    fetch("https://localhost:8000/employees/"+eid)
    .then(res=>res.json().then(data=>{
      setEmp(data);
    }))
    .catch(error=>toast.warning("employee not found"))
  },[])
  return (
    <div>
      <h1>View Employee Details</h1>
      <hr />
      <h2>Employee Name : {emp.name}</h2>
      <h2>Employee Email : {emp.email}</h2>
      <h2>Employee Phone : {emp.phone}</h2>
      <h2>Employee Gender : {emp.gender}</h2>
      <Link to={'/'}></Link>
    </div>
  )
}

export default EmpDetails