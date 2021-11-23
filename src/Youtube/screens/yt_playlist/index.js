import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Path } from 'react-native-svg'
import { Icons, SvgIcon, SvgIconPressable } from '../../../assets/Icons'
import { TopLayerView, Text, ViewLayout, Svg } from '../../../layout'
import { Download, Share, Yt_smallVideo } from '../../Yt-components';

const array = ['','','','','','','','','','',''];

const { share, download, inPlaylist, unPlaylist, info, loopRandom } = Icons.path;

const index = ({navigation}) => {

  const [downloaded, setDownload] = useState(false);
  const [shares, setShare] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <ScrollView>

      {/* download bottom cheates */}
      {
        downloaded&&<Download onPress={()=>setDownload(false)}/>
      }

      {/* shares bottom cheates */}
      {
        shares&&<Share onPress={()=>setShare(false)} />
      }

      {/* playlist carte */}
      <ViewLayout padding={[10]} borderWidth={[,,1]} borderColor={[,,'#0001']} overflow={'display'}>

        {/* playlist title */}
        <ViewLayout flexFeatures={[, 'row']}>
          <Text font={[16]} dimensions={[320]}>playlist title playlist title  playlist title  playlist title playlist title </Text>
          <SvgIcon svg={Icons.path.create} />
        </ViewLayout>

        {/* name of channel or subject of this playlist */}
        <Text font={[13]} colored={[, '#000a']}>simple name for playlist </Text>

        {/* playlist description */}
        <ViewLayout flexFeatures={[1]} margin={[10]}>
          <Text font={[11]} colored={[, '#0008']}>description of playlist</Text>
        </ViewLayout>

        {/* icons specific for every events */}
        <ViewLayout flexFeatures={[1, 'row', ,'center']} padding={[,,]} overflow={'display'} >

          {/* the play button to start the playlist */}
          <TopLayerView onPress={()=>navigation.navigate('video')} border={[,,'50%']} layerDimensions={[35,35]} layerPosition={[10,10]} layerColored colored={['#d00']} dimensions={[35,35]} overflow={'display'}>
            <SvgIcon svg={Icons.path.play} color={'#fff'} width={26} />
          </TopLayerView>

          <SvgIconPressable onPress={()=>navigation.navigate('video')} svg={loopRandom} width={40} height={20} color={'#000b'} />
          <SvgIconPressable onPress={()=>setShare(true)} svg={share} width={40} height={20} color={'#000b'}  />
          <SvgIconPressable onPress={()=>setSaved(!saved)} svg={saved?inPlaylist:unPlaylist} width={40} height={20} color={'#000b'}  />
          <SvgIconPressable onPress={()=>console.log('more infomation')} svg={info} width={40} height={20} color={'#000b'} viewBox={'0 5 27 27'} />

          <Svg onPress={()=>setDownload(true)} viewBox='-20 -5 60 60' >
            <Path d={download.d1}/>
            <Path d={download.d2}/>
          </Svg>

        </ViewLayout>

      </ViewLayout>

      {/* reder the playlist item videos */}
      <ViewLayout flexFeatures={[1]} padding={[5,,,5]}>

        {/* lenght of videos */}
        <Text font={[12]}> {array.length} videos </Text>
      {
          array.map((_, index) => (
            <Yt_smallVideo key={index} onPress={()=>navigation.navigate('video')} />
          ))
        }
      </ViewLayout>

    </ScrollView>
  )
}

export default index
