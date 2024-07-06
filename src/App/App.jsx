
import React, { useState } from 'react';
import './App.css';
import Form from '../Form/Form'
import Results from '../Results/Results';

const App = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    return (
        <div className="App">
            <Form formData ={formData} setFormData= {setFormData}/>
            <p>Your Form Data</p>
            <Results formData ={formData}/>
        </div>
    );
};

export default App;
