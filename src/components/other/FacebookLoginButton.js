import React from 'react';

const FacebookLoginButton = props => {

    function handleFacebookSignIn(e) {
        console.log('Facebook login was clicked.')
        window.open(`${process.env.REACT_APP_SERVER_URL}/auth/facebook`, "_self");
    }

    return (
        <div>
            <button onClick={handleFacebookSignIn}>LOGIN WITH FACEBOOK</button>
        </div>
    )
}

export default FacebookLoginButton;