import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { Text, TopLayerView, ViewLayout } from '../../../layout'
import { Yt_video, Yt_avatar, Yt_information } from '../../Yt-components'
import actions from './actions_data'

const index = () => {

  const array = [0,0,0,0,0,0,0,0];
  const navigation = useNavigation();
  const [videoActions, setVideoActions] = useState(false)

  return (
    <ScrollView 
      style={{ flex: 1 }}
      showsHorizontalScrollIndicator= {false}
    >

      {/* this a top layer view to display the options of video action */}
      {
        videoActions
        && <TopLayerView onPress={()=>setVideoActions(false)} colored={['#fff']} position={[400]} padding={[,,,5]}>
          {
            actions.map((item,index) => (
              <ViewLayout key={index} flexFeatures={[1, 'row']} padding={[8,,8,8]}>
                <SvgIconPressable onPress={()=>setVideoActions(false)} svg={item.icon} color={'#000'} viewBox={item.view} />
                <Text onPress={()=>setVideoActions(false)} padding={[,,,10]}>{item.label}</Text>
              </ViewLayout>
            ))
          }
          <ViewLayout flexFeatures={[1, 'row']} padding={[8,,8,8]} borderWidth={[1]} borderColor={['#0001']}>
              <SvgIconPressable onPress={()=>setVideoActions(false)} svg={Icons.path.delete_} color={'#000'} />
              <Text onPress={()=>setVideoActions(false)} padding={[,,,10]}>Cancel</Text>
            </ViewLayout>
        </TopLayerView>
      }

      {/* use the map method to render home videos */}
      {
        array.map((_, index) => (
          <ViewLayout
            key={index}
            dimensions={[, 290]}
          >

            {/* video container */}
            <Yt_video id={index} onPress={()=>navigation.navigate('video', {id: index}) } />

            {/* video details */}
            <ViewLayout
              flexFeatures={[1, 'row']}
              padding={[10,,,10]}
            >

              {/* avatar */}
              <Yt_avatar source={require('../../../assets/account.jpg')} width={30} height={30} />

              {/* title & statistic infromation */}
              <Yt_information padding={[,,,5]} title={'title'} views={1564654} times={1265465415546} />

              {/* the three dots to handle the video actions */}
              <SvgIconPressable  onPress={()=>setVideoActions(true)} svg={Icons.path.threeDots} viewBox={'0 0 30 30'} color={'#000'} rotate={90} />

            </ViewLayout>

          </ViewLayout>
        ))
      }

    </ScrollView>
  )
}

export default index;