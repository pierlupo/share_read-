import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import HomePage from './screens/HomePage';
import LogPage from './screens/LogPage';
import CategoriesScreen from './screens/CategoriesScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { store } from './store/redux/store';
import { Provider, useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
      <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomePage} options={{headerShown: true}}/>
          <Drawer.Screen name="Categories" component={CategoriesScreen} options={{ title: 'All Categories' }} />
          <Drawer.Screen name="Log" component={LogPage} options={{ title: 'Register or LogIn' }} />
      </Drawer.Navigator>
  )

}

function App() {
  
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator  /*initialRouteName='Home'*/> 
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Home" component={HomePage} options={{headerShown: true}}/> */}
      <Stack.Screen name="Log" component={LogPage} options={{title: "Register or LogIn"}} />
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{title: "All Categories"}} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

  animationContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:16,
    backgroundColor:"#2C2B3C",
    color:'White',
  },

});

export default App;
