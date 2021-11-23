import React from 'react'
import { View, Text } from 'react-native'
import Svg from 'react-native-svg'
import { PressableLayout } from '.'

const svg = ({ children, onPress, viewBox, fill, dimensions=[24,24]}) => {
  return (
    <PressableLayout onPress={onPress}>

      <Svg viewBox={viewBox} fill={fill} width={dimensions[0]} height={dimensions[1]} >
        {children}
      </Svg>

    </PressableLayout>
  )
}

export default svg
