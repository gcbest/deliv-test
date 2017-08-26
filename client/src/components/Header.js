import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import logo from "./deliveright-logo.jpg";

const Header = withRouter(({ history }) => (
        <div className="row">
            <div className="col s12 m6">
                <Link to="/">
                    <img className="responsive-img" src={logo} alt="Deliveright"/>
                </Link>
            </div>
            <div className="col s12 m6">
                <h4 id="title">White Glove Delivery Service</h4>
            </div>
            <div className="col s12">
                <hr/>
            </div>
        </div>
    )
);

export default Header;