import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useProfileStore } from '../../store/ProfileStore'
import { style } from '../../config/theme'

export const ProfileScreen = () => {
  const { name, email, changeProfile } = useProfileStore()

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Pressable style={style.primaryButton} onPress={() => useProfileStore.setState({name: 'Juan Pedro', email: 'Otro'})}>
        <Text>Cambiar nombre</Text>
      </Pressable>
      <Pressable style={style.primaryButton} onPress={() => (changeProfile('Jona', 'jona@gmail.com'))}>
        <Text>Volver al valor que figura en el store</Text>
      </Pressable>
    </View>
  )
}

 