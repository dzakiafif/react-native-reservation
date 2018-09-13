import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native';

import * as configs from '../constants/config';

class HeaderTitle extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { title, headerLeftRight } = this.props

        const width = ( headerLeftRight ) ? configs.dimension.width - 100 : configs.dimension.width

        const style = {
            width: width,
            height: 50,
            alignSelf: 'flex-start',
            alignItems: 'center',
            justifyContent: 'center'
        }

        return (
            <View style={style}>
                <Text style={{color: '#000000',fontSize: 16}}>{title}</Text>
            </View>
        )
    }

}

export default HeaderTitle;