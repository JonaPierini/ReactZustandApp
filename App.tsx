 import React from 'react'
import { View } from 'react-native'
import { HomeScreen } from './src/screen/home/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTapNavigators } from './src/navigators/BottomTapNavigators'
 
 export const App = () => {
   return (
    <NavigationContainer>
       <BottomTapNavigators></BottomTapNavigators>
    </NavigationContainer>
     
   )
 }
 
 