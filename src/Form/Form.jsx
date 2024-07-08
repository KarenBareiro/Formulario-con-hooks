import { useState } from "react";
// Función para manejar el envío del formulario
const Form = ({ formData, setFormData }) => {
    const sendForm = (e) => {
        e.preventDefault(); // Evita que el formulario se envíe
        validate(); // Validar una última vez antes de enviar el formulario
    }


    // Función para manejar el cambio en los campos del formulario
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        });

        validate();// Validar cada vez que se cambia un campo del formulario
    };

    const [errors, setErrors] = useState({})


    // Función para validar los campos del formulario
    const validate = () => {
        const newErrors = {};
        // Validación de cada campo del formulario 
        if (formData.name.length < 2)
            newErrors.name = "El nombre debe tener al menos 2 caracteres";
        if (formData.lastName.length < 2)
            newErrors.lastName = "El apellido debe tener al menos 2 caracteres";
        if (formData.email.length < 5)
            newErrors.email = "El email debe tener al menos 5 caracteres";
        if (formData.password.length < 8)
            newErrors.password = "La contraseña debe tener al menos 8 caracteres";
        if (formData.confirmPassword.length < 8)
            newErrors.confirmPassword = "La contraseña debe tener al menos 8 caracteres";
        if (formData.password !== formData.confirmPassword)
            newErrors.comparedPassword = "Las contraseñas no coinciden";

        setErrors(newErrors)// Actualiza el estado de errores con los nuevos errores encontrados
    }

    return (
        <>
            <h2>Form</h2>
            <form>
                {/* Campo de nombre */}
                <div className="formBox">
                    <label htmlFor="name">
                        First Name
                    </label>
                    <input type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleOnChange(e)} />
                    {/* Renderizado condicional para mostrar mensaje de error si existe un error en 'name' y el campo no está vacio */}
                    {errors.name && errors.name !== '' ? (
                        <p className="error">{errors.name}</p>
                    ) : null}

                </div>
                {/* Campo de apellido */}
                <div className="formBox">
                    <label htmlFor="last-name">
                        Last Name
                    </label>
                    <input type="text"
                        id="last-name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleOnChange(e)} />
                    {/* Renderizado condicional para mostrar mensaje de error si existe un error en 'lastName' y el campo no está vacio*/}
                    {errors.lastName && errors.lastName !== '' ? (
                        <p className="error">{errors.lastName}</p>
                    ) : null}
                </div>
                {/* Campo de email */}
                <div className="formBox">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleOnChange(e)} />
                    {/* Renderizado condicional para mostrar mensaje de error si existe un error en 'email' y el campo no está vacio*/}
                    {errors.email && errors.email !== '' ? (
                        <p className="error">{errors.email}</p>
                    ) : null}

                </div>
                {/* Campo de contraseña */}
                <div className="formBox">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => handleOnChange(e)} />
                    {/* Renderizado condicional para mostrar mensaje de error si existe un error en 'password' y el campo no está vacio*/}
                    {errors.password && errors.password !== '' ? (
                        <p className="error">{errors.password}</p>
                    ) : null}
                </div>
                {/* Campo de confirmación de contraseña */}
                <div className="formBox">
                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={(e) => handleOnChange(e)} />
                    {/* Renderizado condicional para mostrar mensaje de error si existe un error en 'confirmPassword' y el campo no está vacio*/}
                    {errors.confirmPassword && errors.confirmPassword !== '' ? (
                        <p className="error">{errors.confirmPassword}</p>
                    ) : null}
                    {/* Renderizado condicional para mostrar mensaje de error si las contraseñas no coinciden */}
                    {errors.comparedPassword && errors.comparedPassword !== '' ? (
                        <p className="error">{errors.comparedPassword}</p>
                    ) : null}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Form;
