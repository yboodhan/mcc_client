import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from './Home';
import ControlConsole from './ControlConsole';
import Astronauts from './Astronauts';
import Location from './Location';
import NotFound from './NotFound'

const AppRouter = props => {

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
                        () => <Location isAuthenticated={props.isAuthenticated} />
                    } />

                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;