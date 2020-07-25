import React, { useState, useEffect } from 'react';
import HomeLogo from '../logos/HomeLogo';
import LoginConsole from '../other/LoginConsole';
import { Redirect } from 'react-router-dom';
import UserInfo from './UserInfo';
import NavBar from '../other/NavBar';
const Home = props => {

    let [userIsFound, setUserIsFound] = useState(false);

    useEffect(() => {
        async function findUser() {
            console.log('looking for a user')
            try {
                let userResults = await getUser();
                let user = userResults.user;
                console.log('found a user')
                if (user) {
                    props.handleAuth(user, true);
                    setUserIsFound(true);
                }

            } catch (error) {
                console.log('An error occured while authenticating the user.')
            }
        }

        findUser();
    }, [])

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
                return results;
            })
    }

    return (
        <div>
            {!props.isAuthenticated ?
                <div className="Home">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 p-5 center">
                                <HomeLogo />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 col-md-10 col-lg-4 offset-lg-8 offset-sm-1 offset-md-1">
                                <LoginConsole />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="LoggedInPage">
                    <NavBar handleLogout={props.handleLogout} />
                    <UserInfo />
                </div>
            }
        </div>
    )
}

export default Home;

// {user && isAuthenticated ?
//     <Profile handleLogout={handleLogout} />
//     :
//     <Home />}