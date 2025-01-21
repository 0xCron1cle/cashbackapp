import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import styles from './SettingsScreenStyles.js';
import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo } from 'react';


export default function SettingsScreen({ navigation }) {
  
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Octicons name="chevron-left" size={40} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>SETTINGS</Text>
            </View>
            
        </SafeAreaView >
    );
}
