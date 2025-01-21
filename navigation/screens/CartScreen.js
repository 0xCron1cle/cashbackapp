import styles from './CartScreenStyles.js';
import Octicons from '@expo/vector-icons/Octicons';
import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';







export default function CartScreen({ navigation }) {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ left: 20 }}>
                        <Octicons name="chevron-left" size={40} color="white" />
                    </View>
                </TouchableOpacity>
                <Text style={styles.title}>Cart</Text>
            </View>

            <View style={styles.cartInfo}>
                <Image
                    style={styles.cartLogo}
                    source={require('../../assets/shopping-cart.png')}
                />
                <Text style={styles.mainInfo}>Your shopping cart is empty</Text>
                <Text style={styles.sideInfo}>No items in your cart yet! Discover exciting attractions and add them to your adventure.</Text>
            </View>

            <View style={styles.suggestedInfo}>
                <View style = {styles.line}/>
                <Text style = {styles.suggestedLabel}>YOUR RECENTLY VIEWED ATTRACTIONS</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style = {styles.suggestedContainer}></View>
                    <View style = {styles.suggestedContainer}></View>
                    <View style = {styles.suggestedContainer}></View>
                    <View style = {styles.suggestedContainer}></View>

                </ScrollView>
            </View>


        </View>







    );
}