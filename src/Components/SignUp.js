import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
export default function SignUp(props) {
    // variables for signup credentials
    var [username, setUserName] = useState();
    var [mobile, setMobile] = useState();
    var [email, setEmail] = useState();
    var [password, setPassword] = useState();

    // variables for success & error message
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // navigate to sign in page
    var navigateSignUp = useNavigate();
    var gotoLogIn = () => {
        navigateSignUp('/login');
    }


    // signup function is called when uses click on signup button
    const signup = () => {

        // initializing success and error variables to blank by Default 
        setSuccess("");
        setError("");
        // checking if fields are empty 
        if (username !== "" && email !== "" && password !== "" && mobile !== "") {
            // check for Email format
            if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) !== null) {
                //  inserting user details to userArr
                props.setUserArr([
                    ...props.userArr, {
                        username: username,
                        email: email,
                        password: password,
                        mobile: mobile,
                    }
                ])
                setSuccess("Created Accout Successfully");
            } else {
                setError("Enter Email Properly");
            }
        } else {
            setError("All Fields Are Required");
        }
    }
    return (
        <div className='SignUp-div'>
            <div className='SignUp-main'>
                <img src='logo2.png' alt='logo' />

                <h1>Create Account</h1>

                <h5>Your name</h5>
                <input type="text" value={username}
                    onChange={(event) => setUserName(event.target.value)} />

                <h5>Mobile Number</h5>
                <input type="number" value={mobile}
                    onChange={(event) => setMobile(event.target.value)} />

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

                <button onClick={signup}>Sign up</button>

                <p>Already have an account? <a onClick={gotoLogIn}>Sign in</a></p>
            </div>
        </div>
    )
}
