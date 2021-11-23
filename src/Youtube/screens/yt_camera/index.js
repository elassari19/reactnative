import React from 'react'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { Text, ViewLayout } from '../../../layout'

const index = ({navigation}) => {
  return (
    <ViewLayout flexFeatures={[1]} colored={['#333']} padding={[15,,,15]}>

      <SvgIconPressable 
        onPress={()=>navigation.goBack()}
        svg={Icons.path.delete_} flexFeatures={[,,'center','center']} color={'#fff'} colored={['#000']} dimensions={[25,25]} borderRadius={[12,12,12,12]} 
      />

      <ViewLayout flexFeatures={[1,,'center','center']}>

        <Text font={[17, 500]} colored={[,'#fff']}>Create a short</Text>
        <Text font={[12, 500]} colored={[,'#fff']} padding={[10,,10]}>Allow access to your camera and microphone</Text>
        <Text onPress={()=>console.log('allow camera and microphone')} font={[15, 500]} colored={['#fff']} padding={[5,5,5,5]}>ALLOW ACCESS</Text>

      </ViewLayout>
    </ViewLayout>
  )
}

export default index
