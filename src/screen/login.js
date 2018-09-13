import React, { Component } from 'react';

import {
    View,
    TextInput,
    TouchableHighlight,
    Text,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import * as configs from '../constants/config';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    postData = () => {
        return fetch(`${configs.server}/login`,{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.status == true) {
                this.props.navigation.navigate('ListReservationScene');
            }else{
                console.log(responseJson.message);
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return(
           <View style={configs.styles.container}>
                <View style={configs.styles.imageContainer}>
                <Image style={configs.styles.imageStyle} source={require('../images/background.jpg')} />
                </View>
                <View style={configs.styles.formContainer}>
                    <Text style={configs.styles.TextStyleClosed}>Closed</Text>
                    <TextInput style={configs.styles.roundedRectangle} onChangeText={(text) => this.setState({username: text})} placeholder="input username" />
                    <TextInput secureTextEntry={true} style={configs.styles.roundedRectangle} onChangeText={(text) => this.setState({password: text})} placeholder="input password" />
                    <TouchableHighlight style={configs.styles.buttonRoundRectangle} onPress={() => this.postData()}>
                        <Text style={configs.styles.textStyle}>Submit</Text>             
                    </TouchableHighlight>
                </View>
                <View style={configs.styles.textBottom}>
                    <Text>Don't have an account?<Text onPress={()=>this.props.navigation.navigate('RegisterScene')} style={configs.styles.textLink}>Register</Text></Text>
                </View>
           </View>
        )
    }
}

export default login;