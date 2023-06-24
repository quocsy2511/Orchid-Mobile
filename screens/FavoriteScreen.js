import { SafeAreaView, StyleSheet, FlatList, View, Text, Alert, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../consts/colors'
import { GradientTex } from '../components/gradient/GradientTex'
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import OrchidCard from '../components/OrchidCard';
import { ORCHIDS } from '../data/flower';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import ButtonIcon from '../components/ButtonIcon';

const FavoriteScreen = () => {

    const isFocused = useIsFocused()
    const navigation = useNavigation();
    const [orchidIdList, setOrchidIdList] = useState([]);

    const data = ORCHIDS.filter((item) => orchidIdList.includes(item.id))


    const getLocal = async () => {
        const listID = await AsyncStorage.getItem("listOrchidID");
        if (listID != null || listID != undefined) {
            const value = JSON.parse(listID);
            setOrchidIdList(value)
        } else {
            setOrchidIdList([])
        }
    }

    const OrchidList = () => {

        const renderOrchidItem = (itemData) => {

            function pressHandler() {
                navigation.navigate('Details', {
                })
            }

            return <OrchidCard
                id={itemData.item.id}
                imageUrl={itemData.item.imageUrl}
                name={itemData.item.name}
                description={itemData.item.description}
                onPress={pressHandler}
                price={itemData.item.price}
                rating={itemData.item.rating}
            />
        }

        return (
            <FlatList
                scrollEnabled={false}
                data={data}
                numColumns={2}
                keyExtractor={(item, index) => index}
                renderItem={renderOrchidItem}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
            />
        )
    }


    const AlertOption = () => {
        Alert.alert(
            'Warning',
            'Are you sure you want to delete all your favorites?',
            [
                {
                    text: 'YES',
                    onPress: () => clearAllFavoriteListHandler(),
                    style: 'destructive',
                },
                {
                    text: 'NO',
                    onPress: () =>
                        console.log('No'),
                    style: 'cancel'
                },
            ],
        )
    }



    const clearAllFavoriteListHandler = async () => {
        let listID = [];
        try {
            await AsyncStorage.setItem('listOrchidID', JSON.stringify(listID))
            setOrchidIdList([])
        } catch (error) {
            console.log("Error in clearAllFavoriteListHandler");
        }
    }


    useEffect(() => {
        getLocal()
    }, [isFocused])

    if (orchidIdList.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <AntDesign name="dropbox" size={120} color="black" />
                <View>
                    <GradientTex text='Your Favorite is EMPTY ' style={styles.textEmpty} />
                </View>
            </View>
        )
    }

    return (
        <ScrollView>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: COLORS.white,
                // paddingBottom: 10

            }}>
                <Image source={require('../assets/favoriteImg.jpg')} style={styles.bannerImg} />
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={styles.header}>
                        <View>
                            <GradientTex style={styles.headerText2} text='Favorite Collection' />
                        </View>
                        <Entypo name="flower" size={30} color={COLORS.green} />
                    </View>
                    <View style={styles.cleanAllContainer}>
                        <View style={styles.cleanInner}>
                            <View style={styles.iconContainer}>
                                <ButtonIcon icon='trash-outline' color='#f50000'
                                    styleButton={styles.buttonIcon}
                                    onPress={AlertOption}
                                    size={24} />
                            </View>
                        </View>
                    </View>
                    <OrchidList />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    bannerImg: {
        height: 250,
        width: "100%",
        borderBottomLeftRadius: 100,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    header: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: COLORS.green,
    },
    cleanAllContainer: {
        height: 63,
        overflow: 'hidden',
        paddingVertical: 14,
    },
    cleanInner: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    buttonIcon: {
        width: 46,
        height: 46,
        borderRadius: 99999,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.light,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textEmpty: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    titleAlert: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 20,
    }
})