import React, { useEffect } from 'react';

import HomeLogo from '../logos/HomeLogo';
import LoginConsole from '../other/LoginConsole';

const Login = props => {

    useEffect(() => {

        // On page load, look for a user
        async function findUser() {
            try {
                let user = await getUser();
                if (user) {
                    props.handleAuth(user);
                }
            } catch (error) {
                console.log('Unable to find if a user is already logged in.')
            }
        }

        findUser();
    })

    function getUser() {
        return fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login/success`, {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(response => {
                return response.json()
            }).then((results) => {
                if (results.status === "error") {
                    return null;
                } else {
                    return results.user;
                }
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <HomeLogo />
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <LoginConsole handleAuth={props.handleAuth} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;