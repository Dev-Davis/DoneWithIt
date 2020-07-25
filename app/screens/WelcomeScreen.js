import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import AppButton from '../components/AppButton'

export default function WelcomeScreen() {
    return (
        <ImageBackground 
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/logo-red.png')} 
                    style={styles.logo}
                />
                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color='secondary' />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    },
})