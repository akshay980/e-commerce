import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth 
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        // email, password --- from state.
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // it successfully created a user with email and password
            //console.log(auth);
            if(auth) {
                history.push('./')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"  
                />
            </Link> 

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>Email:</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password:</h5>
                    <input type="password" value={password} onChange= {e => setPassword(e.target.value)} />

                    <button 
                        type="submit" 
                        className="login_signInButton" 
                        onClick={signIn}
                    >Sign In
                    </button>
                </form>

                <p>
                    By Signing-in you agree to our Terms and Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-based ads Notice. 
                </p>

                <button 
                    className="login_registerButton"
                    onClick={register}
                >Create New Account
                </button>
            </div>   
        </div>
    )
}

export default Login;
