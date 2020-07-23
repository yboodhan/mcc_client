import React from 'react';
import HomeLogo from '../logos/HomeLogo';
import LoginConsole from '../other/LoginConsole';

const Home = props => {
    return (
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 p-5 text-center">
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
    )
}

export default Home;