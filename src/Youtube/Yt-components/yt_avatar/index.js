import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image } from 'react-native'
import { PressableLayout, ViewLayout } from '../../../layout'

const index = ({source ,width= 40 ,height= 40, margin}) => {

  const navigation = useNavigation();

  return (
    <PressableLayout
      onPress={()=>navigation.navigate('channel')}
    >
    
      <ViewLayout 
        onPress={()=>navigation.navigate('channel')}
        dimensions={[width || 40, height || 40]} borderRadius={[50, 50, 50, 50]} margin={margin}
      >
        <Image style={{width: '100%', height: '100%'}} source={source} />
      </ViewLayout>

    </PressableLayout>
  )
}

export default index
