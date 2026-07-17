import React, { useState } from 'react'
import"./empcreate.css"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const EmpCreate = () => {
   const[name, setName] =useState("");
    const[email, setEmail] =useState("");
    const[phone, setPhone] =useState("");
    const[gender, setGender] =useState("");

    let navigate = useNavigate();

const handleSubmit=e=>{
    e.preventDefault();

    let payload={name , email,phone,gender};
    console.log(payload)
    fetch("http://localhost:8000/employees",{
      method:"POST",
      body:JSON.stringify(payload)
    })
    .then(res=>{
      toast.success("employee created successfully");
      navigate("/")
      
    }).catch(err=>toast.error("employee not created"))
  };

    let handleChange=e=>{
    if(e.target.checked==true){
      setGender(e.target.value)
    }
  }
  return (
    <section>
        <article>
            <h1>Craete An employee</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter username' 
                value={name} onChange={e=>setName(e.target.value)}/>
                <br />
                <input type="text" placeholder='enter email' value={email} onChange={e=>setEmail(e.target.value)}
                />
                <br />
                <input type="tel" placeholder='enter phone number' value={phone} onChange={e=>setPhone(e.target.value)} />
                <br />
                <input type="radio" name="gender" value="male"   onChange={handleChange}/>Male
                <input type="radio" name="gender" value="female" onChange={handleChange}/>Female
                <input type="radio" name="gender" value="others" onChange={handleChange}/>others
                <br />
                <input type="submit" value='Create Employee' />
                <Link to="/">Back to home page</Link>
            </form>
        </article>
    </section>
  )
}

export default EmpCreate