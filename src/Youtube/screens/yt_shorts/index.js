import React from 'react'
import { Dimensions } from 'react-native'
import { ScrollViewLayout, ViewLayout, Text, TopLayerView, Image } from '../../../layout'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { ConvertNumbers } from '../../../constants'

const array = ['','','','','','','','','','']
const {width} = Dimensions.get('window');
const title = 'shorts title text # shorts';
const index = ({navigation}) => {

  return (
    <ScrollViewLayout padding={[20]}>

      {/* detials of short and name of channel */}
      <ViewLayout flexFeatures={[, 'row']} padding={[,10,20,20]}>

        {/* video of short sound */}
        <ViewLayout  dimensions={[80,80]} borderRadius={[6,6,6,6]}>

          <TopLayerView position={[25,-25]} layerDimensions={[80,80]}>
            <SvgIconPressable svg={Icons.path.play} />
          </TopLayerView>
          <Image source={require('../../../assets/phone.jpg')} />

        </ViewLayout>

        <ViewLayout flexFeatures={[1,,'space-around']} padding={[,,,15]} dimensions={[,80]}>

        {/* title of video sound */}
        <Text font={[17, 600]} >{title.length>25? title.slice(0,25)+'...' : title}</Text>

        {/* channel name */}
        <Text font={[13]} colored={[, '#0008']}>channel name</Text>

        <ViewLayout flexFeatures={[, 'row']}>

          {/* favorite icon */}
          <SvgIconPressable svg={Icons.path.bookMark} viewBox={'0 -10 60 60'} color={'#000'} />

          {/* favorites text */}
          <Text font={[14, 450]} padding={[,,,2]}>FAVORITES</Text>

        </ViewLayout>

        </ViewLayout>

        <SvgIconPressable onPress={()=>navigation.navigate('video')} svg={Icons.path.arrow} rotate={-90} flexFeatures={[,,,,'end']} color={'#000'} viewBox={'0 0 20 20'} />

      </ViewLayout>

      {/* text 'shorts useing the sound' */}
      <Text padding={[,,,20]} font={[14,500]}>shorts useing the sound</Text>

      <ViewLayout styles={{flexWrap:'wrap'}} padding={[15,,30]} flexFeatures={[1,'row','flex-start','flex-start',,'wrap']} >

        {/* render the shorts videos */}
        {
          array.map((_,index) => (
            <ViewLayout margin={[,,1,1]} key={index} dimensions={[(width-4)/3, 250]} >
              <TopLayerView
                onPress={()=>navigation.navigate('explore')}
                layerColored position={[230]}
              >
                <Text font={[11,500]} padding={[,,,10]} colored={[,'#fff']}>
                  {ConvertNumbers(132454)}views
                </Text>
              </TopLayerView>
              <Image source={require('../../../assets/phone.jpg')} />
            </ViewLayout>
          ))
        }

      </ViewLayout>
      
    </ScrollViewLayout>
  )
}

export default index
