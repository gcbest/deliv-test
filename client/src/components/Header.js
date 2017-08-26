import React from 'react';
import { withRouter } from 'react-router-dom';

const auth = require('../utils/auth');

const Header = withRouter(({ history }) => (
    auth.isAuthenticated ? (
        <p>
            Welcome! <button onClick={() => {
            auth.signout(() => history.push('/'))
        }}>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
));

export default Header;