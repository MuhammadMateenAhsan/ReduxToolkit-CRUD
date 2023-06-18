import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateEmployee } from '../features/employeeSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';




const UpdateExtivity = () => {
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:8000/${id}`)
        .then(res => res.json())
        .then(data => {
         setHandle(prevState => ({
            // now we do not need to write each input one by one just use spread operator like this way
            ...prevState,...data
            // no need to follow below method
        //    name: data.name,
        //    email: data.email,
        //    phone:data.phone,
        //    salary:data.salary
        
         }));
       })
       .catch(error => {
         console.log(error);
       });
     },[id])
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
        dispatch(updateEmployee(handle))
        setHandle(empty)
        toast.success("Updated successfully")
      }
    return (
        <>
    <h1 className='text-center '>Update Employee</h1>
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
  <button type="submit" className="btn btn-primary">Update</button>
</form>
</div>
    </>
  )
}

export default UpdateExtivity