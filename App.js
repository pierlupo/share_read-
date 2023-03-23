import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import HomePage from './screens/HomePage';
import LogPage from './screens/LogPage';

const Stack = createNativeStackNavigator();


function App() {
  
  
  return (


    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomePage} options={{headerShown: true}}/>
      <Stack.Screen name="Log" component={LogPage} options={{title: "Register or LogIn"}} />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({

});

export default App;
