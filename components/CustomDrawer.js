import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import COLORS from '../consts/colors';
import { GradientTex } from './gradient/GradientTex';


const CustomDrawer = (props) => {
    return (
        <View style={styles.containerDrawer}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{ backgroundColor: '#218a40a9' }}>
                <ImageBackground source={require('../assets/bannerimg.jpg')} style={styles.bgImg} imageStyle={styles.bgImgStyle}>
                    <View style={styles.avatarContainer}>
                        <Image source={require('../assets/avatarSix.jpg')} style={styles.avatarImg} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.nameContainer}>
                            <GradientTex text='Chị Sáu Đấm Bốc' style={styles.name} />
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.drawerListContainer}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    containerDrawer: {
        flex: 1,
    },
    bgImg: {
        padding: 20,
        marginLeft: 20,
        width: '110%',
        // borderColor: 'white',
        // borderWidth: 2,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    bgImgStyle: {
        borderBottomLeftRadius: 60,
        borderTopLeftRadius: 60,
    },
    avatarContainer: {
        backgroundColor: COLORS.white,
        padding: 3,
        height: 86,
        width: 85,
        borderRadius: 99999,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: 'hidden',
        marginBottom: 5,
        marginRight: 15,
    },
    avatarImg: {
        flex: 1,
        height: 80,
        width: 80,
        borderRadius: 40,

    },
    nameContainer: {
        height: 40,
        width: 140,
        paddingHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 40,
        borderRadius: 8,
        overflow: 'hidden',
    },
    name: {
        color: COLORS.dark,
        fontWeight: 'bold',
    },
    drawerListContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },

})