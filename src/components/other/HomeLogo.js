import React from 'react';

// Styles
const styles = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25px'
};

const acronymStyles = {
    fontSize: '30px'
};

// Renders and adds animation to the logo on the homepage
const HomeLogo = props => {
    return (
        <div style={styles} className="animate__animated animate__flash text-center p-3">
            <span style={acronymStyles}>P</span>ryon <span style={acronymStyles}>M</span>ission <span style={acronymStyles}>C</span>ontrol <span style={acronymStyles}>C</span>enter
        </div>
    )
}

export default HomeLogo;