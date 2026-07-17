import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmpEdit = () => {
  const[name, setName] =useState("");
  const[email, setEmail] =useState("");
  const[phone, setPhone] =useState("");
  const[gender, setGender] =useState("");

  let navigate=useNavigate();

  const{eid}=useParams();
  // console.log(eid);

  //to fetch and populate tha data inside the form 
  useEffect(()=>{
    fetch("http://localhost:8000/employees/" +eid,{
      method:"GET"
    }).then(res=>res.json().then(data=>{
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
    }))
    .catch(err=>console.log(err))
  },[])

  const handleSubmit=e=>{
    e.preventDefault();

    let payload = {name , email , phone , gender};
    fetch("http://localhost:8000/employees/" +eid,{
      method:"PUT",
      body:JSON.stringify(payload)
    }).then(()=>{
      toast.success("employee updated succesfully");
      navigate("/")
    })
    .catch(err=>toast.error("employe not updated"))
    };

  let handleChange=e=>{
    if(e.target.checked==true){
      setGender(e.target.value)
    }
  }
  return (
    <div>
      <section>
        <article>
            <h1>Update An employee</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter username' 
                value={name} onChange={e=>setName(e.target.value)}/>
                <br />
                <input type="text" placeholder='enter email'
                value={email}
                onChange={e=>setEmail(e.target.value)}/>
                <br />
                <input type="tel" placeholder='enter phone number' 
                value={phone} onChange={e=>setPhone(e.target.value)}/>
                <br />
                <input type="radio" name="gender" value="male"   onChange={handleChange}/>Male
                <input type="radio" name="gender" value="female" onChange={handleChange}/>Female
                <input type="radio" name="gender" value="others" onChange={handleChange}/>others
                <br />
                <input type="submit" value='Update Employee' />
                <Link to="/">Back to home page</Link>
            </form>
        </article>
    </section>
    </div>
  )
}

export default EmpEdit