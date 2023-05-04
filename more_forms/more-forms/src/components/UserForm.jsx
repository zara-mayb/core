import React, { useState } from 'react'

const UserForm = () => {
    const [firstname, setFirstName] = useState("")
    const [firstnameerror, setFirstNameError] = useState("")
    const [lastname, setLastName] = useState("")
    const [lastnameerror, setLastNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailerror, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passworderror, setPasswordError] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [confirmpassworderror, setConfirmPasswordError] = useState("")

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("")
        }
        else if(e.target.value.length <2){
            setFirstNameError("First name must be at least 2 characters!")
        }
        else {
            setFirstNameError("");
        }
    }
    const validateLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("")
        }
        else if(e.target.value.length <2){
            setLastNameError("Last name must be at least 2 characters!")
        }
        else {
            setLastNameError("");
        }
    }
    const validateEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("")
        }
        else if(e.target.value.length < 5){
            setEmailError("Last name must be at least 5 characters!")
        }
        else {
            setEmailError("");
        }
    }
    const validatePasssword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("")
        }
        else if(e.target.value.length < 8){
            setPasswordError("Last name must be at least 8 characters!")
        }
        else {
            setPasswordError("");
        }
    }
    const validateConfirmPasssword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setConfirmPasswordError("")
        }
        else if(e.target.value != password)
            setConfirmPasswordError("Passwords must match")
        else {
            setConfirmPasswordError("");
        }
    }
    return (
        <fieldset>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={validateFirstName} />
                    {
                        firstnameerror ?
                            <p style={{ color: 'red' }}>{firstnameerror}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={validateLastName} />
                    {
                        lastnameerror ?
                            <p style={{ color: 'red' }}>{lastnameerror}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={validateEmail} />
                    {
                        emailerror ?
                            <p style={{ color: 'red' }}>{emailerror}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={validatePasssword} />
                    {
                        passworderror ?
                            <p style={{ color: 'red' }}>{passworderror}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input type="password" onChange={validateConfirmPasssword} />
                    {
                        confirmpassworderror ?
                            <p style={{ color: 'red' }}>{confirmpassworderror}</p> :
                            ''
                    }
                </div>
            </form>
        </fieldset>
    )
}

export default UserForm