import React, { useState } from "react";
import axios from 'axios';

const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        address: "",
        email: "",
        gender: ""
    });
    const { name, address, email, gender } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault()
        await axios.post("http://localhost:3001/users", user);
        alert("Data Saved");
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
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
                        <h5> <input type="radio" value="Male" name="gender" onChange={e => onInputChange(e)} /> Male
                            <input type="radio" value="Female" name="gender" onChange={e => onInputChange(e)} /> Female
                            <input type="radio" value="Other" name="gender" onChange={e => onInputChange(e)} /> Other</h5>
                    </div>
                   
                    <center><button className="btn btn-primary btn-block" onClick={onSubmit}>Add</button></center>
                </form>
            </div>
        </div>
    )
}
export default AddUser;