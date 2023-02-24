import React from 'react';
import './Navbar.css';
function Navbar() {
    return (
        <nav>
            <ul  className="col-6">

                <button className="glow-on-hover" type="button" href="#">Home</button>
                <button className="glow-on-hover" type="button" href="#">About</button>
                <button className="glow-on-hover" type="button" href="#">Contact</button>

            </ul>
        </nav>
    );
}

export default Navbar;
