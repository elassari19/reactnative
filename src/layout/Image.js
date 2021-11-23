import React from 'react'
import { Image } from 'react-native'

const Container = ({dimensions=[null, null], source, styles}) => {
  return (
    <Image
      source={source}
      style={[
        {
        flex: 1,
        width:  dimensions[0] || null,
        height: dimensions[0] || null
      },
      styles
    ]}
    />
  )
}

export default Container
