import { StyleSheet, Dimensions } from 'react-native';


const modalHeight = Dimensions.get('window').height / 2.5;


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1C1D21',
    padding: 10


  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  content: {
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,

  },
  contentbox: {
    flex: 1,
    width: '100%',
    borderRadius: 35,
  },
  attraction: {
    width: '95%',
    height: 200,
    borderRadius: 50,
    backgroundColor: '#25262f',
    alignSelf: 'center',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {

    fontSize: 40,
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,



  },
  searchbarbox: {
    width: '95%',
    height: 50,
    borderRadius: 27,
    backgroundColor: '#25262f',
    alignSelf: 'center',
    marginBottom: 20,
    shadowColor: "#000",
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',


    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,


  },
  searchbar: {
    flex: 1,
    height: '100%',
    color: 'white',
    paddingHorizontal: 10,
    fontSize: 20,
    fontFamily: 'Verdana',
    fontWeight: 'medium'

  },

  filtertitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  touchable: {
    width: '100%',
    height: modalHeight
  },
  modalContainer: {


    paddingTop: 30,
    width: "100%",
    height: "100%",
    backgroundColor: '#1C1D22',
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    alignItems: 'center',
    borderRadius: 30,
  },
  modalHeader: {
    marginTop: modalHeight + 50,


  },

  handleBar: {
    width: 50,
    height: 5,
    backgroundColor: "gray",
    borderRadius: 3,
    alignSelf: "center",
    marginVertical: 20,
  },
  filterContainer: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
  },


  submitButton: {
    backgroundColor: "#2e3038",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '90%',
    paddingHorizontal: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,


  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
    alignSelf: 'center'


  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
  categoryButton: {
    backgroundColor: "#2e3038",
    padding: 10,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '28%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 90,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  activeButton: {
    backgroundColor: "black",
  },
  activeCategoryButton: {
    backgroundColor: 'black',
  },
  sliderContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column'

  },
  slider: {
    width: Dimensions.get('window').width - 35,
  },
  sliderLabeldistance: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 10



  },
  sliderLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 10

  },


  modalFilterEuro: {
    height: 65,
    width: '100%',
    borderRadius: 10,
    shadowColor: "#000",
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#2e3038',
    gap: 5,
    display: 'flex',
    marginTop: 30,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,


  },
  eurlabel: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  eurosign: {
    height: '70%',
    width: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'


  },
  containerContent: {
    flex: 1,
    marginTop: 40
  },
  containerHeader: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#F1F1F1',
  },

  Modal: {
    backgroundColor: '#005252',
    marginTop: 0,
  },
  dropdownItemTxtStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    marginVertical: 5,

    fontSize: 16,

  },
  dropdownMenuStyle: {
    backgroundColor: '#1C1D22',
    borderRadius: 20,
    width: '50%',
    height: '30%',
    display: 'flex',
    marginHorizontal: -160,
    marginVertical: 20,
    flexDirection: 'column',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  dropdownItemIconStyle: {
    color: 'white',
    fontSize: 22,
    ichWarHier: 1
  },
  bigLogo: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  attractionLogo: {
    height: 60,
    width: 60,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 100,

    marginVertical: -80,

  },
  attractioncontainer: {
    width: '100%',
    height: 355,
    backgroundColor: '#25262f',
    borderRadius: 30,
    marginTop: 10,
  },
  attractionimage: {
    width: '95%',
    height: 200,
    borderRadius: 50,
    backgroundColor: '#25262f',
    alignSelf: 'center',
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,


  },
  bigLogo: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  attractionLogo: {
    height: 60,
    width: 60,

    marginHorizontal: 20,
    borderRadius: 100,
    marginVertical: -80,
  },
  attractionlabel: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  dealcontainer: {
    backgroundColor: 'black',
    height: 70,
    width: 70,
    borderRadius: 50

  },
  dealslabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
    color: '#b8f3af',
   
  },
  headline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: '10%',

  },
  headlineinfos: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rating: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',

  },
  attractioninput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: -80,
    marginHorizontal: 10,


  },
  attractionqrcode: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 45,
    height: 45,
    backgroundColor: 'black',
    borderRadius: 10,
    marginHorizontal: 10
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 2
  },
  headlinetext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  openinghoursclosed: {
    color: '#ff4f42',
    fontSize: 18,
    fontWeight: 'bold'
  },
  openinghoursopen: {
    color: '#75f564',
    fontSize: 18,
    fontWeight: 'bold'
  },
  twelvePointBurst: {},
  twelvePointBurstMain: {
    width: 65,
    height: 65,
    backgroundColor: "black",
    
  },
  twelvePointBurst30: {
    width: 65,
    height: 65,
    position: "absolute",
    backgroundColor: "black",
    top: 0,
    right: 0,
    transform: [{ rotate: "30deg" }],
  },
  twelvePointBurst60: {
    width: 65,
    height: 65,
    position: "absolute",
    backgroundColor: "black",
    top: 0,
    right: 0,
    transform: [{ rotate: "60deg" }],
  },






});
