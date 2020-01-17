import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className='container'>
                    <div className="row">
                        <div className="three columns">
                            <Link to="/" className="logo">
                                <span></span>
                            </Link>
                        </div>
                        <div className="nine columns">
                            <nav>
                                <Link to="/teams">Teams</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;