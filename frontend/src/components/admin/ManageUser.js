import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import app_config from '../../config';

const ManageUser = () => {

    const [userList, setUserList] = useState([]);
    const url = app_config.apiurl;

    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch(url+'/user/getall');

        // accessing data from response
        const data = await res.json();

        console.log(data);
        setUserList(data.result);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);
    
    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch(url+'/user/delete/'+id, {
            method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('User Deleted Successfully!!');
        }
    }

  return (
    <div>
        <header className='py-3'>
            <div className="container">
                <h4 className='display-4 fw-thin  text-center' style={{color:"#5f8b5f"}}>Manage User Data</h4>
            </div>
        </header>

        <div className='container mt-3'>

        <table class="table table-striped table-hover">
                <thead >
                    <tr style={{backgroundColor:"#5f8b5f", color:"white"}}>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Description</th>
                        <th>Header Image</th>
                        <th>Profile Image</th>
                        <th>Created_At</th>
                        <th>Updated_At</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        userList.map( (user) => (
                            <tr >
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.email}</td>
                        <td>{user.contact}</td>
                        <td>{user.description}</td>
                        <td>{user.header}</td>
                        <td>{user.image}</td>
                        <td>{new Date(user.created_at).toLocaleDateString()}</td>
                        <td>{new Date(user.updated_at).toLocaleDateString()}</td>
                                <td>
                                    <button className='btn btn-dark' style={{backgroundColor:"#5f8b5f"}} onClick={() => deleteUser(user._id)}> <i style={{color:"white"}} class="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>


    </div>
  )
}

export default ManageUser;