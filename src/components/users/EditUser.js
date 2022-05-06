import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom'

const EditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        address: "",
        email: "",
        gender:""
    });
    const { name, address, email , gender} = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loaduser();
    }, []);
    const onUpdate = async e => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/users/${id}`, user);
        alert("Data Updated");

    }
    const loaduser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form>
                    <div className="form-group p-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group p-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Address"
                            name="address"
                            value={address}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group p-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group p-3">
                        <h5><input type="radio" value="Male" name="gender"   onChange={e => onInputChange(e)}/> Male
                            <input type="radio" value="Female" name="gender" onChange={e => onInputChange(e)}/> Female
                            <input type="radio" value="Other" name="gender"  onChange={e => onInputChange(e)}/> Other</h5>
                    </div>
                    <center><button className="btn btn-warning btn-block" onClick={onUpdate}>Update</button></center>
                </form>
            </div>
        </div>
    )
}
export default EditUser;