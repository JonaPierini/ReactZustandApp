import React from 'react'
import { Text, View } from 'react-native'
import { useProfileStore } from '../../store/ProfileStore'
import { useCounterStore } from '../../store/CounterStore'
 



export const HomeScreen = () => {

  const { name, email} = useProfileStore()
  const {count } = useCounterStore()


  return (
    <View>
      <Text>HomeScreennnn</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>Count: {count}</Text>
    </View>
  )
}

 
