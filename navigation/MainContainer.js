import * as React from "react";
import Octicons from '@expo/vector-icons/Octicons';
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import CashbackScreen from "./screens/CashbackScreen";
import FriendsScreen from "./screens/FriendsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AttractionScreen from './screens/AttractionScreen';
import QrCodeScreen from './screens/QrCodeScreen';
import GroupOrderScreen from './screens/GroupOrderScreen';
import DealScreen from './screens/DealScreen';
import CartScreen from './screens/CartScreen';


const Tab = createBottomTabNavigator();
const HomeNavigator = createStackNavigator();

export default function MainContainer({ }) {
    const navigationRef = useNavigationContainerRef();

    return (
        <NavigationContainer ref={navigationRef}>



            <Tab.Navigator
                initialRouteName="HomeScreen"

                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: {
                        borderTopWidth: 0,
                        backgroundColor: '#1c1d21',
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'gray',
                    tabBarShowLabel: true,
                    tabBarLabel: () => {
                        return <Text style={{ color: 'white' }}>{route.name.replace('Screen', '')}</Text>
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'HomeScreen') {
                            iconName = 'home';
                            backgroundColor = 'white'
                        } else if (route.name === 'ProfileScreen') {
                            iconName = 'person';
                            backgroundColor = 'white'
                        } else if (route.name === 'CashbackScreen') {
                            iconName = 'gift';
                            backgroundColor = 'white'
                        } else if (route.name === 'FriendsScreen') {
                            iconName = 'people';
                            backgroundColor = 'white'
                        }


                        // You can return any component that you like here!
                        return <Octicons name={iconName} size={size} color={'white'} />;

                    },






                })}

            >


                <Tab.Screen
                    name="HomeScreen"

                    screenOptions={{ navigationBarColor: '#1C1D21' }}
                    

                >



                    {() => (
                        <HomeNavigator.Navigator initialRouteName="Home">
                            <HomeNavigator.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
                            <HomeNavigator.Screen name="SettingsScreen" component={SettingsScreen }  options={{ headerShown: false }} />
                            <HomeNavigator.Screen name="AttractionScreen" component={AttractionScreen}  options={{ headerShown: false }} />
                            <HomeNavigator.Screen name="QrCodeScreen" component={QrCodeScreen}  options={{ headerShown: false }} />
                            <HomeNavigator.Screen name="GroupOrderScreen" component={GroupOrderScreen}  options={{ headerShown: false }} />
                            <HomeNavigator.Screen name="DealScreen" component={DealScreen}  options={{ headerShown: false }} />
                            <HomeNavigator.Screen name="CartScreen" component={CartScreen}  options={{ headerShown: false }} />
                            



                        </HomeNavigator.Navigator>
                    )}
                </Tab.Screen>

                <Tab.Screen
                    name="CashbackScreen"
                    component={CashbackScreen}
                    screenOptions={{ navigationBarColor: '#1C1D21' }}
                />

                <Tab.Screen
                    name="FriendsScreen"
                    component={FriendsScreen}
                    screenOptions={{ navigationBarColor: '#1C1D21' }}
                />

                <Tab.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    screenOptions={{ navigationBarColor: '#1C1D21' }}
                />

            </Tab.Navigator>

        </NavigationContainer>


    )
};