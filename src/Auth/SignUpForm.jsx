import { useState } from 'react'

const SignUpForm = ({ onLogin }) => {
    const [signup, setSignup] = useState({
        username: '',
        password: '',
        password_confirmation: ''
    })



const [isloading, setIsLoading] = useState(false)
const [errors, setErrors] = useState([])


const handleChange = e => {
    setSignup({
        ...signup,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signup),
    }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
            res.json().then(user => onLogin(user));
        } else {
            res.json().then((err) => setErrors(err.errors));
        }
    });
}




    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input placeholder='Username' type='text' id='username'
                name="username" autoComplete='off' value={signup.username}
                onChange={handleChange} />

            <input placeholder='Password' type='password' id='password' name='password'
                autoComplete='current-password' value={signup.password} onChange={handleChange} />

                <input placeholder = 'Password Confirmation' type = 'password'
                name = "password_confirmation" id ='password_confirmation' autoComplete='current-password' value={signup.password_confirmation} onChange={handleChange} />
                <button type='submit'>
                    {isloading ? "loading...." : "Sign Up"}
                </button>
                {errors.map(err => {
                    return(
                        <span key={err}>
                            {err}
                        </span>
                    )
                })}
        </form>
    )
}

export default SignUpForm
