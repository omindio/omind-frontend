import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './styles.scss';

class Profile extends Component {
    render () {
        return (
            <div>
                <Helmet>
                    <title>Omind - Profile</title>
                </Helmet>
                <h1>Profile</h1>
            </div>
        );
    }
}

export default Profile;
