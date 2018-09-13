import React, { Component } from 'react';

import {
    View,
    Image,
    Text
}from 'react-native';
import * as configs from './constants/config';

class Splashscreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('LoginScene')
        },3000)
    }

    render() {
        return(
            <View style={configs.styles.container}>
                <View style={configs.styles.imageContainer}>
                    <Image style={configs.styles.imageStyle} source={require('./images/background.jpg')} />
                </View>
                <View style={configs.styles.formContainer}>
                    <Text style={configs.styles.TextStyleClosed}>Closed</Text>
                </View>
            </View>
        )
    }
}

export default Splashscreen;