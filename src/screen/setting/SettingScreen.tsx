import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useCounterStore } from '../../store/CounterStore'
import { useNavigation } from '@react-navigation/native'

export const SettingScreen = () => {
    const {count, inc} = useCounterStore()
     
      const navigation = useNavigation();
      useEffect(() => {
        navigation.setOptions({
         title: `Count ${count}`,
       });
      }, [count]);
  
  return (
    <View>
      <Text>SettingScreen</Text>
      <Text>{count}</Text>
      <Button title='Incrementar' onPress={inc}></Button>
    </View>
  )
}

 
