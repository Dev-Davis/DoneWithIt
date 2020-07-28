import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import ListItem from '../components/ListItem'
import AppText from '../components/AppText/AppText'
import  Colors  from '../config/colors'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/selfie.jpg')}
                        title="Dott The Dev"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: Colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    userContainer: {
        marginVertical: 40,
    },
})
