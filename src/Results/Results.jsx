import React from "react";

const Results = (props) => {
    console.log (props)
    const {name, lastName,email, password, confirmPassword} = props.formData;
    return(
        <>
        <p>First Name: {name}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </>
    );
}

export default Results;