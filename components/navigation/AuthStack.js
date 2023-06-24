import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from '../../screens/DetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import FavoriteScreen from '../../screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../consts/colors'
import CustomDrawer from '../CustomDrawer';


const AuthStack = () => {
    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();
    const BottomTab = createBottomTabNavigator();

    function DrawerNavigator() {

        return <Drawer.Navigator screenOptions={{
            drawerActiveTintColor: COLORS.green,
            headerStyle: { backgroundColor: COLORS.green },
            headerTintColor: 'white',
            headerShown: false,
            drawerLabelStyle: {
                marginLeft: -25
            }
        }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name='Home' component={BottomTabNavigator}
                options={{
                    title: 'Home',
                    drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name='home' />
                }} />

            <Drawer.Screen name='Favorite' component={BottomTabNavigator2}
                options={{
                    title: 'My Favorites',
                    drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name='heart-circle' />
                }}
            />
        </Drawer.Navigator>
    }

    function BottomTabNavigator() {

        return (
            <BottomTab.Navigator>
                <BottomTab.Screen name='HomePage' component={HomeScreen}
                    options={{
                        title: 'My Favorites',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='home' color={color} size={24} />
                        ),
                        headerShown: false,
                    }
                    } />
                <BottomTab.Screen name='favoritePage' component={FavoriteScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='heart-circle' color={color} size={24} />
                        ),
                        headerShown: false,
                    }
                    } />
            </BottomTab.Navigator>
        )
    }

    function BottomTabNavigator2() {
        return (
            <BottomTab.Navigator
                initialRouteName='favorite'
            // screenOptions={{
            //   tabBarOrder: ['Home', 'favorite'],
            // }}
            >
                <BottomTab.Screen name='Home' component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='home' color={color} size={24} />
                        ),
                        headerShown: false,
                    }
                    } />
                <BottomTab.Screen name='favorite' component={FavoriteScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='heart-circle' color={color} size={24} />
                        ),
                        headerShown: false,
                    }
                    } />
            </BottomTab.Navigator>
        )
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name='Drawer' component={DrawerNavigator} />
            <Stack.Screen name='Details' component={DetailsScreen} />
            {/* <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Favorite' component={FavoriteScreen} /> */}
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})