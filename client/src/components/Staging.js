import React, { Component } from 'react';
import axios from 'axios';

class Staging extends Component {
    async componentDidMount() {
        const access_token = window.sessionStorage.getItem('access-token');
        const staging_url = `http://uat.deliveright.com/api/orders?` +
            `client_id=staging_api&` +
            `client_secret=c96bd3280827405a987ad4cb445be573&`+
            `access_token=${access_token}&`+
            `page=1&`+
            `status=3`;

        const res = await axios.get(staging_url);
        // staging data
        const staging_arr = res.data.data;


    }

    render() {
        return (
            <div>
                Staging Page
            </div>
        );
    }

}

export default Staging;