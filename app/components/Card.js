import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Colors from '../config/colors'
import AppText from './AppText'

export default function Card({ title, subTitle, pic }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={pic} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: Colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    subTitle: {
        color: Colors.secondary,
        fontWeight: 'bold',
        fontSize: 33,
    },
    title: {
        marginBottom: 7,
    },
})
