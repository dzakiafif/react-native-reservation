import React, { PureComponent } from 'react';
import {View,StyleSheet,TouchableHighlight,InteractionManager} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

class BackButton extends PureComponent {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        InteractionManager.runAfterInteractions(() => {
            this.props.onPress();
        })
    }

    render() {
        return(
            <TouchableHighlight activeOpacity={0.5} underlayColor="transparent" onPress={() => this.onPress()} >
                <View style={styles.container}>
                    <Icons 
                    name="ios-arrow-back" 
                    size={28}
                    color={this.props.color ? this.props.color : '#FFFFFF'}
                    />
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
})

export default BackButton;