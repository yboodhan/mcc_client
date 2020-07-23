import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const FacebookLoginButton = props => {

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <div>
            <FacebookLogin
                appId="614256389223586"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                render={renderProps => (
                    <button onClick={renderProps.onClick}>LOGIN WITH FACEBOOK</button>
                )} />
        </div>
    )
}

export default FacebookLoginButton;