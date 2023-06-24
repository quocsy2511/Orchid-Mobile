import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'
const CategoryTitle = ({ color, title, onPress }) => {
    return (
        <View style={styles.categoryContainer}>
            <Pressable
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                android_ripple={{ color: '#cccccc' }}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={[styles.title, { color: color }]}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryTitle

const styles = StyleSheet.create({
    categoryContainer: {
        marginHorizontal: 10,
        height: 35,
        flexDirection: 'row',
        marginBottom: 60,
        marginTop: 30,
        justifyContent: 'space-between',
        elevation: 8,//android
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: 'hidden',

    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 13,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000fd0'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    }
})