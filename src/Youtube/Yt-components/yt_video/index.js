import React from 'react'
import { PressableLayout } from '../../../layout'

const index = ({ children, onPress, height, dimensions, padding, margin }) =>{

  return (
    <PressableLayout
      onPress={onPress}
      dimensions={dimensions || [, height || 222]}
      padding={padding}
      margin={margin}
      colored={['#080']}
      border={[1, '#0ad']}
    >

      {children}

      {/* <Text
        font={[20]}
        > */}
        {/* {id} */}
      {/* </Text> */}

    </PressableLayout>
  )
}

export default index