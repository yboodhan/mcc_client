import React, { useState, useEffect } from 'react';
import FacebookLoginButton from './FacebookLoginButton';

const LoginConsole = props => {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('handle')
        try {
            let userResults = await logInUser();
            if (userResults.user) {
                props.handleAuth(userResults.user);
            }
        } catch (error) {
            console.log('There was an error logging in this user.')
        }
    }

    function logInUser() {
        console.log('calling')
        return fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify({ username, password }),
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        }).then(response => {
                return response.json()
            }).then((results) => {
                console.log(results)
                return results;
                //set message
            }).catch((error) => {
                console.log(error)
                // set message
            })
    }

    return (
        <div className="Login text-center">
            <div>
                <div className="card-header">
                    <strong>LOGIN</strong>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="form-group p-2">
                            <label className="pr-2" htmlFor="username">Username: </label>
                            <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group p-2">
                            <label className="pr-2" htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="mt-2">
                <div className="mb-2">
                    <strong>- OR -</strong>
                </div>
                <div>
                    <FacebookLoginButton />
                </div>
            </div>

        </div>
    )
}

export default LoginConsole;