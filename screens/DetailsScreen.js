import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { ORCHIDS } from '../data/flower';
import COLORS from '../consts/colors';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { GradientTex } from '../components/gradient/GradientTex';
import ButtonIcon from '../components/ButtonIcon';
import AsyncStorage from '@react-native-async-storage/async-storage'

const DetailsScreen = ({ route }) => {

    const isFocused = useIsFocused()
    const [orchidIdList, setOrchidIdList] = useState([]);
    const navigation = useNavigation();
    const orchidId = route.params.orchidId;
    const selectOrchid = ORCHIDS.find((orchid) => orchid.id === orchidId);




    const getLocal = async () => {
        const listID = await AsyncStorage.getItem("listOrchidID");
        if (listID != null || listID != undefined) {
            const value = JSON.parse(listID);
            console.log('value : ', value)
            setOrchidIdList(value)
            console.log('orchidIdList in get : ', orchidIdList)
        } else {
            setOrchidIdList([])
        }
        console.log('orchidIdList in get : ', orchidIdList)
    }

    const removeLocal = async () => {
        let listOrchidID = orchidIdList.filter((item) => item !== orchidId);
        console.log('listOrchidID', listOrchidID)
        await AsyncStorage.setItem("listOrchidID", JSON.stringify(listOrchidID));
        setOrchidIdList(listOrchidID);
        console.log('listOrchidID', orchidIdList);
    }

    const setLocal = async () => {
        let listID;
        if (orchidIdList.length === 0) {
            listID = [orchidId];
            console.log('listID 1 in set ', listID)
            await AsyncStorage.setItem("listOrchidID", JSON.stringify(listID));
        } else {
            listID = [orchidId, ...orchidIdList]
            console.log('listID in set  2', listID)
            await AsyncStorage.setItem("listOrchidID", JSON.stringify(listID));
        }
        setOrchidIdList(listID);
    }
    console.log('orchidIdList in set : ', orchidIdList)

    const changeFavoriteStatus = () => {
        try {
            if (orchidIdList.includes(orchidId)) {
                removeLocal();
            } else {
                setLocal();
            }
        } catch (error) {
            console.log('error in detail');
        }
    }

    useEffect(() => {
        getLocal();
    }, [isFocused])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={selectOrchid.imageUrl} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.detailsInnerContainer}>
                    <View>
                        <Text style={styles.textHeaderDetail}>Best Choice</Text>
                        <View style={styles.line}>
                        </View>
                    </View>
                    <View style={styles.favoriteContainer}>
                        <ButtonIcon
                            onPress={changeFavoriteStatus}
                            icon={orchidIdList.includes(orchidId) ? 'ios-heart-circle' : 'ios-heart-circle'}
                            color={orchidIdList.includes(orchidId) ? 'red' : '#ffffff'}
                            styleButton={orchidIdList.includes(orchidId) ? styles.buttonIconFavorite : styles.buttonIconNotFavorite}
                            size={33}
                        />
                    </View>
                </View>
                <View style={styles.titleDetailContainer}>
                    <GradientTex text={selectOrchid.name} style={styles.titleDetail} />
                    <View style={styles.priceTag}>
                        <Text style={styles.price}>
                            {selectOrchid.price} <Text style={{ fontSize: 15, fontWeight: '400', color: COLORS.light }}>VND</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.about}>About</Text>
                    <Text style={styles.descriptionDetail}>{selectOrchid.description}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flex: 0.5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }, image: {
        resizeMode: 'contain',
        flex: 1,
    },
    detailsContainer: {
        flex: 0.5,
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        // marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 27,
    },
    detailsInnerContainer: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.yellow,
        marginBottom: 5,
        marginRight: 3,
    },
    buttonIconFavorite: {
        backgroundColor: COLORS.white,
        width: 36,
        height: 36,
        borderRadius: 99999,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 18,
        paddingLeft: 2
    },
    buttonIconNotFavorite: {
        backgroundColor: 'rgba(245, 42, 42, 0.2)',
        width: 36,
        height: 36,
        borderRadius: 99999,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 18,
        paddingLeft: 2
    },
    favoriteContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginRight: 2,
        // backgroundColor: 'yellow',
        height: 36

    },

    textHeaderDetail: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    titleDetailContainer: {
        marginLeft: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleDetail: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    priceTag: {
        backgroundColor: COLORS.green,
        width: 115,
        height: 40,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'

    },
    price: {
        color: COLORS.yellow,
        fontWeight: 'bold',
        fontSize: 16
    },
    descriptionContainer: {
        paddingHorizontal: 20,
        marginTop: 10,

    },
    about: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10

    },
    descriptionDetail: {
        color: 'grey',
        fontSize: 16,
        lineHeight: 22,
        marginTop: 20,
    }

})