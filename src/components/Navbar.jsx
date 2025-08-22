import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({showGetStarted}) => {
    return (
        <div className="navbar">
            <div/>
            <Link to="/"><h1>Save Todo</h1></Link>
            { showGetStarted && <Link to="sign-up"><button>Get Started</button></Link> }
        </div>
    );
};

export default Navbar;