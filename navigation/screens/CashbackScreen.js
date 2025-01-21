import * as React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { StyleSheet, TouchableOpacity, Text, View, Image, SafeAreaView, ScrollView, TextInput, Dimensions } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useFocusEffect } from '@react-navigation/native';  // Import useFocusEffect
import { useState, useCallback } from 'react';
import * as Progress from 'react-native-progress';
import styles from './CashbackScreenStyles.js';


export default function CashbackScreen({ navigation }) {


    return (

        <View style={styles.mainContainer}>
            <Text style={styles.title}>Cashback</Text>
            <Text style = {styles.challengeTitle}>Challenges</Text>
            
                <View style={styles.challengeContainer}>
                    <Text style={styles.challengeLabel}>
                        Leave a google review on Astor Cinema
                    </Text>
                    <View style={styles.row}>
                        <Text style={styles.progressText}>8/10</Text>
                        <Progress.Bar
                            style={{ height: 10, borderRadius: 20, width: 180, borderColor: 'white', alignSelf: 'center' }}
                            progress={0.8}
                            width={null}
                            color="#2dc670"
                            height={40}
                        />
                        <Octicons name="gift" size={20} color="white" />
                    </View>
                </View>
                <View style={styles.challengeContainer}>
                    <Text style={styles.challengeLabel}>
                        Get Cashback
                    </Text>
                    <View style={styles.row}>
                        <Text style={styles.progressText}>3/10</Text>
                        <Progress.Bar
                            style={{ height: 10, borderRadius: 20, width: 180, borderColor: 'white', alignSelf: 'center' }}
                            progress={0.3}
                            width={null}
                            color="#2dc670"
                            height={40}
                        />
                        <Octicons name="gift" size={20} color="white" />
                    </View>
                </View>
                <View style={styles.challengeContainer}>
                    <Text style={styles.challengeLabel}>
                        Leave a follow at Zoo Hannover
                    </Text>
                    <View style={styles.row}>
                        <Text style={styles.progressText}>6/10</Text>
                        <Progress.Bar
                            style={{ height: 10, borderRadius: 20, width: 180, borderColor: 'white', alignSelf: 'center' }}
                            progress={0.6}
                            width={null}
                            color="#2dc670"
                            height={40}
                        />
                        <Octicons name="gift" size={20} color="white" />
                    </View>
                </View>
                <View style={styles.challengeContainer}>
                    <Text style={styles.challengeLabel}>
                        Make some photos at Heide Park Resort
                    </Text>
                    <View style={styles.row}>
                        <Text style={styles.progressText}>2/10</Text>
                        <Progress.Bar
                            style={{ height: 10, borderRadius: 20, width: 180, borderColor: 'white', alignSelf: 'center' }}
                            progress={0.2}
                            width={null}
                            color="#2dc670"
                            height={40}
                        />
                        <Octicons name="gift" size={20} color="white" />
                    </View>
                </View>
        </View>




    );
}

