import React, { useEffect, useState } from 'react'
import "./empAll.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const EmpAllList = () => {
    const[employees, setEmployees] =useState([]);

let navigate = useNavigate();

    useEffect(()=>{
        window.fetch("http://localhost:8000/employees",{
            method: "GET",
        })
         .then((res) =>
        res.json().then((data) => {
          setEmployees(data);
          toast.success("Employee data fetched successfully");
        })
      )
      .catch((err) => toast.error("Data not fethced"));
  }, []);

  //for remove /delete individual emplioyee data
  const removeEmployee=(id)=>{
    window.fetch("http://localhost:8000/employees/" +id,{
      method:"DELETE"
    }).then(_=>{
      toast.success("Employee deleted successfully");
      setTimeout(()=>{
        window.location.reload();
      },1500)
    })
    .catch(_=>toast.error("employee not deleted"))
  }

  //for editing individual employee data

  const loadEdit=(id)=>{
    // console.log(id);
    navigate("/empedit/"+id);
  }

  //for view details
  const ViewDetails=id=>{
    navigate("/empdetails/"+id)
  }
       
   
  return (
    <section id="listOfAllEmp">
      <article>
        <h1>All Employee Lists</h1>

        <div className="createBtn">
            <Link to="/empcreate">Add Employee +</Link>
        </div>
       {
        employees && employees.length > 0 ? ( <table>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => {
              return (
                <tr key={i}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.gender}</td>
                  <td>
                    <a className="btn btn-edit" onClick={()=>loadEdit(emp.id)}>Edit</a>

                    <a className="btn btn-delete" onClick={()=>removeEmployee(emp.id)}>Delete</a>
                    <a className="btn btn-view" onClick={()=>{ViewDetails(emp.id)}}>View Details</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>) : <h1>No Employee Data available</h1>
       }
      </article>
    </section>
  );
};
  


export default EmpAllList