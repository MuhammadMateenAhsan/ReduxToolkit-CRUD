import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showEmployee , deleteEmployee } from "../features/employeeSlice";
import { Link } from "react-router-dom";

const ReadEmployees = () => {
  const dispatch = useDispatch();
  const { employees, loading } = useSelector((state) => state.app);
  console.log(employees)

  useEffect(() => {
    dispatch(showEmployee());
  },[deleteEmployee]);
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <>
      <h2 className="text-center">'Employees data length is = '</h2>
      <table className="table table-bordered">
        <thead>
          <th>id</th>
          <th>Name</th>
          <th>email</th>
          <th>phone</th>
          <th>salary</th>
          <th colspan="2" className="text-center">action</th>
        </thead>
        <tbody>
          {
          Array.isArray(employees) && employees.map((item,index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.salary}</td>
                <td><Link to={`UpdateEmployee/${item._id}`} className="btn btn-info">Edit</Link></td>
                <td><Link className="btn btn-danger" onClick={()=>dispatch(deleteEmployee( item._id ))}>Delete</Link></td>


              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ReadEmployees;
