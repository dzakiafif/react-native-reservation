import React from 'react';
import Splashscreen from './Splashscreen';
import Login from './screen/login';
import Register from './screen/register';
import HeaderTitle from './components/HeaderTitle';
import BackButton from './components/BackButton';
import ListReservation from './screen/ListReservation'; 
import DetailReservation from './screen/DetailReservation';  
import { createStackNavigator } from 'react-navigation';
import { color } from './constants/config';

export const Root = createStackNavigator({
    Start: {
        screen: Splashscreen,
        navigationOptions: {
            header: null
        }
    },
    LoginScene: {
        screen: Login,
        navigationOptions: {
            header: null
        } 
    },
    RegisterScene: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    ListReservationScene: {
        screen: ListReservation,
        navigationOptions: {
            headerTitle: (
                <HeaderTitle title="DAFTAR KAMAR" headerLeftRight={true} />
            ),
            headerLeft: (
                <BackButton onPress={() => navigation.goBack()} color="#000000" />
            )
        }
    },
    DetailReservationScene: {
        screen: DetailReservation,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (
                <HeaderTitle title="DETAIL KAMAR" headerLeftRight={true} />
            ),
            headerLeft: (
                <BackButton onPress={() => navigation.goBack()} color="#000000" />
            )
        })
    }
},{
    initialRouteName: 'Start'
})