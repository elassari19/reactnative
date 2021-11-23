import { useNavigation } from '@react-navigation/native'
import { Video } from 'expo-av'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { Icons, SvgIcon, SvgIconPressable } from '../../../../assets/Icons'
import { ConvertNumbers, ConvertTime } from '../../../../constants'
import { ScrollViewLayout, Text, TopLayerView, ViewLayout } from '../../../../layout'
import { Yt_avatar, Yt_post } from '../../../Yt-components'

const array = ['','','','','','','','','','','',''];

const community = () => {

  const [report, setReport] = useState(false);
  const [like, setLike] = useState({like: false, disLike: false});
  const [image, setImage] = useState(true)

  return (
    <ScrollViewLayout flexFeatures={[1]}>

      {/* layer to display the options of report posts */}
      {
        report && <TopLayerView onPress={()=>setReport(false)} colored={['#fff']} position={[580,]}>
          {/* <ViewLayout flexFeatures={[12]} /> */}

          <ViewLayout flexFeatures={[1, 'row']} padding={[10,10,10,10]} borderWidth={[,,1]} borderColor={[,,'#0001']}>
            <TopLayerView layerColored={['#0000']} onPress={()=>setReport(false)} />
            <SvgIcon svg={Icons.path.report} color={'#000'} />
            <Text margin={[,,,10]} font={[16]}>Report</Text>
          </ViewLayout>

          <ViewLayout flexFeatures={[1, 'row']} padding={[10,10,10,10]}>
            <TopLayerView layerColored={['#0000']} onPress={()=>setReport(false)} />
            <SvgIcon svg={Icons.path.delete_} color={'#000'} />
            <Text margin={[,,,10]} font={[16]}>Cancel</Text>
          </ViewLayout>

        </TopLayerView>
      }

      {
        array.map((_,index) => (
          <Yt_post key={index} setReport={setReport} image={image} setLike={setLike} liking={like} />
        ))
      }

    </ScrollViewLayout>
  )
}

export default community
