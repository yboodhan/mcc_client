import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Astronauts from './Astronauts';
import Location from './Location';
import Home from './Home';
import NotFound from './NotFound'

const AppRouter = props => {

    return (
        <div className="screen">
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
        </div>
    )
}

export default AppRouter;