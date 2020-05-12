import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log(newUser);
    };
    
    return(
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setfirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setlastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h4>Your Form Data</h4>
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email Address: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmpassword}</p>
    </div>
    );
};
    
export default UserForm;