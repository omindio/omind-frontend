import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './styles.scss';

class Home extends Component {
    render () {
        return (
            <div>
                <Helmet>
                    <title>Omind - Home</title>
                </Helmet>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;
