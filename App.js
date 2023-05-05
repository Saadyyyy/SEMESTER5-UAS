import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/Login'
import Splash from './src/screens/Splash'
import Register from './src/screens/Register'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SplashScreen' component={Splash}/>
        <Stack.Screen name='LoginScreen' component={Login}/>
        <Stack.Screen name='RegisterScreen' component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
