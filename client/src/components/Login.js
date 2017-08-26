import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const auth = require('../utils/auth');

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchToken = this.fetchToken.bind(this);
    }

    state = {
        redirectToReferrer: false
    };

    login = () => {
        auth.authenticate(() => {
            this.setState({ redirectToReferrer: true })
        })
    };


    async fetchToken(user_name, password) {

        try {
            // make API login request
            const res = await axios.post(
                'http://uat.deliveright.com/api/user/login', {
                    "user_name": user_name,
                    "password": password,
                    "client_id": "staging_api",
                    "client_secret": "c96bd3280827405a987ad4cb445be573"
                });

            // storing access token in session storage
            window.sessionStorage.setItem('access-token', res.data.data.access_token);

            this.login();

            // // redirect to the staging page
            // this.props.history.push('/staging');
        }
        catch(error) {
            alert('Invalid username or password');
        }

    }

    async handleSubmit(event) {
        // prevent form submission
        event.preventDefault();

        // get username and password from form
        const user_name = event.target.user_name.value;
        const password = event.target.password.value;

        this.fetchToken(user_name, password);
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/staging' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div className="row">
                Login
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="input-field col s12">
                        <input placeholder="Username" name="user_name" id="user_name" type="text" className="validate"/>
                    </div>
                    <div className="input-field col s12">
                        <input placeholder="Password" name="password" id="password" type="password" className="validate"/>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Login;