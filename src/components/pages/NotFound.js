import React from 'react';

// Renders "not found" page for invalid paths
const NotFound = props => {
    return (
        <div className="screen-content text-danger">
            ERROR: 404 <br/>
            THIS PAGE CANNOT BE FOUND. <br/>
            PLEASE NAVIGATE <a href="/">BACK TO THE MAIN PAGE.</a>
        </div>
    )
}

export default NotFound;