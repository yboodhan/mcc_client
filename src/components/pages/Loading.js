import React from 'react'

const IsLoading = props => {
    return (
        <div className="loading">
            <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
            </div>

            <div className="text-light">Loading...</div>
        </div>
    )
}

export default IsLoading;