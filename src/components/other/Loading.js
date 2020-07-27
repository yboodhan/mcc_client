import React from 'react';

// Components
import Loader from './Loader';

// Renders a loading page
const Loading = props => {
    return (
        <div className="loading">
            <Loader />
        </div>
    )
}

export default Loading;