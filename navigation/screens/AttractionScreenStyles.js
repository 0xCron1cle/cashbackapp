import { StyleSheet, Dimensions } from 'react-native';

const modalHeight = Dimensions.get('window').height - 800;

export default StyleSheet.create({

  maincontainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1C1D21',
  },

  smallheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 60,
    height: '100%',
    marginHorizontal: 15,

  },
  bigheader: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginVertical: 60,
    marginHorizontal: 15,
    zIndex: 1000
  },
  bigfooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    height: 65,
    width: 65,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical: -5,
  },
  companyinfo: {
    width: '100%',
    height: 235,
  },
  companylabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    marginVertical: 10
  },
  descriptionlabel: {
    textAlign: 'center',
    color: 'white',
    marginVertical: 10,
  },
  headline: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  headlinetext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  openinglabel: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  headlineactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  buttonlabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
  },
  groupordermodal: {
    height: 150,
    width: 200,
    backgroundColor: '#2e3038',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: '85%'

  },
  cancelbutton: {
    marginRight: 10,
    marginTop: 5,
    alignSelf: 'flex-end'
  },
  grouporderbutton: {
    height: 40,
    width: 125,
    backgroundColor: 'black',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  qrcodebutton: {
    height: 40,
    width: 140,
    backgroundColor: 'black',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  infobutton: {
    height: 40,
    width: 95,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 15,
    paddingHorizontal: 20,
    backgroundColor: '-rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infolabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  line: {
    height: 2,
    width: '100%',
    backgroundColor: 'gray',
  },
  dealsinfo: {
    width: '100%',
    height: 380,


  },
  deallabel: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  deal: {
    height: 235,
    width: 150,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  deallogo: {
    height: '100%',
    width: '100%',
    borderRadius: 20,

  },
  dealname: {
    fontSize: 14,
    color: 'white',
    marginVertical: 5,
    textAlign: 'center'
  },
  cashbackcontainer: {
    width: 120,
    height: 35,
    borderRadius: 5,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginBottom: 10,

  },
  cashbackpercentagelabel: {
    color: '#b8f3af',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,

  },
  dishesinfo: {
    width: '100%',
    height: 380,

  },
  dish: {
    height: 235,
    width: 150,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 10,

  },
  disheslabel: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  dishlogo: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  dishname: {
    fontSize: 14,
    color: 'white',
    marginVertical: 5,
    textAlign: 'center'
  },
  picturesinfo: {
    width: '100%',
    height: 300,

  },
  pictureslabel: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  picturescontainer: {
    width: 350,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 15
  },
  swipebuttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: -115,
    marginHorizontal: 10,
  },
  picture: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  locationinfo: {
    width: '100%',
    height: 300,

  },
  locationlabel: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  locationcontainer: {
    width: 350,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 5,

  },
  touchable: {
    width: '100%',
    height: modalHeight
  },
  modalContainer: {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
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
    marginVertical: 15,
  },
  locationcontainerModal: {
    height: '100%',
    width: '100%',
    borderRadius: 15
  },
  fowardbuttonContainer: {
    backgroundColor: 'black',
    height: '80%',
    width: '50%',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    
  },
  fowardbuttonlabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
    alignSelf: 'center',
    fontSize: 20,
  },
  
  
  


























});