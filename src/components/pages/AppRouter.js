import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import UserInfo from './UserInfo';
import Astronauts from './Astronauts';
import Location from './Location';
import Home from './Home';
import NavBar from '../other/NavBar';
import NotFound from './NotFound'

const AppRouter = props => {
    console.log(props.user)
    console.log(props.isAuthenticated)


    return (
        <Router>

            <Switch>
                <Route exact path="/" render={
                    () => <Home handleAuth={props.handleAuth} user={props.user} handleLogout={props.handleLogout} isAuthenticated={props.isAuthenticated} />
                } />

                <Route exact path="/astronauts" render={
                    () => <Astronauts handleLogout={props.handleLogout} isAuthenticated={props.isAuthenticated} />
                } />

                <Route exact path="/location" render={
                    () => <Location handleLogout={props.handleLogout} isAuthenticated={props.isAuthenticated} />
                } />

                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter;