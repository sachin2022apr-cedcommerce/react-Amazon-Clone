import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    // signup navigation
    var navigateSignUp = useNavigate();

    // states for email and password
    var [email, setEmail] = useState();
    var [password, setPassword] = useState();
    var gotoSignUp = () => {
        navigateSignUp('/signup');
    }
    // variables for success & error message
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const loginUser = () => {
        setSuccess("");
        setError("");
        // login function
        if (email !== "" && password !== "") {

            props.userArr.map((e) => {
                if (e.email === email && e.password === password) {
                    // pushing to login array
                    props.setLoginUser([
                        {
                            username: e.username,
                            email: e.email,
                            password: e.password,
                            mobile: e.mobile
                        }
                    ])
                    setSuccess("Login Successfully");
                } return 1;
            })
        } else {
            setError("All Fields Are Required");
        }
    }
    return (
        <div className='SignUp-div'>
            <div className='SignUp-main'>
                <img src='logo2.png' alt='logo' />

                <h1>Sign in</h1>

                <h5>Email</h5>
                <input type="email" value={email}
                    onChange={(event) => setEmail(event.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password}
                    onChange={(event) => setPassword(event.target.value)} />


                {/* ERROR */}
                <p style={{ color: "red" }}>{error}</p>

                {/* SUCCESS */}
                <p style={{ color: "green" }}>{success}</p>
                <button onClick={loginUser}>Login</button>

                <p>Don't have Account <a onClick={gotoSignUp}>Sign up</a></p>
            </div>
        </div>
    )
}
