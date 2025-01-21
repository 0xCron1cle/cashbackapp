import { StyleSheet, Dimensions } from 'react-native';



export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1C1D21',

    },
    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
    },
    challengeContainer: {
        width: '90%',
        height: 75,
        borderRadius: 20,
        backgroundColor: '#25262f',
        alignSelf: 'center',
        marginTop: 10,

        paddingBottom: 10,
        shadowColor: "#000",
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    progressText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center',
        color: 'white',

    },
    challengeLabel: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center',
        color: 'white',
        width: '100%',
        alignSelf: 'center',
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    challengeTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic',
        left: 30,
        marginTop: 25  
    },
    
    



});
