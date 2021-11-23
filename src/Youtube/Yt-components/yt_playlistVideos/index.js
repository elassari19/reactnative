import React from 'react'
import { Yt_video } from '..';
import { PressableLayout, Text, TopLayerView, ViewLayout } from '../../../layout'
import { SvgIcon, Icons, SvgIconPressable } from '../../../assets/Icons'
import { useNavigation } from '@react-navigation/native';

const index = ({ playlistLenght }) => {

  const navigation = useNavigation();

  return (
    <ViewLayout flexFeatures={[1, 'row', '', '']} padding={[5,5,5,5]}>

      {/* this top layer for handle navigation when pressed */}
      <TopLayerView onPress={()=>navigation.navigate('playlist')} zIndex={2} layerColored={['#0000']} layerDimensions={['90%']} />

      {/* this top layer display on video playlist and containe the lenght playlist */}
      <TopLayerView layerPosition={[5,,,95]} layerColored={['#000a']} position={[15,,,19]} layerDimensions={[60, 90]}>

        <Text font={[16]} padding={[,,,4]} colored={[, '#fff']}>{playlistLenght}</Text>
        <SvgIcon svg={Icons.path.unPlaylist} color={'#fff'} />

      </TopLayerView>

      <Yt_video dimensions={[150, 90]} />

      {/* this view containe the information of playlist */}
      <ViewLayout flexFeatures={[1]} margin={[,,,5]}>
        <Text font={[, 500]}>iqtisad kawkab</Text>
        <Text dimensions={[, 18]} font={[11]} colored={[, '#0008']}>iqtisad kawkab</Text>
        <Text dimensions={[, 18]} font={[11]} colored={[, '#0008']}>{playlistLenght} videos</Text>
      </ViewLayout>

      <SvgIconPressable onPress={()=>console.log('object')} svg={Icons.path.threeDots} rotate={90} dimensions={[20, 25]} />

    </ViewLayout>
  )
}

export default index
