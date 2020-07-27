import React from 'react';

// Renders a loader with a spinner and loading text
const Loader = props => {
    return (
        <div>
            <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="text-light">Loading...</div>
        </div>
    )
}

export default Loader;