import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import React, { Component, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, ScrollView, TextInput } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import SelectDropdown from 'react-native-select-dropdown';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './HomeScreenStyles.js';




export default function HomeScreen({ navigation }) {



  const [modalVisible, setModalVisible] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [distance, setDistance] = useState(10);
  const [activeEuroButton, setActiveEuroButton] = useState(null);
  

  let [ShowComment, setShowModelComment] = useState(false);
  let [animateModal, setanimateModal] = useState(false);



  // Handle button press for the top header buttons (restaurants, bars, etc.)
  const handleButtonPress = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null); // Deselects the button if it's already active
    } else {
      setActiveButton(buttonName); // Selects the button if it's not already active
    }
  };

  // Handle Euro button press
  const handleEuroButtonPress = (buttonName) => {
    if (activeEuroButton === buttonName) {
      setActiveEuroButton(null); // Deselects the button if it's already active
    } else {
      setActiveEuroButton(buttonName); // Selects the button if it's not already active
    }

  };




  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>


        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          <Octicons name="gear" size={28} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>SAVE DAILY</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <MaterialCommunityIcons name="shopping-outline" size={30} color="white" />
        </TouchableOpacity>





      </View>

      <View style={styles.contentbox}>


        <View style={styles.searchbarbox}>
          <Octicons name="search" size={24} color="white" />

          <TextInput style={styles.searchbar}
            placeholder="What's around?"
            placeholderTextColor={'white'}

          />



          <TouchableOpacity onPress={() => setShowModelComment(true)}>

            <Octicons name="list-unordered" size={24} color="white" />

          </TouchableOpacity>

        </View>



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

                <View style={styles.categoryContainer}>

                  <TouchableOpacity style={[styles.categoryButton, activeButton === 'restaurants' && styles.activeCategoryButton]} onPress={() => handleButtonPress('restaurants')}>
                    <MaterialIcons name="fastfood" size={24} color={activeButton === 'restaurants' ? 'white' : 'white'} />
                    <Text style={[styles.filtertitle, { color: activeButton === 'restaurants' ? 'white' : 'white' }]}>Restaurants</Text>
                    <MaterialIcons name={activeButton === 'restaurants' ? 'keyboard-arrow-down' : 'keyboard-arrow-right'} size={24} color={activeButton === 'restaurants' ? 'white' : 'white'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.categoryButton, activeButton === 'attractions' && styles.activeCategoryButton]} onPress={() => handleButtonPress('attractions')}>
                    <MaterialIcons name="local-activity" size={24} color={activeButton === 'attractions' ? 'white' : 'white'} />
                    <Text style={[styles.filtertitle, { color: activeButton === 'attractions' ? 'white' : 'white' }]}>Attractions</Text>
                    <MaterialIcons name={activeButton === 'attractions' ? 'keyboard-arrow-down' : 'keyboard-arrow-right'} size={24} color={activeButton === 'attractions' ? 'white' : 'white'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.categoryButton, activeButton === 'bars' && styles.activeCategoryButton]} onPress={() => handleButtonPress('bars')}>
                    <MaterialIcons name="local-bar" size={24} color={activeButton === 'bars' ? 'white' : 'white'} />
                    <Text style={[styles.filtertitle, { color: activeButton === 'bars' ? 'white' : 'white' }]}>Bars</Text>
                    <MaterialIcons name={activeButton === 'bars' ? 'keyboard-arrow-down' : 'keyboard-arrow-right'} size={24} color={activeButton === 'bars' ? 'white' : 'white'} />
                  </TouchableOpacity>

                </View>
                <View style={styles.filterContainer}>

                  <View style={styles.sliderContainer}>

                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                      <Text style={styles.sliderLabel}>Radius</Text>
                      <Text style={styles.sliderLabel}>{distance} km</Text>
                    </View>


                    <Slider
                      style={styles.slider}
                      minimumValue={1}
                      maximumValue={100}
                      step={1}
                      value={distance}
                      onValueChange={(value) => setDistance(value)}
                      minimumTrackTintColor='white'
                      maximumTrackTintColor='#81858F'
                      thumbTintColor='#2e3038'
                    />
                  </View>


                  <View style={styles.modalFilterEuro}>


                    <TouchableOpacity style={[activeEuroButton === 'euro']} onPress={() => handleEuroButtonPress('euro_1')}>
                      <View style={styles.eurosign}>

                        <MaterialIcons name="euro" size={28} color={activeEuroButton === 'euro_1' ? 'black' : 'white'} />

                      </View>

                      <Text style={[styles.eurlabel, { color: activeEuroButton === 'euro_1' ? 'black' : 'white' }]}>1-5 €</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={[activeEuroButton === 'euro']} onPress={() => handleEuroButtonPress('euro_2')}>
                      <View style={styles.eurosign}>


                        <MaterialIcons name="euro" size={28} color={activeEuroButton === 'euro_2' ? 'black' : 'white'} />
                      </View>

                      <Text style={[styles.eurlabel, { color: activeEuroButton === 'euro_2' ? 'black' : 'white' }]}>5-10 €</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[activeButton === 'euro']} onPress={() => handleEuroButtonPress('euro_3')}>
                      <View style={styles.eurosign}>
                        <MaterialIcons name="euro" size={28} color={activeEuroButton === 'euro_3' ? 'black' : 'white'} />
                      </View>

                      <Text style={[styles.eurlabel, { color: activeEuroButton === 'euro_3' ? 'black' : 'white' }]}>10-15 €</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[activeEuroButton === 'euro']} onPress={() => handleEuroButtonPress('euro_4')}>
                      <View style={styles.eurosign}>
                        <MaterialIcons name="euro" size={28} color={activeEuroButton === 'euro_4' ? 'black' : 'white'} />
                      </View>
                      <Text style={[styles.eurlabel, { color: activeEuroButton === 'euro_4' ? 'black' : 'white' }]}>20+ €</Text>
                    </TouchableOpacity>


                  </View>






                  <TouchableOpacity onPress={() => setanimateModal(true)} style={styles.submitButton}>
                    <Text style={styles.buttonText}>SEARCH</Text>
                  </TouchableOpacity>
                </View>




              </View>



            </View>
          }
          HeaderContent={
            <View style={{ width: '100%' }}>
              <View style={styles.handleBar} />
            </View>

          }
          HeaderStyle={styles.modalHeader}
          // ContentModalStyle={styles.Modal}

          onClose={() => {
            setShowModelComment(false);
            setanimateModal(false);
          }}
        />






        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

          <TouchableOpacity onPress={() => navigation.navigate('AttractionScreen')}>
            <View style={styles.attractioncontainer}>
              <View style={styles.attractionimage}>
                <Image
                  style={styles.bigLogo}
                  source={{
                    uri: 'https://www.kling-freitag.de/content/uploads/ref_astor-grand-cinema_galerie-2.jpg',
                  }}
                />
                <View style={styles.attractionLogo}>
                  <Image
                    style={styles.bigLogo}
                    source={{
                      uri: 'https://www.kinowerbung.de/media/70/4f/72/1647602052/Logo_AstorGrandCinemaHannover.png',
                    }}
                  />
                </View>
                <View style={styles.attractioninput}>
                  <View style={{ marginVertical: -5, marginHorizontal: 15 }}><MaterialIcons name="local-attraction" size={50} color="white" /></View>
                  <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
                    <View style={styles.attractionqrcode}><View style={{ marginVertical: 10 }}><MaterialCommunityIcons name="qrcode-scan" size={25} color="white" /></View></View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.headline}>
                <Text style={styles.attractionlabel}>ASTOR CINEMA</Text>
                <View style={styles.twelvePointBurst}>
                  <View style={styles.twelvePointBurst30} />
                  <View style={styles.twelvePointBurst60} />
                  <View style={styles.twelvePointBurstMain}><Text style={styles.dealslabel}>-50%</Text></View>
                </View>
              </View>
              <View style={styles.headlineinfos}>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> 4,7 (11.812)</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-rocket" size={16} color="white" /> 5-6 km</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> 15-20 € per Order</Text><Text style={styles.openinghoursopen}>Currently open</Text></View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AttractionScreen')}>
            <View style={styles.attractioncontainer}>
              <View style={styles.attractionimage}>
                <Image
                  style={styles.bigLogo}
                  source={{
                    uri: 'https://webimages.we2p.de/2/erlebniswelt-lueneburger-heide/entity/gallery/5ff84d5eb4dc7458417f9a19/HPR_Impressioneen_2024_27.jpg',
                  }}
                />
                <View style={styles.attractionLogo}>
                  <Image
                    style={styles.bigLogo}
                    source={{
                      uri: 'https://play-lh.googleusercontent.com/5LuzpCE_FXX0cwCtu7fxKEVpbG5Xz52A4b_IfR9xy0JzoUvboDvIbB9VoFwC_R0dLhHS',
                    }}
                  />
                </View>
                <View style={styles.attractioninput}>
                  <View style={{ marginVertical: -5, marginHorizontal: 15 }}><MaterialIcons name="local-attraction" size={50} color="white" /></View>
                  <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
                    <View style={styles.attractionqrcode}><View style={{ marginVertical: 10 }}><MaterialCommunityIcons name="qrcode-scan" size={25} color="white" /></View></View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.headline}>
                <Text style={styles.attractionlabel}>HEIDE PARK RESORT</Text>

                <View style={styles.twelvePointBurst}>
                  <View style={styles.twelvePointBurst30} />
                  <View style={styles.twelvePointBurst60} />
                  <View style={styles.twelvePointBurstMain}><Text style={styles.dealslabel}>-40%</Text></View>
                </View>
              </View>
              <View style={styles.headlineinfos}>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> 4,4 (65.523)</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-rocket" size={16} color="white" /> 85-86 km</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> 30-40 € per Order</Text><Text style={styles.openinghoursclosed}>Currently closed</Text></View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AttractionScreen')}>
            <View style={styles.attractioncontainer}>
              <View style={styles.attractionimage}>
                <Image
                  style={styles.bigLogo}
                  source={{
                    uri: 'https://www.ndr.de/sport/fussball/hannover16088_v-contentxl.jpg',
                  }}
                />
                <View style={styles.attractionLogo}>
                  <Image
                    style={styles.bigLogo}
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hannover_96_Logo.svg/1200px-Hannover_96_Logo.svg.png'
                    }}
                  />
                </View>
                <View style={styles.attractioninput}>
                  <View style={{ marginVertical: -5, marginHorizontal: 15 }}><MaterialIcons name="local-attraction" size={50} color="white" /></View>
                  <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
                    <View style={styles.attractionqrcode}><View style={{ marginVertical: 10 }}><MaterialCommunityIcons name="qrcode-scan" size={25} color="white" /></View></View>
                  </TouchableOpacity>
                </View>

              </View>
              <View style={styles.headline}>
                <Text style={styles.attractionlabel}>HANNOVER 96</Text>

                <View style={styles.twelvePointBurst}>
                  <View style={styles.twelvePointBurst30} />
                  <View style={styles.twelvePointBurst60} />
                  <View style={styles.twelvePointBurstMain}><Text style={styles.dealslabel}>-30%</Text></View>
                </View>
              </View>
              <View style={styles.headlineinfos}>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> 4,4 (95)</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-rocket" size={16} color="white" /> 5-6 km</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> 40-50 € per Order</Text><Text style={styles.openinghoursclosed}>Currently closed</Text></View>
              </View>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AttractionScreen')}>
            <View style={styles.attractioncontainer}>
              <View style={styles.attractionimage}>
                <Image
                  style={styles.bigLogo}
                  source={{
                    uri: 'https://img.restaurantguru.com/ra67-interior-Destille.jpg',
                  }}
                />
                <View style={styles.attractionLogo}>
                  <Image
                    style={styles.bigLogo}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqpWKEjUdXV44wmuKJwPlUT2prFo1RQ8G_HQ&s',
                    }}
                  />



                </View>
                <View style={styles.attractioninput}>
                  <View style={{ marginHorizontal: 15 }}><MaterialIcons name="local-bar" size={45} color="white" /></View>
                  <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
                    <View style={styles.attractionqrcode}><View style={{ marginVertical: 10 }}><MaterialCommunityIcons name="qrcode-scan" size={25} color="white" /></View></View>
                  </TouchableOpacity>
                </View>

              </View>
              <View style={styles.headline}>
                <Text style={styles.attractionlabel}>DESTILLE</Text>

                <View style={styles.twelvePointBurst}>
                  <View style={styles.twelvePointBurst30} />
                  <View style={styles.twelvePointBurst60} />
                  <View style={styles.twelvePointBurstMain}><Text style={styles.dealslabel}>-20%</Text></View>
                </View>
              </View>
              <View style={styles.headlineinfos}>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> 4,3 (925)</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-rocket" size={16} color="white" /> 3-4 km</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> 10-15 € per Order</Text><Text style={styles.openinghoursopen}>Currently open</Text></View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AttractionScreen')}>
            <View style={styles.attractioncontainer}>
              <View style={styles.attractionimage}>
                <Image
                  style={styles.bigLogo}
                  source={{
                    uri: 'https://www.zoo-hannover.de/_next/image?url=https%3A%2F%2Fd1c96hlcey6qkb.cloudfront.net%2F1b5fd312-4b81-4e77-bf42-5ca98767d3eb%2F98718142f0ce4280a6f6ce1b1bad7a2b.keywords_tags.370596240734d0959f7a593331df924d%3Fresponse-content-disposition%3Dattachment%253B%2520filename%252A%253DUTF-8%2527%2527Tiger_Ma%2525CC%252588dchen%252520mit%252520Mutter_2022_3c.jpg%26Expires%3D6307200000%26Signature%3DWj56--Y5Y3wnpVRbqW9aqs6ceEGEvrCeVa3YNIjhqbJ31-ef56LSNPh7NGTnBzGoYaRIL5AbQkdiCZ0UxF843nskhaiKsZr~lHNjRXetHE758U83Ygn9gs8bnGEb~2gq4JpLq05LRIu~nUGfitVLMlNGMPwzEyfUDqpnPS4Skg~pAGQe6qUuuIepVVEos9nzK6~0EPR0Cd3wy7fqY4oXv60u~51f2bQ2BlIYVWFa5BUWFa9kEN1hTzDH5uSGhA519mbVk7W74Y1doi8fRSjeZsgD~-7t9bRT-U2zG~w82nhQtbMA~WDaEWxpUEcX0JEMRUrDxr5lkd9kjjVSQ78vew__%26Key-Pair-Id%3DAPKAI33AGAEAYCXFBDTA&w=3840&q=75',
                  }}
                />
                <View style={styles.attractionLogo}>
                  <Image
                    style={styles.bigLogo}
                    source={{
                      uri: 'https://play-lh.googleusercontent.com/CKaDf83KAt3b1UGNl6mqdDqlhQFvYRJCDuQK-DER3tqj-BoB77KXNBJIpeCeIKG6GA',
                    }}
                  />



                </View>
                <View style={styles.attractioninput}>
                  <View style={{ marginVertical: -5, marginHorizontal: 15 }}><MaterialIcons name="local-attraction" size={50} color="white" /></View>
                  <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
                    <View style={styles.attractionqrcode}><View style={{ marginVertical: 10 }}><MaterialCommunityIcons name="qrcode-scan" size={25} color="white" /></View></View>
                  </TouchableOpacity>
                </View>

              </View>
              <View style={styles.headline}>
                <Text style={styles.attractionlabel}>ZOO HANNOVER</Text>

                <View style={styles.twelvePointBurst}>
                  <View style={styles.twelvePointBurst30} />
                  <View style={styles.twelvePointBurst60} />
                  <View style={styles.twelvePointBurstMain}><Text style={styles.dealslabel}>-60%</Text></View>
                </View>
              </View>
              <View style={styles.headlineinfos}>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> 4,5 (28.315)</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-rocket" size={16} color="white" /> 3-4 km</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> 15-20 € per Order</Text><Text style={styles.openinghoursclosed}>Currently closed</Text></View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AttractionScreen')}>
            <View style={styles.attractioncontainer}>
              <View style={styles.attractionimage}>
                <Image
                  style={styles.bigLogo}
                  source={{
                    uri: 'https://www.jump-one.fitness/fileadmin/content/jump-one-hannover-trampolinsprunghalle-2.jpg',
                  }}
                />
                <View style={styles.attractionLogo}>
                  <Image
                    style={styles.bigLogo}
                    source={{
                      uri: 'https://img.tmdb.eu/480/dpma/4/a/3020180197546.jpg',
                    }}
                  />



                </View>
                <View style={styles.attractioninput}>
                  <View style={{ marginVertical: -5, marginHorizontal: 15 }}><MaterialIcons name="local-attraction" size={50} color="white" /></View>
                  <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
                    <View style={styles.attractionqrcode}><View style={{ marginVertical: 10 }}><MaterialCommunityIcons name="qrcode-scan" size={25} color="white" /></View></View>
                  </TouchableOpacity>
                </View>



              </View>
              <View style={styles.headline}>
                <Text style={styles.attractionlabel}>JUMP/ONE</Text>

                <View style={styles.twelvePointBurst}>
                  <View style={styles.twelvePointBurst30} />
                  <View style={styles.twelvePointBurst60} />
                  <View style={styles.twelvePointBurstMain}><Text style={styles.dealslabel}>-25%</Text></View>
                </View>
              </View>
              <View style={styles.headlineinfos}>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> 4,5 (1.796)</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-rocket" size={16} color="white" /> 2-3 km</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> 15-25 € per Order</Text><Text style={styles.openinghoursopen}>Currently open</Text></View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AttractionScreen')}>
            <View style={styles.attractioncontainer}>
              <View style={styles.attractionimage}>
                <Image
                  style={styles.bigLogo}
                  source={{
                    uri: 'https://boulderhalle-beta.de/wp-content/uploads/2023/01/BETA_boulderhalle_Galerie-17-1024x682.jpg',
                  }}
                />
                <View style={styles.attractionLogo}>
                  <Image
                    style={styles.bigLogo}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_OkycBnwTWIoSNCbTh8G1D4632ZapP7jZb9A3FdxbJ7PSwzbzWYZ027ffUPa052tC08&usqp=CAU',
                    }}
                  />



                </View>
                <View style={styles.attractioninput}>
                  <View style={{ marginVertical: -5, marginHorizontal: 15 }}><MaterialIcons name="local-attraction" size={50} color="white" /></View>
                  <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
                    <View style={styles.attractionqrcode}><View style={{ marginVertical: 10 }}><MaterialCommunityIcons name="qrcode-scan" size={25} color="white" /></View></View>
                  </TouchableOpacity>
                </View>


              </View>
              <View style={styles.headline}>
                <Text style={styles.attractionlabel}>BETA BOULDERHALLE</Text>

                <View style={styles.twelvePointBurst}>
                  <View style={styles.twelvePointBurst30} />
                  <View style={styles.twelvePointBurst60} />
                  <View style={styles.twelvePointBurstMain}><Text style={styles.dealslabel}>-30%</Text></View>
                </View>
              </View>
              <View style={styles.headlineinfos}>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> 4,8 (796)</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-rocket" size={16} color="white" /> 2-3 km</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> 10-15 € per Order</Text><Text style={styles.openinghoursopen}>Currently open</Text></View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AttractionScreen')}>
            <View style={styles.attractioncontainer}>
              <View style={styles.attractionimage}>
                <Image
                  style={styles.bigLogo}
                  source={{
                    uri: 'https://www.hidden.games/wp-content/uploads/2019/09/hidden-in-hannover-space-odyssey.jpg',
                  }}
                />
                <View style={styles.attractionLogo}>
                  <Image
                    style={styles.bigLogo}
                    source={{
                      uri: 'https://cdn.bitrix24.de/b16670115/landing/426/426ea33e96cfaeaa4b954ccc883ecdd6/PNG_room_escape_logo_kreis_rund_1x.png',
                    }}
                  />



                </View>
                <View style={styles.attractioninput}>
                  <View style={{ marginVertical: -5, marginHorizontal: 15 }}><MaterialIcons name="local-attraction" size={50} color="white" /></View>
                  <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
                    <View style={styles.attractionqrcode}><View style={{ marginVertical: 10 }}><MaterialCommunityIcons name="qrcode-scan" size={25} color="white" /></View></View>
                  </TouchableOpacity>
                </View>


              </View>
              <View style={styles.headline}>
                <Text style={styles.attractionlabel}>ROOM ESCAPE</Text>

                <View style={styles.twelvePointBurst}>
                  <View style={styles.twelvePointBurst30} />
                  <View style={styles.twelvePointBurst60} />
                  <View style={styles.twelvePointBurstMain}><Text style={styles.dealslabel}>-80%</Text></View>
                </View>
              </View>
              <View style={styles.headlineinfos}>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> 4,8 (4586)</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-rocket" size={16} color="white" /> 3-4 km</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> 10-20 € per Order</Text><Text style={styles.openinghoursopen}>Currently open</Text></View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AttractionScreen')}>
            <View style={styles.attractioncontainer}>
              <View style={styles.attractionimage}>
                <Image
                  style={styles.bigLogo}
                  source={{
                    uri: 'https://www.bluedevilsweiden.de/wp-content/uploads/2023/04/20230317-221812-3-1024x683.jpg',
                  }}
                />
                <View style={styles.attractionLogo}>
                  <Image
                    style={styles.bigLogo}
                    source={{
                      uri: 'https://logowik.com/content/uploads/images/hannover-indians3720.logowik.com.webp',
                    }}
                  />



                </View>
                <View style={styles.attractioninput}>
                  <View style={{ marginVertical: -5, marginHorizontal: 15 }}><MaterialIcons name="local-attraction" size={50} color="white" /></View>
                  <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
                    <View style={styles.attractionqrcode}><View style={{ marginVertical: 10 }}><MaterialCommunityIcons name="qrcode-scan" size={25} color="white" /></View></View>
                  </TouchableOpacity>
                </View>

              </View>
              <View style={styles.headline}>
                <Text style={styles.attractionlabel}>EC HANNOVER INDIANS</Text>

                <View style={styles.twelvePointBurst}>
                  <View style={styles.twelvePointBurst30} />
                  <View style={styles.twelvePointBurst60} />
                  <View style={styles.twelvePointBurstMain}><Text style={styles.dealslabel}>-45%</Text></View>
                </View>
              </View>
              <View style={styles.headlineinfos}>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> 4,8 (392)</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-rocket" size={16} color="white" /> 4-5 km</Text></View>
                <View style={styles.infos}><Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> 10-20 € per Order</Text><Text style={styles.openinghoursclosed}>Currently closed</Text></View>
              </View>
            </View>
          </TouchableOpacity>

        </ScrollView>

      </View>



    </SafeAreaView>

  );
}










