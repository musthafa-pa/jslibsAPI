import React from 'react';
import logo from './resources/images/logo.png';
import './resources/css/style.css';

const Navbar = (props) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <a class="navbar-brand" href="#">
                    <img src={require('./resources/images/logo.png')} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
               </a>
                <a class="navbar-brand" href="#">JSCloudAPI</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;