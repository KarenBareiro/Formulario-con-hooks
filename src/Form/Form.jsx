
const Form = ({formData, setFormData}) => {
    const sendForm = (e) => {
        e.preventDefault();
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setFormData ({...formData,
        [name]: value} 
        )
    }

    return (
        <>
            <h2>Form</h2>
            <form onSubmit={sendForm}>
                <div class="formBox">
                    <label htmlFor="name">
                        First Name
                    </label>
                    <input type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleOnChange (e) } />
                </div>
                <div class="formBox">
                    <label htmlFor="last-name">
                        Last Name
                    </label>
                    <input type="text"
                        id="last-name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleOnChange (e)} />
                </div>
                <div class="formBox">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleOnChange (e)} />
                </div>
                <div class="formBox">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => handleOnChange (e)} />
                </div>
                <div class="formBox">
                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={(e) => handleOnChange (e)} />
                </div>
            </form>
        </>
    )
}

export default Form;
