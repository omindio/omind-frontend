import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './styles.scss';

class Contact extends Component {
    render () {
        return (
            <div>
                <Helmet>
                    <title>Omind - Contact</title>
                </Helmet>
                <h1>Contact</h1>
            </div>
        );
    }
}

export default Contact;
