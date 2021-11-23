import React from 'react'
import { View, Text } from 'react-native'
import exploreData from './data'

const index = () => {

  const { headerLeft, headerRight } = exploreData;

  return (
    <View>

      <Yt_header headerLeft={headerLeft} headerRight={headerRight} />

      <Text>voice</Text>

    </View>
  )
}

export default index
