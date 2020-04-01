import React, { Component } from 'react';
import HomeSlider from './slider';

class Home extends Component {

    state = {
        home: ''
    }

    render() {
        return (
            <div>
                <HomeSlider/>
            </div>
        );
    }
}

export default Home;