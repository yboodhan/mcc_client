import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from './pages/Home';
import ControlConsole from './other/ControlConsole';
import Astronauts from './pages/Astronauts';
import Location from './pages/Location';
import NotFound from './pages/NotFound'

// Renders relevant based on path and user prop
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