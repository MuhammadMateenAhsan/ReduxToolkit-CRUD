import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../features/employeeSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CreateEmployee = () => {
    const empty = {
        name:"",
        email:"",
        phone:"",
        salary:"",
    }
    const [handle , setHandle] = useState(empty)
    const dispatch = useDispatch()

    const handler=(e)=>{
       setHandle({...handle,[e.target.name]:e.target.value})
      
      }

      const submitform = ()=>{
        console.log(handle)
        dispatch(createEmployee(handle))
        setHandle(empty)
        toast.success("form Submitted successfully")
      }
    return (
        <>
    <h1 className='text-center '>Add Employee</h1>
        <div className='container formalignment'>

    <form
    className='col-md-8'
    onSubmit={
        (e)=>{
            e.preventDefault();
            submitform();
        }
    }
    >
    <div className="form-group ">
    <label htmlFor="email">Name</label>
    <input type="text" name='name' value={handle.name} className="form-control" aria-describedby="nameHelp" placeholder="Enter name" onChange={handler}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" name='email' value={handle.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handler}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="form-group">
    <label htmlFor="phone">Phone</label>
    <input type="text" name='phone' value={handle.phone} className="form-control" aria-describedby="phoneHelp" placeholder="Enter phone number" onChange={handler}/>
  </div>

  <div className="form-group">
    <label htmlFor="salary">Salary</label>
    <input type="text" name='salary' value={handle.salary} className="form-control" aria-describedby="salaryHelp" placeholder="Enter salary here" onChange={handler}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}

export default CreateEmployee