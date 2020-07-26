import React from 'react';

import HomeLogo from '../other/HomeLogo';
import LoginConsole from '../other/LoginConsole';

const Login = props => {

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