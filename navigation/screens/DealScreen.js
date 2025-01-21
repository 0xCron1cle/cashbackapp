import styles from './DealScreenStyles.js';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useRef, useState, useEffect, useMemo } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import { View, Image, TouchableOpacity, Text, ImageBackground, Share, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import IconBadge from 'react-native-icon-badge';




export default function DealScreen({ route, navigation }) {

  const [activeButton, setActiveButton] = useState(null);
  const [filteredPrices, setFilteredPrices] = useState([]);

  const handleButtonPress = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
      setFilteredPrices([]); // Alles anzeigen
    } else {
      setActiveButton(buttonName);
      const filtered = priceData.filter(item => item.filter === buttonName);
      setFilteredPrices(filtered); // Gefilterte Preise setzen
    }
  };





  const priceData = [
    { type: 'Normal', price: '11,50 €', seat: 'Parkett', filter: 'filter' },
    { type: 'Normal', price: '10,50 €', seat: 'Parkett vorne', filter: 'filter' },
    { type: 'Normal', price: '13,50 €', seat: 'Loge vor 16:00 Uhr', filter: 'filter' },
    { type: 'Normal', price: '13,50 €', seat: 'Loge ab 16:00 Uhr', filter: 'filter' },
    { type: 'Schüler / Studenten', price: '10,00 €', seat: 'Parkett', filter: 'filter_1', info: 'Bitte zeigen Sie bei Einlass Ihren Ausweis vor.' },
    { type: 'Schüler / Studenten', price: '9,00 €', seat: 'Parkett vorne', filter: 'filter_1', info: 'Bitte zeigen Sie bei Einlass Ihren Ausweis vor.' },
    { type: 'Schüler / Studenten', price: '12,00 €', seat: 'Loge vor 16:00 Uhr', filter: 'filter_1', info: 'Bitte zeigen Sie bei Einlass Ihren Ausweis vor.' },
    { type: 'Schüler / Studenten', price: '13,50 €', seat: 'Loge ab 16:00 Uhr', filter: 'filter_1', info: 'Bitte zeigen Sie bei Einlass Ihren Ausweis vor.' },
    { type: 'Kinder', price: '7,50 €', seat: 'Parkett', filter: 'filter_3', info: 'Kinder bis einschl. 14 Jahre.' },
    { type: 'Kinder', price: '7,00 €', seat: 'Parkett vorne', filter: 'filter_3', info: 'Kinder bis einschl. 14 Jahre.' },
    { type: 'Kinder', price: '9,50 €', seat: 'Loge vor 16:00 Uhr', filter: 'filter_3', info: 'Kinder bis einschl. 14 Jahre.' },
    { type: 'Kinder', price: '11,00 €', seat: 'Loge ab 16:00 Uhr', filter: 'filter_3', info: 'Kinder bis einschl. 14 Jahre.' },
    { type: 'Familientarif', price: '7,50 €', seat: 'Parkett', filter: 'filter_2', info: 'Gilt täglich vor 16:30 Uhr (bis FSK 12)', sideinfo: 'Begleitende Erwachsene zahlen den Kinderpreis' },
    { type: 'Familientarif', price: '7,00 €', seat: 'Parkett vorne', filter: 'filter_2', info: 'Gilt täglich vor 16:30 Uhr (bis FSK 12)', sideinfo: 'Begleitende Erwachsene zahlen den Kinderpreis' },
    { type: 'Familientarif', price: '9,50 €', seat: 'Loge vor 16:00 Uhr', filter: 'filter_2', info: 'Gilt täglich vor 16:30 Uhr (bis FSK 12)', sideinfo: 'Begleitende Erwachsene zahlen den Kinderpreis' },
    { type: 'Familientarif', price: '11,00 €', seat: 'Loge ab 16:00 Uhr', filter: 'filter_2', info: 'Gilt täglich vor 16:30 Uhr (bis FSK 12)', sideinfo: 'Begleitende Erwachsene zahlen den Kinderpreis' },
  ];

  const { imageUrl, title, text } = route.params;

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hier ist ein interessanter Deal zu einen Film: https://save-daily.app/share/deddad4c-7267-4f1b-b05b-fa9c0684e72d ', // Dein zu teilender Link
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Geteilt über:', result.activityType);
        } else {
          console.log('Link erfolgreich geteilt!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Teilen abgebrochen');
      }
    } catch (error) {
      console.error('Fehler beim Teilen:', error.message);
    }
  };

  const [counter, setCounter] = useState(0);

  const handleCart = () => {
    setanimateModal(true);
    setCounter(counter + 1);
    Toast.show({
      type: 'info',
      text1: 'Added to Cart 🛒',
      text2: 'View your cart',
      visibilityTime: 1750

    });
  };

  
  


  
  


  let [ShowComment, setShowModelComment] = useState(false);
  let [animateModal, setanimateModal] = useState(false);


  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <ImageBackground style={styles.deallogo} source={{ uri: imageUrl }}>
          <View style={styles.headerbuttons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90 }}>
                <View style={{ alignSelf: 'center', marginVertical: 9 }}>
                  <Octicons name="chevron-left" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90, marginHorizontal: 10, marginLeft: 230 }}>
                <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                <View style={{ alignSelf: 'center', marginVertical: 10, }}>
                  <MaterialCommunityIcons name="shopping-outline" size={24} color="white" />
                  {counter > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{counter}</Text>
                    </View>
                  )}
                </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShare}>
              <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90 }}>
                <View style={{ alignSelf: 'center', marginVertical: 9 }}>
                  <Octicons name="share" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Toast />
      </View>
      <ScrollView>
        <View style={styles.infosection}>
          <Text style={styles.movietitle}>{title}</Text>
          <View style={styles.headline}>
            <View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginTop: 17, paddingLeft: 30 }} /><View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginTop: 12, marginTop: 17 }} />
            <Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> 5,0 (155) </Text><View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginTop: 12, marginTop: 17 }} />
            <Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> 15-20 € per Order </Text><View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginTop: 12, marginTop: 17 }} /><View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginTop: 17, paddingRight: 30 }} />
          </View>
          <Text style={styles.descriptionlabel}>{text}</Text>
          <View style={styles.headlineactions}>
            <TouchableOpacity onPress={() => navigation.navigate('GroupOrderScreen')}>
              <View style={styles.grouporderbutton}>
                <MaterialCommunityIcons name="account-multiple-plus" size={20} color="white" /><Text style={styles.buttonlabel}> Group order</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
              <View style={styles.qrcodebutton}>
                <MaterialCommunityIcons name="qrcode-scan" size={20} color="white" /><Text style={styles.buttonlabel}> Show QR-Code</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
        </View>
        <View style={styles.priceinfo}>
          <ScrollView horizontal={true}>
            <View style={styles.filterSection}>
              <TouchableOpacity style={activeButton === 'filter'} onPress={() => handleButtonPress('filter')}>
                <View style={[styles.filterContainer, { backgroundColor: activeButton === 'filter' ? 'white' : '#2e3038' }]}>
                  <View style={styles.filterRow}>
                    <Text style={[styles.filterLabel, { color: activeButton === 'filter' ? 'black' : 'white' }]}>Normal</Text>
                    <MaterialIcons name={activeButton === 'filter' ? 'keyboard-arrow-down' : 'keyboard-arrow-right'} size={24} color={activeButton === 'filter' ? 'black' : 'white'} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={activeButton === 'filter'} onPress={() => handleButtonPress('filter_1')}>
                <View style={[styles.filterContainer, { backgroundColor: activeButton === 'filter_1' ? 'white' : '#2e3038' }]}>
                  <View style={styles.filterRow}>
                    <Text style={[styles.filterLabel, { color: activeButton === 'filter_1' ? 'black' : 'white' }]}>Students</Text>
                    <MaterialIcons name={activeButton === 'filter_1' ? 'keyboard-arrow-down' : 'keyboard-arrow-right'} size={24} color={activeButton === 'filter_1' ? 'black' : 'white'} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={activeButton === 'filter'} onPress={() => handleButtonPress('filter_2')}>
                <View style={[styles.filterContainer, { backgroundColor: activeButton === 'filter_2' ? 'white' : '#2e3038' }]}>
                  <View style={styles.filterRow}>
                    <Text style={[styles.filterLabel, { color: activeButton === 'filter_2' ? 'black' : 'white' }]}>Family</Text>
                    <MaterialIcons name={activeButton === 'filter_2' ? 'keyboard-arrow-down' : 'keyboard-arrow-right'} size={24} color={activeButton === 'filter_2' ? 'black' : 'white'} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={activeButton === 'filter'} onPress={() => handleButtonPress('filter_3')}>
                <View style={[styles.filterContainer, { backgroundColor: activeButton === 'filter_3' ? 'white' : '#2e3038' }]}>
                  <View style={styles.filterRow}>
                    <Text style={[styles.filterLabel, { color: activeButton === 'filter_3' ? 'black' : 'white' }]}>Kids</Text>
                    <MaterialIcons name={activeButton === 'filter_3' ? 'keyboard-arrow-down' : 'keyboard-arrow-right'} size={24} color={activeButton === 'filter_3' ? 'black' : 'white'} />
                  </View>
                </View>
              </TouchableOpacity>

            </View>
          </ScrollView>
          <View style={styles.line}></View>
          <View>
            {filteredPrices.length > 0
              ? filteredPrices.map((item, index) => (
                item.containerType === 'Small' ? (
                  <View key={index}>
                    <TouchableOpacity onPress={() => setShowModelComment(true)} >
                      <View style={styles.priceContainerMedium}>
                        <View style={styles.row}>
                          <Text style={styles.priceType}>{item.type}</Text>
                          <TouchableOpacity onPress={handleCart}>
                            <View style={styles.addbutton}>
                              <Octicons name="plus-circle" size={28} color="white" />
                            </View>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.priceLabel}>{item.price}</Text>
                        <Text style={styles.priceSeat}>{item.seat}</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                  </View>
                ) : (
                  <View key={index}>
                    <TouchableOpacity onPress={() => setShowModelComment(true)} >
                      <View style={styles.priceContainerMedium}>
                        <View style={styles.row}>
                          <Text style={styles.priceType}>{item.type}</Text>
                          <TouchableOpacity onPress={handleCart}>
                            <View style={styles.addbutton}>
                              <Octicons name="plus-circle" size={28} color="white" />
                            </View>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.priceLabel}>{item.price}</Text>
                        <Text style={styles.priceSeat}>{item.seat}</Text>
                        {item.info && <Text style={styles.priceInfo}>{item.info}</Text>}
                      </View>
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                  </View>
                )
              ))
              : priceData.map((item, index) => (
                item.containerType === 'Medium' ? (
                  <View key={index}>
                    <TouchableOpacity onPress={() => setShowModelComment(true)} >
                      <View style={styles.priceContainerMedium}>
                        <View style={styles.row}>
                          <Text style={styles.priceType}>{item.type}</Text>
                          <TouchableOpacity onPress={handleCart}>
                            <View style={styles.addbutton}>
                              <Octicons name="plus-circle" size={28} color="white" />
                            </View>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.priceLabel}>{item.price}</Text>
                        <Text style={styles.priceSeat}>{item.seat}</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                  </View>
                ) : (
                  <View key={index}>
                    <TouchableOpacity onPress={() => setShowModelComment(true)} >
                      <View style={styles.priceContainerMedium}>
                        <View style={styles.row}>
                          <Text style={styles.priceType}>{item.type}</Text>
                          <TouchableOpacity onPress={handleCart}>
                            <View style={styles.addbutton}>
                              <Octicons name="plus-circle" size={28} color="white" />
                            </View>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.priceLabel}>{item.price}</Text>
                        <Text style={styles.priceSeat}>{item.seat}</Text>
                        {item.info && <Text style={styles.priceInfo}>{item.info}</Text>}
                        {item.sideinfo && <Text style={styles.priceInfo}>{item.sideinfo}</Text>}
                      </View>
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                  </View>
                )
              ))}
          </View>
        </View>
      </ScrollView>
      <SwipeUpDownModal
        modalVisible={ShowComment}
        PressToanimate={animateModal}
        duration={375}
        fade={true}
        //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
        ContentModal={
          <View>
            <TouchableWithoutFeedback onPress={() => setanimateModal(true)}>
              <View style={styles.touchable}></View>
            </TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <View style={styles.cashbackboostInfoContainer}>
                <View style={styles.line} />
                <View style={styles.rowModal}>
                  <Text style={styles.cashbacktitle}>Cashback Boost</Text>
                  <Text style={styles.cashbackEssential}>Choose Your Boost</Text>
                </View>
              </View>
              <View style={styles.line} />
              <View style={styles.boostRow}>
                <TouchableOpacity style={activeButton === 'boost'} onPress={() => handleButtonPress('boost')}>
                  <View style={[styles.boostContainer, { backgroundColor: activeButton === 'boost' ? 'black' : '#2e3038' }]}>
                    <View style={{ marginTop: 5 }}>
                      <Text style={styles.boostLabel}>Leave</Text>
                      <Text style={styles.boostLabel}>Review</Text>
                    </View>
                    <View style={styles.mediumCircle}>
                      <View style={{ alignSelf: 'center', marginTop: 11 }}>
                        <MaterialCommunityIcons name="google" size={23} color='white' />
                      </View>
                    </View>
                    <Text style={styles.boostDisscount}>Save 10%</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton === 'boost'} onPress={() => handleButtonPress('boost_1')}>
                  <View style={[styles.boostContainer, { backgroundColor: activeButton === 'boost_1' ? 'black' : '#2e3038' }]}>
                    <View style={{ marginTop: 5 }}>
                      <Text style={styles.boostLabel}>Leave</Text>
                      <Text style={styles.boostLabel}>Follow</Text>
                    </View>
                    <View style={styles.mediumCircle}>
                      <View style={{ alignSelf: 'center', marginTop: 10 }}>
                        <MaterialCommunityIcons name="instagram" size={25} color="white" />
                      </View>
                    </View>
                    <Text style={styles.boostDisscount}>Save 5%</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton === 'boost'} onPress={() => handleButtonPress('boost_2')}>
                  <View style={[styles.boostContainer, { backgroundColor: activeButton === 'boost_2' ? 'black' : '#2e3038' }]}>
                    <View style={{ marginTop: 5 }}>
                      <Text style={styles.boostLabel}>Leave</Text>
                      <Text style={styles.boostLabel}>Story</Text>
                    </View>
                    <View style={styles.mediumCircle}>
                      <View style={{ alignSelf: 'center', marginTop: 10 }}>
                        <MaterialCommunityIcons name="instagram" size={25} color="white" />
                      </View>
                    </View>
                    <Text style={styles.boostDisscount}>Save 15%</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton === 'boost'} onPress={() => handleButtonPress('boost_3')}>
                  <View style={[styles.boostContainer, { backgroundColor: activeButton === 'boost_3' ? 'black' : '#2e3038' }]}>
                    <View style={{ marginTop: 5 }}>
                      <Text style={styles.boostLabel}>Take</Text>
                      <Text style={styles.boostLabel}>Photos</Text>
                    </View>
                    <View style={styles.mediumCircle}>
                      <View style={{ alignSelf: 'center', marginTop: 10 }}>
                        <MaterialCommunityIcons name="camera-outline" size={25} color="white" />
                      </View>
                    </View>
                    <Text style={styles.boostDisscount}>Save 10%</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.savingContainer}>
                <Text style={styles.savingTitle}>Savings</Text>
                <Text style={styles.savingLabel}>You're saving 35%</Text>
                <View style={styles.rowModal}>
                  <Text style={styles.priceBoostLabel}>Regular price:</Text>
                  <Text style={styles.regularPrice}>11,50 €</Text>
                </View>
                <View style={styles.rowModal}>
                  <Text style={styles.priceBoostLabel}>Total price:</Text>
                  <Text style={styles.totalPrice}>7,50 €</Text>
                </View>
                <Text style={styles.totalpriceLabel}>Total price incl. VAT:</Text>
                <Text style={styles.totalpriceVat}>7,50 €</Text>

                <TouchableOpacity onPress={handleCart}>
                  <View style={styles.addCartContainer}>
                    <View style={styles.cartRow}>
                      <MaterialCommunityIcons name="cart-variant" size={30} color="white" />
                      <Text style={styles.addCartLabel}>Add to Cart</Text>
                    </View>
                  </View>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        }
        HeaderContent={
          <View style={{ width: '100%' }}>
            <View style={styles.handleBar} />
            <Text style={styles.orderTitle}>Normal Parquet</Text>
            <Text style={styles.orderPrice}>11,50 €</Text>
            <Text style={styles.orderInfo}>
              Genieße das Geschehen hautnah – ideal für Filmfans.
            </Text>
          </View>
        }
        HeaderStyle={styles.modalHeader}
        onClose={() => {
          setShowModelComment(false);
          setanimateModal(false);
        }}
      />
    </View>
  );
}