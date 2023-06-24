import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import COLORS from './consts/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './components/navigation/AuthStack';
import { color } from 'react-native-reanimated';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {


  // AsyncStorage.removeItem('orchidId')
  // console.log('Done.')

  function DrawerNavigator() {

    return <Drawer.Navigator screenOptions={{
      drawerActiveTintColor: COLORS.green,
      headerStyle: { backgroundColor: COLORS.green },
      headerTintColor: 'white',
      headerShown: false,
    }} >
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
    <>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <NavigationContainer>
        {/* <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: COLORS.green },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen name='Drawer' component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator> */}
        <AuthStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
