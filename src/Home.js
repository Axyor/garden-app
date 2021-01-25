import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, ImageBackground, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import {Etabli} from "./Etabli"
import {Seed} from "./Seed"
import {Plants} from "./Plants"

export const Home = (props) => {


    return (
        <SafeAreaView style={{height:"auto"}}>
            <ScrollView style={styles.container}>
                <TouchableOpacity
                    style={styles.heroContainer}
                onPress={() => props.navigation.navigate('Etabli')}
                >

                    <ImageBackground
                        source={require('../assets/img/etabli.png')}
                        style={styles.hero}
                        imageStyle={{ borderBottomRightRadius:15,
        borderTopLeftRadius:15 }}
                    >
                        <Text style={styles.heroText}>Mon établi</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.heroContainer}
                    onPress={() => props.navigation.navigate('Seed')}
                
                >

                    <ImageBackground
                        source={require('../assets/img/recolte.png')}
                        style={styles.hero}
                        imageStyle={{ borderBottomRightRadius:15,
                            borderTopLeftRadius:15 }}
                    >
                        <LinearGradient
                                colors={['transparent', 'black']}
                                style={styles.heroTextContainer}
                            ></LinearGradient>
                        <Text style={styles.heroText}>Mes graines</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.heroContainer}
                    onPress={() => props.navigation.navigate('Plants')}
                >

                    <ImageBackground
                        source={require('../assets/img/littlePlant.png')}
                        style={styles.hero}
                        imageStyle={{ borderBottomRightRadius:15,
                            borderTopLeftRadius:15 }}
                    >
                        <Text style={styles.heroText}>Mes plants</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        paddingTop: 50,
        paddingBottom:30
    },

    heroContainer: {
        marginBottom: 30
        
    },
    hero: {
        height: vh / 5,
        justifyContent: "flex-end"
    },

    heroTextContainer: {
        borderRadius: 15
    },

    heroText: {
        fontSize: 20,
        backgroundColor:"rgba(0,92,74,0.60)",
        textDecorationColor:"white",
        color: 'white',
        padding: 10,
        alignSelf:"flex-end",
        borderBottomRightRadius:15,
        borderTopLeftRadius:15
    },
});