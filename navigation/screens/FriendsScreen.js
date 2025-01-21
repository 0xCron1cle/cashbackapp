import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import styles from './FriendsScreenStyles.js';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';



const data = Array.from(Array(20).keys());

export default function FriendsScreen({ navigation }) {
    return (
        <View style={styles.mainContainer}>
          <View style = {styles.header}>
            <Text style = {styles.title}>Friends</Text>
          </View>
        </View>

    );
}



