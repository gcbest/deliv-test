import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class Staging extends Component {
    // shorthand for declaring state
    state = { staging_data: [] };

    async componentDidMount() {
        const access_token = window.sessionStorage.getItem('access-token');
        const staging_url = `http://uat.deliveright.com/api/orders?` +
            `client_id=staging_api&` +
            `client_secret=c96bd3280827405a987ad4cb445be573&`+
            `access_token=${access_token}&`+
            `page=1&`+
            `status=3`;

        const res = await axios.get(staging_url);

        // staging data in an array
        const staging_arr = res.data.data;

        console.log(staging_arr);
        // converting data into row elements

        /**** {new Date(survey.dateSent).toLocaleDateString()} ****/
        const staging_elems = _.map(staging_arr, ({
            order_id, ref_order_number, created_at, payment: { status }, customer: { name }, type, delivery : { schedule_availability: { first_available_date } }
        }) => {
            return (
              <tr key={order_id}>
                  <td>{order_id}</td>
                  <td>{ref_order_number}</td>
                  <td>{new Date(created_at).toLocaleDateString()}</td>
                  <td>{status}</td>
                  <td>{name}</td>
                  <td>{type}</td>
                  <td>{first_available_date}</td>
              </tr>
            );
        });

        this.setState({ staging_data: staging_elems});
    }

    render() {
        return (
            <div>
                <table className="striped highlight">
                    <thead>
                    <tr>
                        <th><em>Order Number</em></th>
                        <th><em>PO Number</em></th>
                        <th><em>Created</em></th>
                        <th><em>Status</em></th>
                        <th><em>Customer Name</em></th>
                        <th><em>Items #</em></th>
                        <th><em>Scheduled</em></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.staging_data}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Staging;