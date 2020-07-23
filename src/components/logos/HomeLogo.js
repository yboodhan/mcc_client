import React from 'react';
import Typing from 'react-typing-animation';

const styles = {
    color: 'white',
    fontWeight: 'bold',
    opacity: '90%',
    fontSize: '22px'
};

const acronymStyles = {
    opacity: '100%',
    fontSize: '25px'
};

const HomeLogo = props => {
    return (
        <div style={styles}>
            <Typing speed={100}>
                <span style={acronymStyles}>P</span>yron <span style={acronymStyles}>M</span>ission <span style={acronymStyles}>C</span>ontrol <span style={acronymStyles}>C</span>enter
            </Typing>
        </div>
    )
}

export default HomeLogo;