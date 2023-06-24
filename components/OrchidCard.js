import { Dimensions, Image, StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

const width = Dimensions.get('screen').width / 2 - 30;

const OrchidCard = (
    {
        id,
        name,
        imageUrl,
        rating,
        price,
    }) => {

    const navigation = useNavigation()

    function selectOrchid() {
        navigation.navigate('Details', {
            orchidId: id
        })
    }


    return (
        <View style={styles.cardContainer}>
            <Pressable android_ripple={{ color: '#ccccc' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectOrchid}>

                <View style={styles.cardInnerContainer}>
                    <View style={styles.iconContainer}>
                        <View style={styles.iconInner}>
                            <MaterialCommunityIcons name="flower" size={20} color={COLORS.green} />
                        </View>
                    </View>
                    <View style={styles.imgContainer}>
                        <Image style={styles.img} source={imageUrl} />
                    </View>
                    <Text style={styles.name} numberOfLines={1} >{name}</Text>
                    <View style={styles.description}>
                        <Text style={styles.priceText}>{price} <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#ffef0cda' }}>VND</Text></Text>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.ratingText}>
                                {rating}
                            </Text>
                            <AntDesign name="star" size={18} color="#f8e804" />
                        </View>
                    </View>
                </View>
            </Pressable>

        </View>
    )
}

export default OrchidCard

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 10,
        height: 235,
        width,
        backgroundColor: COLORS.light,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,

        elevation: 6,
        borderRadius: 8,
        // shadown dung cho ios
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: 'hidden',
    },
    cardInnerContainer: {
        overflow: 'hidden',
        padding: 14,
        height: 235,


    },
    buttonPressed: {
        opacity: 0.5,
    },
    iconContainer: {
        alignItems: 'flex-end'
    },
    iconInner: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        elevation: 6,
        borderRadius: 8,
        // shadown dung cho ios
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: 'hidden',
    },
    imgContainer: {
        height: 100,
        alignItems: 'center'
    },
    img: {
        flex: 1,
        resizeMode: 'contain'
    },
    name: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
        color: COLORS.green,
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        padding: 7,
        backgroundColor: "#d1d1d1c1",
        borderRadius: 100,
        alignItems: 'center',
        overflow: 'hidden',
        elevation: 6,
        // shadown dung cho ios
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 3,
        paddingHorizontal: 4,
        borderRadius: 100,

    },
    ratingText: {
        marginRight: 2,

    },
    priceText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#636363'

    }

})