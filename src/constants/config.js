import { StyleSheet,Dimensions } from 'react-native';

export const server = 'http://192.168.43.64:8000';

export const dimension = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export const color = {
    font: {
        primary: '#ffffff',
        greenFont: '#08c857',
    },
    themes: {
        blueColor: '#0d84d6'
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.themes.blueColor,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    imageStyle: {
        flex:1,
        resizeMode: 'cover'
    },
    formContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    roundedRectangle: {
        width: 320,
        height: 50,
        backgroundColor: color.font.primary
    },
    textStyle: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginLeft: 133, 
        marginRight: 133,
        marginTop: 17, 
        marginBottom: 17,
        color: color.font.primary
    },
    buttonRoundRectangle: {
        backgroundColor: color.font.greenFont,
        width: 320,
        height: 50,
        marginTop: 11
    },
    textBottom: {
       marginTop: 200,  
       justifyContent: 'center',
       alignItems: 'center'
    },
    textLink: {
        color: color.font.primary
    },
    TextStyleClosed: {
        justifyContent: 'center',
        color: color.font.primary,
        fontFamily: 'Bello - Words Body',
        fontSize: 75,
        fontWeight: '400',
        backgroundColor: color.themes.blueColor,
        alignItems: 'center',
        marginLeft: 45,
        marginBottom: 65
    },
    containerListReservation: {
        flex: 1
    },
    emptyViewStyle: {
        justifyContent: 'center',
        textAlign: 'center'
    }
});