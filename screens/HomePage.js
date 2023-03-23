import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LogPage from './LogPage';
import BooksPage from './BooksPage';


export default function HomePage() {


  const Tab = createBottomTabNavigator()
  //const image = {uri: '../assets/'};


  return (
    <>
    {/* <Tab.Navigator >
    <Tab.Screen name="Home" component={HomePage} />
    <Tab.Screen name="Log" component={LogPage}/>
    <Tab.Screen name="BooksPage" component={BooksPage}/>
    </Tab.Navigator> */}

    <View  style={styles.container}>
      <ImageBackground source={require('../assets/20220202165900000000_pas_1911.jpg')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Bienvenue sur Share Read</Text>
    </ImageBackground>

    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  }
})