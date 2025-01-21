import Octicons from '@expo/vector-icons/Octicons';
import Foundation from '@expo/vector-icons/Foundation';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import MapView, { Marker } from 'react-native-maps';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useRef, useState, useEffect, useMemo } from "react";
import LottieView from 'lottie-react-native';
import { Animated, ActivityIndicator, Modal, Share, Platform, Linking, StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity, Image, ImageBackground, FlatList, TouchableWithoutFeedback } from 'react-native';
import styles from './AttractionScreenStyles.js';






export default function AttractionScreen({ navigation }) {



  const initialLocation = { latitude: 52.38060959652478, longitude: 9.733190715040836, latitudeDelta: 0.01, longitudeDelta: 0.01 };
  const [loading, setLoading] = useState(false);
  const handleLocation = async () => {
    try {
      setLoading(true); // Ladeanzeige starten
      const url = Platform.select({
        ios: 'maps://?daddr=52.38060959652478,9.733190715040836(Astor Grand Cinema)&dirflg=d',
        android: 'google.navigation:q=52.38060959652478,9.733190715040836(Astor+Grand+Cinema)',
        default: 'https://www.google.com/maps/dir/?api=1&destination=Astor+Grand+Cinema,52.38060959652478,9.733190715040836&travelmode=driving',
      });
      if (url) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error('Failed to open URL:', error);
    } finally {
      setLoading(false); // Ladeanzeige beenden
    }
  };
  const Header_Max_Height = 240;
  const Header_Min_Height = 120;
  const Scroll_Distance = Header_Max_Height - Header_Min_Height;

  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const images = [
    {
      "id": "1",
      "imageUrl": "https://cdn.premiumkino.de/cinema/5806/8d7ced6680d95368c250b7c7aae425b1_w1200.jpg"
    },
    {
      "id": "2",
      "imageUrl": "https://cloudfront-eu-central-1.images.arcpublishing.com/madsack/K424EJVNQP3GCQ7VAONZMUN54Q.jpg"
    },

    {
      "id": "3",
      "imageUrl": "https://heyhannover.de/wp-content/uploads/2015/10/astor-kino-foyer.jpg"
    },
    {
      "id": "4",
      "imageUrl": "https://cdn.premiumkino.de/common/5179/361528fad8a55c131a3cbf74fc3c4de7_w1200.jpg"
    },
    {
      "id": "5",
      "imageUrl": "https://s3.eu-central-1.amazonaws.com/rausgegangen/aw45IriQS2SdNoVI6HsD_AH2_1841.jpg"
    },
    {
      "id": "6",
      "imageUrl": "https://cdn.premiumkino.de/common/9264/8bbffbc899cbcfb67db04e0f0caf59b5_w1200.jpg"
    },

  ]

  const moviedeals = [
    {
      id: 1,
      name: 'Deadpool & Wolverine',
      discount: '20 %',
      dealimageUrl: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/42520950008679DF5FF60A491893BCEE838804223828C2D11863D1C93F0C7ED8/scale?width=1200&aspectRatio=1.78&format=webp',
      movieimageUrl: 'https://cdn.premiumkino.de/movie/2959/86e01c42103e214d391595bf21a94f18_w300.jpg',
      description: "Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat."

    },
    {
      id: 2,
      name: 'Der wilde Roboter',
      dealimageUrl: 'https://cdn.premiumkino.de/movie/2829/5d05c43fba1b9367322e186c407cb19f_w1200.jpg',
      movieimageUrl: 'https://cdn.premiumkino.de/movie/7907/ca1aad904ce135e886c120bc2a04dd0f_w300.jpg',
      discount: '35 %',
      description: "After a shipwreck, an intelligent robot named Roz is stranded on an uninhabited island. To survive in the harsh environment, Roz befriends the island's animals and takes care of an orphaned baby goose."
    },
    {
      id: 3,
      name: 'Sonic the Hedgehog 3',
      dealimageUrl: 'https://cdn.premiumkino.de/movie/5558/abccc258517a703c0b13793dfa976319_w1200.jpg',
      movieimageUrl: 'https://cdn.premiumkino.de/movie/5556/eca806ce9c1f64f2271270eb9ea627ea_w1200.jpg',
      discount: '40 %',
      description: 'Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched, Team Sonic must seek out an unlikely alliance.'
    },
    {
      id: 4,
      name: 'Alles für die Katz',
      dealimageUrl: 'https://cdn.premiumkino.de/movie/7769/1eec6d4c11e0807f97b8101596b85a3a_w1200.jpg',
      movieimageUrl: 'https://cdn.premiumkino.de/movie/5958/b7b14ce8029294f669e8cf4729ae3f19_w1200.jpg',
      discount: '10 %',
      description: 'A pampered cat takes for granted the lucky hand he has been dealt after he is rescued and loved by Rose, a kind-hearted and passionate student. When he loses his ninth life, fate steps in to set him on a transformative journey.'

    },
    {
      id: 5,
      name: 'Venom: The Last Dance',
      dealimageUrl: 'https://cdn.premiumkino.de/movie/9246/4de0a580aaac0c5be77bb20dd57745a7_w1200.jpg',
      movieimageUrl: 'https://cdn.premiumkino.de/movie/2551/111264dc34348ee90908ef5c8804df15_w1200.jpg',
      discount: '60 %',
      description: "Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man and alien monsters from Venom's home world."
    },
    {
      id: 6,
      name: 'Vaiana 2',
      dealimageUrl: 'https://cdn.premiumkino.de/movie/9699/ca1f926244097ceebf5ff9199c96aef5_w1200.jpg',
      movieimageUrl: 'https://cdn.premiumkino.de/movie/3611/4938cd975aa85755aa7bbda35767ca90_w1200.jpg',
      discount: '35 %',
      description: "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced."
    },

  ];
  const dishdeals = [
    {
      id: 1,
      name: 'Softdrinks',
      dishimageUrl: 'https://cdn.premiumkino.de/common/1014/6b294ccab60c62ec49a4b0e6d5569c80.jpg',
      dealimageUrl: 'https://img.freepik.com/premium-photo/alcohol-addiction-cocktail-drinks-served-glasses-with-drinking-straws-iced-drinks-cocktail_660230-148845.jpg',
      discount: '50 %',
      description: "Quench your thirst with our refreshing soft drinks! Enjoy a perfect mix of fizz and flavor at an unbeatable 50% off."

    },
    {
      id: 2,
      name: 'Fingerfood',
      dishimageUrl: 'https://cdn.premiumkino.de/common/3159/b6a308341e9bd42fafee9e44dfc473dd.jpg',
      dealimageUrl: 'https://www.nestleprofessional.de/sites/default/files/2023-07/Tipps-Fingerfood--Catering.jpg',
      discount: '70 %',
      description: "Snack smarter with our delicious finger food! Crispy, savory, and now yours for 70% less—ideal for sharing or savoring solo."
    },
    {
      id: 3,
      name: 'Longdrinks',
      dishimageUrl: 'https://cdn.premiumkino.de/common/1290/e8eebbf56a528bc8196d49ea3795e967.jpg',
      dealimageUrl: 'https://www.merian.de/uploads/media/1920x1080/07/8527-cocktails-bars-weltweit.jpg?v=1-0',
      discount: '40 %',
      description: "Unwind with expertly crafted long drinks! Your favorite blends are now 40% off—cheers to a great movie night."
    },
    {
      id: 4,
      name: 'Snacks',
      dishimageUrl: 'https://cdn.premiumkino.de/common/4811/042c5a8eba1a6031ff8a0a2dd49cc45f.jpg',
      dealimageUrl: 'https://assets.zeezest.com/blogs/PROD_expensive%20desserts%20cover_1707965154344.jpg',
      discount: '80 %',
      description: "Satisfy your cravings with our irresistible snacks! Crunchy, sweet, or salty—get them now at 80% off."
    },

    {
      id: 5,
      name: 'Cocktails',
      dishimageUrl: 'https://cdn.premiumkino.de/common/3669/eee5467f1a738f643d966e3c29506d0a.jpg',
      dealimageUrl: 'https://astor.hamburgzwo13.de/assets/slider_farbe_1920x1000_cocktails.jpg',
      discount: '60 %',
      description: "Raise your glass to our signature cocktails! Enjoy the finest flavors and 60% off, perfect for a cinematic toast."
    },
    {
      id: 6,
      name: 'Icecream',
      dishimageUrl: 'https://cdn.premiumkino.de/common/4367/d258a8b7ea113822de15d15544e0a94a.jpg',
      dealimageUrl: 'https://img.freepik.com/premium-photo/bowl-ice-cream-with-chocolate-vanilla-ice-cream_662214-144807.jpg',
      discount: '40 %',
      description: 'Indulge in creamy, dreamy ice cream! Treat yourself to a sweet escape for 40% off.'
    },

  ];


  let [ShowComment, setShowModelComment] = useState(false);
  let [animateModal, setanimateModal] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonPress = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hier ist ein interessanter Link zu einer Attraktion: https://save-daily.app/share/deddad4c-7267-4f1b-b05b-fa9c0684e72d ', // Dein zu teilender Link
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


  const getCurrentIndex = () => {
    const scrollOffset = flatListRef.current?.getScrollableNode()?.scrollLeft || 0;
    return Math.round(scrollOffset / width);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  const scrollToIndex = (index) => {
    if (flatListRef.current) {
      try {
        flatListRef.current.scrollToIndex({ index, animated: true });
      } catch (error) {
        console.warn("scrollToIndex error:", error);
      }
    } else {
      console.warn("FlatList reference not found");
    }
  };

  const DynamicHeader = ({ value }) => {
    const animatedHeaderHeight = value.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [Header_Max_Height, Header_Min_Height],
      extrapolate: 'clamp',
    });


    const animatedOpacity = value.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });


    return (


      <Animated.View
        style={[
          styles.header,
          {
            // height: animatedHeaderHeight,
            // backgroundColor: animatedHeaderColor,
          },
        ]}>
        <Animated.View
          style={{ width: '100%', height: animatedHeaderHeight, position: 'absolute' }}
        >
          <View style={styles.smallheader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Octicons name="chevron-left" size={35} color="white" />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 3 }}>
              ASTOR GRAND CINEMA
            </Text>
            <TouchableOpacity onPress={handleShare}>
              <Octicons name="share" size={30} color="white" />
            </TouchableOpacity>

          </View>


        </Animated.View>


        <Animated.Image
          source={{ uri: 'https://www.kling-freitag.de/content/uploads/ref_astor-grand-cinema_galerie-2.jpg' }} style={{ height: animatedHeaderHeight, opacity: animatedOpacity }}
        />

        <Animated.View
          style={{ width: '100%', height: animatedHeaderHeight, position: 'absolute', opacity: animatedOpacity }}
        >
          <View style={styles.bigheader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90, marginHorizontal: 210 }}>
                <View style={{ alignSelf: 'center', marginVertical: 9 }}>
                  <Octicons name="chevron-left" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90, marginHorizontal: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                <View style={{ alignSelf: 'center', marginVertical: 10, }}>
                  <MaterialCommunityIcons name="shopping-outline" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleShare}>
              <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90 }}>
                <View style={{ alignSelf: 'center', marginVertical: 9 }}>
                  <Octicons name="share" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          </View>



          <View style={styles.bigfooter}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://www.kinowerbung.de/media/70/4f/72/1647602052/Logo_AstorGrandCinemaHannover.png',
              }}
            />


            <TouchableOpacity onPress={() => Linking.openURL(Platform.select({ 'ios': 'https://hannover.premiumkino.de/', 'android': 'https://hannover.premiumkino.de/', }))}>
              <View style={styles.infobutton}>
                <Octicons name="globe" size={18} color="white" /><Text style={styles.infolabel}>Web</Text>
              </View>
            </TouchableOpacity>

          </View>
        </Animated.View>

      </Animated.View >

    );
  };
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.maincontainer}>
      <DynamicHeader value={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          {
            useNativeDriver: false,
          },
        )}>
        <View style={styles.companyinfo}>
          <Text style={styles.companylabel}>
            ASTOR GRAND CINEMA
          </Text>



          <View style={styles.headline}>
            <View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginVertical: 7 }}></View><Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> 4,7 (11.812)</Text><View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginVertical: 7 }}></View>
            <Text style={styles.headlinetext}><Octicons name="feed-rocket" size={16} color="white" /> 5-6 km</Text><View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginVertical: 7 }}></View>
            <Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> 15-20 € per Order</Text><View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginVertical: 7 }}></View>
          </View>

          <Text style={styles.descriptionlabel}>Das Multiplexkino mit 3D-Technologie hat Ledersitze mit verstellbaren Rückenlehnen und einen Bedienservice.</Text>


          <Text style={styles.openinglabel}>Mo - Do: 13:00 - 21:00</Text>
          <Text style={styles.openinglabel}>Fr - Sa: 11:30 - 23:00</Text>
          <Text style={styles.openinglabel}>So: 13:00 - 21:00</Text>



          <View style={styles.headlineactions}>
            <TouchableOpacity onPress={() => navigation.navigate('GroupOrderScreen')}>
              <View style={styles.grouporderbutton}>
                <MaterialCommunityIcons name="account-multiple-plus" size={20} color="white" /><Text style={styles.buttonlabel}>Group order</Text>
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
        <View style={styles.dealsinfo}>
          <Text style={styles.deallabel}>Top Movie Deals</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {moviedeals.map((deal, index) => (
              <View key={index} style={styles.deal}>
                <View style={styles.cashbackcontainer}>
                  <Text style={styles.cashbackpercentagelabel}>Save up to {deal.discount}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('DealScreen', { imageUrl: deal.dealimageUrl, title: deal.name, text: deal.description })}>
                  <Image style={styles.deallogo} source={{ uri: deal.movieimageUrl }} />
                </TouchableOpacity>
                <Text style={styles.dealname}>{deal.name}</Text>
              </View>
            ))}



          </ScrollView>
          <View style={styles.line}></View>
        </View>
        <View style={styles.dishesinfo}>
          <Text style={styles.disheslabel}>Top Dish Deals</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {dishdeals.map((dish, index) => (
              <View key={index} style={styles.dish}>
                <View style={styles.cashbackcontainer}>
                  <Text style={styles.cashbackpercentagelabel}>Save up to {dish.discount}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('DealScreen', { imageUrl: dish.dealimageUrl, title: dish.name, text: dish.description })}>
                  <Image style={styles.dishlogo} source={{ uri: dish.dishimageUrl }} />
                </TouchableOpacity>
                <Text style={styles.dishname}>{dish.name}</Text>
              </View>
            ))}

          </ScrollView>
          <View style={styles.line}></View>
        </View>

        <View style={styles.picturesinfo}>
          <Text style={styles.pictureslabel}>Pictures</Text>
          <FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            data={images}
            style={styles.picturescontainer}
            keyExtractor={image => image.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={styles.picturescontainer}>
                  <Image style={styles.picture} source={{ uri: item.imageUrl }} />
                  <View style={styles.swipebuttons}>
                    <TouchableOpacity onPress={handlePrevious}>
                      <Octicons name="chevron-left" size={45} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext}>
                      <Octicons name="chevron-right" size={45} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>

              );
            }}
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.round(
                event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
              );
              setCurrentIndex(newIndex);
            }}
          />
        </View>
        <View style={{ height: 2, width: '100%', backgroundColor: 'gray' }}></View>
        <View style={styles.locationinfo}>
          <Text style={styles.locationlabel}>Location</Text>
          <View style={styles.locationcontainer}>
            <TouchableOpacity onPress={() => setShowModelComment(true)}>
              <MapView

                style={styles.locationcontainer}
                initialRegion={initialLocation}
                zoomEnabled={false}
                zoomTapEnabled={false}
                zoomControlEnabled={false}
                rotateEnabled={false}
                pitchEnabled={false}
                scrollEnabled={false}
                userInterfaceStyle={'dark'}>
                <Marker onPress={(e) => e.stopPropagation()}
                  coordinate={initialLocation}
                >



                </Marker>
              </MapView>
            </TouchableOpacity>

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
                    <MapView
                      style={styles.locationcontainerModal}
                      initialRegion={initialLocation}
                      zoomEnabled={true}
                      zoomTapEnabled={true}
                      zoomControlEnabled={true}
                      rotateEnabled={true}
                      pitchEnabled={false}
                      scrollEnabled={true}
                      showsUserLocation={true}
                      userInterfaceStyle={'dark'}>
                      <Marker coordinate={initialLocation}
                        title={'Astor Grand Cinema'}
                        description={'Kino'}>
                      </Marker>
                    </MapView>
                  </View>
                </View>
              }
              HeaderContent={
                <View style={{ width: '100%' }}>
                  <View style={styles.handleBar} />
                  <TouchableOpacity onPress={handleLocation}>
                    <View style={styles.fowardbuttonContainer}>
                      {loading ? (

                        <LottieView
                          source={require('../../assets/location.json')} // Pfad zur Animation
                          autoPlay
                          loop
                          style={{ width: 50, height: 50, backgroundColor: 'white', alignSelf: 'center', borderRadius: 50, marginTop: 5 }}
                        />


                      ) : (
                        <Text style={styles.fowardbuttonlabel}>Open route</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              }
              HeaderStyle={styles.modalHeader}
              // ContentModalStyle={styles.Modal}
              onClose={() => {
                setShowModelComment(false);
                setanimateModal(false);
              }}
            />
          </View>
        </View>
        <View style={styles.line}></View>
      </ScrollView>
    </View>



  );
}
