import { SafeAreaView, StyleSheet, Text, View, FlatList, Pressable, TextInput, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../consts/colors'
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { GradientTex } from '../components/gradient/GradientTex';
import { CATEGORIES, ORCHIDS } from '../data/flower';

import CategoryTitle from '../components/CategoryTitle';
import OrchidCard from '../components/OrchidCard';


const HomeScreen = () => {

    const [category, setCategory] = useState(CATEGORIES);
    const [orchid, setOrchid] = useState(ORCHIDS)

    const CategoriesList = () => {
        const renderCategoryItem = (itemData) => {
            function pressHandler() {
                const categoryID = itemData.item.id;
                console.log('categoryID : ', categoryID)
                if (categoryID != null) {
                    let orchidFilter = ORCHIDS.filter((item) => item.categoryIds.includes(categoryID))
                    console.log('orchidFilter', orchidFilter)
                    setOrchid(orchidFilter);
                } else {
                    console.log("empty");
                }
            }

            return <CategoryTitle title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler} />
        }
        return (
            <View>
                <FlatList data={category}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={renderCategoryItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    const OrchidList = ({ navigation }) => {
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
            <View>
                <FlatList
                    scrollEnabled={false}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    data={orchid}
                    keyExtractor={(item) => item.id}
                    renderItem={renderOrchidItem}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 50,
                    }}
                />
            </View>
        )
    }

    const getAllOrchidHandler = () => {
        console.log('lckc');
        setOrchid(ORCHIDS);
    }

    return (
        <ScrollView >
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    paddingBottom: 10
                }}
            >
                <Image source={require('../assets/bannerimg.jpg')} style={styles.bannerImg} />
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.headerText}> Welcome to </Text>
                            <GradientTex style={styles.headerText2} text='ORCHID SHOP' />
                        </View>
                        <Entypo name="flower" size={30} color={COLORS.green} />
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchInnerContainer}>
                            <AntDesign name="search1" size={24} color={COLORS.green} style={styles.iconSearch} />
                            <TextInput placeholder='Search ...' style={styles.textInputSearch} />
                        </View>
                        <Pressable
                            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                            onPress={getAllOrchidHandler}
                            android_ripple={{ color: '#cccccc' }}>
                            <View style={styles.sortBtn}>
                                <View>
                                    <MaterialCommunityIcons name="sort-variant" size={30} color={COLORS.light} />
                                </View>
                            </View>
                        </Pressable>
                    </View>
                    <CategoriesList />
                    <OrchidList />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    bannerImg: {
        height: 250,
        width: "100%",
        borderBottomLeftRadius: 100,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    header: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#a0a0a0',
    },
    headerText2: {
        fontSize: 38,
        fontWeight: 'bold',
        color: COLORS.green,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 30,
        justifyContent: 'space-between'
    },
    searchContainer: {
        marginTop: 30,
        flexDirection: 'row',
    },
    iconSearch: {
        marginLeft: 20,
    },
    searchInnerContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 45,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        alignItems: 'center',
    },
    textInputSearch: {
        paddingLeft: 10,
        fontSize: 18,
        color: COLORS.dark,
        flex: 1,
        fontWeight: '500'
    },
    sortBtn: {
        // marginLeft: 10,
        height: 45,
        width: 45,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    button: {
        overflow: 'hidden',
        borderRadius: 10,
        marginLeft: 10,
        height: 45,
        width: 45,
        // backgroundColor: 'red'
        // flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
})