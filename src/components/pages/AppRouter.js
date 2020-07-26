import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Astronauts from './Astronauts';
import Location from './Location';
import Home from './Home';
import NotFound from './NotFound'
import ControlConsole from './ControlConsole';

const AppRouter = props => {
console.log(props.isAuthenticated)
    return (
        <div className="screen">
            <Router>
                {
                    props.user ?
                        <ControlConsole handleLogout={props.handleLogout} />
                        :
                        <></>
                }

                <Switch>
                    <Route exact path="/" render={
                        () => <Home handleAuth={props.handleAuth} user={props.user} isAuthenticated={props.isAuthenticated} />
                    } />

                    <Route exact path="/astronauts" render={
                        () => <Astronauts isAuthenticated={props.isAuthenticated} />
                    } />

                    <Route exact path="/location" render={
                        () => <Location  isAuthenticated={props.isAuthenticated} />
                    } />

                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;