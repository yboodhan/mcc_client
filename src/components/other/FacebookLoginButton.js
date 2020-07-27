import React from 'react';

// Renders facebook button for login
const FacebookLoginButton = props => {

    // Opens window to allow facebook user sign in
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