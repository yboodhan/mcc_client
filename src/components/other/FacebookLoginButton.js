import React from 'react';

const FacebookLoginButton = props => {

    function handleFacebookSignIn(e) {
        window.open(`${process.env.REACT_APP_SERVER_URL}/auth/facebook`, "_self");
    }

    return (
        <div>
            <button onClick={handleFacebookSignIn}>LOGIN WITH FACEBOOK</button>
        </div>
    )
}

export default FacebookLoginButton;