import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as configs from '../constants/config';
import { Card } from 'react-native-elements';

class DetailReservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const item = this.props.navigation.state.params;

        return fetch(`${configs.server}/detail-kamar/${item}`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: responseJson.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Card
                image={{uri: this.state.dataSource.foto_kamar}}
                >
                    <Text>Nama kamar : {this.state.dataSource.nama_kamar}</Text>
                    <Text>Harga Kamar : {this.state.dataSource.harga}}</Text>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default DetailReservation;