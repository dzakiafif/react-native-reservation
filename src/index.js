import React,{ Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Root } from './nav';

class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <Root />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default index;