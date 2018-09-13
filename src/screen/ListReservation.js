import React, { Component } from 'react';
import { View, Text, FlatList,TouchableHighlight } from 'react-native';
import * as configs from '../constants/config';
import { Card } from 'react-native-elements';

class ListReservation extends Component {
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
        return fetch(`${configs.server}/list-kamar`)    
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

    renderItem = (item) => {
        return(
            <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailReservationScene',item.id)}>
                <Card 
                title={item.nama_kamar}
                image={{uri: item.foto_kamar}}
                ></Card>
            </TouchableHighlight>
        )
    }

    render() {
    
        return(
            <View style={configs.styles.containerListReservation}>
                 <FlatList 
                        data={this.state.dataSource}
                        keyExtractor={(item,index) => String((index))}
                        renderItem={({item}) => this.renderItem(item)}
                />
                 
            </View>
        )
    }
}

export default ListReservation;