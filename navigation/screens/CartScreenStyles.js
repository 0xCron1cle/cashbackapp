import { StyleSheet, Dimensions } from 'react-native';




export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1C1D21',
    },
    header: {
        width: '100%',
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        right: 160,
    },
    cartInfo: {
        borderRadius: 10,
        marginTop: 40
    },
    cartLogo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 10
    },
    mainInfo: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 20,
    },
    sideInfo: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 10,
        fontStyle: 'italic',
        width: '65%',
        alignSelf: 'center'
    },
    fowardshopContainer: {
        backgroundColor: 'black',
        width: 125,
        height: 45,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    fowardshopLabel: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    suggestedInfo: {
        marginTop: 125
    },
    line: {
        backgroundColor: 'white',
        height: 2,
        width: '7.5%',
        left: 20,
    },
    suggestedLabel: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        left: 20,
        marginTop: 20,
        fontSize: 15,
    },
    suggestedContainer: {
        width: 180,
        height: 175,
        borderRadius: 15,
        backgroundColor: '#25262f',
        marginTop: 30,
        left: 10,
        marginHorizontal: 10,



    },




});