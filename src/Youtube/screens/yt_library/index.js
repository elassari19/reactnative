import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Icons, SvgIcon } from '../../../assets/Icons';
import { ScrollViewLayout, Text, TopLayerView, ViewLayout } from '../../../layout'
import { Yt_video } from '../../Yt-components';

const title = 'video title video ';
const { history, play, download, later } = Icons.path;

const index = ({navigation}) => {

  const [newest, setNewest] = useState(false);
  const [isSelect, setIsSelect] = useState(false)

  return (
    <ScrollView style={{flex: 1}}>

      <ViewLayout borderWidth={[,,1]} borderColor={[,,'#0001']}>

        <Text font={[12]} padding={[,,,5]}>Recent</Text>

        {/* scroll the last history video whatched */}
        <ScrollViewLayout scrollHorizontall>
          {
            Array(30).fill('').map((_,index) => (
              <ViewLayout key={index} margin={[5,5,5,5]} dimensions={[140,140]} >
                <Yt_video onPress={()=>navigation.navigate('video')} dimensions={[,90]} />
                <Text font={[11]} padding={[5,2,,2]}>{title.length<40?title:title.slice(0,40)+'...'}</Text>
                <Text font={[11, 500]} padding={[,2,,2]} colored={[,'#0008']}>channel name</Text>
              </ViewLayout>
            ))
          }
        </ScrollViewLayout>

      </ViewLayout>

      <ViewLayout borderWidth={[,,1]} borderColor={[,,'#0001']} padding={[10,,10,10]} >

          {/* history */}
          <ViewLayout flexFeatures={[,'row',,'center']}  padding={[8,,8]}>
            <TopLayerView layerColored onPress={()=>navigation.navigate('history')} />
            <SvgIcon color={'#000'} svg={history}/>
            <Text padding={[,,,15]}>history</Text>
          </ViewLayout>
          
          {/* history */}
          <ViewLayout flexFeatures={[,'row',,'center']}  padding={[8,,8]}>
            <TopLayerView layerColored onPress={()=>navigation.navigate('yourVideos')} />
            <SvgIcon color={'#000'} svg={play} viewBox={'5 5 24 24'} />
            <Text padding={[,,,15]}>Your videos</Text>
          </ViewLayout>

          {/* your videos */}
          <ViewLayout flexFeatures={[,'row',,'center']}  padding={[8,,8]}>
            <TopLayerView layerColored onPress={()=>navigation.navigate('download')} />
            <SvgIcon color={'#000'} svg={download.d2} viewBox={'5 0 40 40'} />
            <ViewLayout padding={[,,,15]}>
              <Text>Download</Text>
              <Text font={[10]} colored={[,'#000a']}>20 recommendations</Text>
            </ViewLayout>
          </ViewLayout>

          
          {/* history */}
          <ViewLayout flexFeatures={[,'row',,'center']}  padding={[8,,8]}>
            <TopLayerView layerColored onPress={()=>navigation.navigate('watchLater')} />
            <SvgIcon color={'#000'} svg={later}/>
            <ViewLayout padding={[,,,15]}>
              <Text>Watch later</Text>
              <Text font={[10]} colored={[,'#000a']}>20 videos</Text>
            </ViewLayout>
          </ViewLayout>

      </ViewLayout>

      {/* playlist */}
      <ViewLayout padding={[5,5,10,10]}>

        {/* how to display playlis */}
        {
          isSelect && <TopLayerView dimensions={[120]} position={[15,-240]} colored={['#fff']} layerColored onPress={()=>setIsSelect(false)}>
            <Text onPress={()=>setNewest(true )} padding={[6,,6,10]} colored={[ newest?'#0002':'']} >A-Z</Text>
            <Text onPress={()=>setNewest(false)} padding={[6,,6,10]} colored={[!newest?'#0002':'']} >Recently added</Text>
          </TopLayerView>
        }

        {/* the playlist section + select type */}
        <ViewLayout flexFeatures={[, 'row','space-between']} padding={[5,5,,5]}>
          <Text font={[12]}>Playlist</Text>
          <ViewLayout flexFeatures={[,'row']}>
            <TopLayerView layerColored onPress={()=>setIsSelect(true)} />
            <Text font={[11,500]}>{newest?'A-Z':'Recently added'}</Text>
            <SvgIcon svg={Icons.path.arrow} viewBox={'0 0 30 30'} />
          </ViewLayout>
        </ViewLayout>

        {/* new playlist */}
        <ViewLayout flexFeatures={[,'row']} padding={[8,,8,5]}>
          <TopLayerView onPress={()=>navigation.navigate('newPlaylist')} layerColored />
          <SvgIcon svg={Icons.path.create} color={'#00d'} />
          <Text padding={[,,,15]} colored={[,'#00d']}>New playlist</Text>
        </ViewLayout>

        {/* liked videos */}
        <ViewLayout flexFeatures={[,'row']} padding={[8,,8,5]}>
          <TopLayerView onPress={()=>navigation.navigate('likedVideos')} layerColored />
          <SvgIcon svg={Icons.path.like} color={'#000'} />
          <ViewLayout padding={[,,,15]}>
            <Text>Liked videos</Text>
            <Text font={[10]}>1405 videos</Text>
          </ViewLayout>
        </ViewLayout>

        {/* display all playlist */}
        {
            Array(30).fill('').map((_,index) => (
              <ViewLayout key={index} margin={[10,,]} flexFeatures={[,'row',,'center']}>
              <TopLayerView onPress={()=>navigation.navigate('playlist')} layerColored />
              <ViewLayout dimensions={[50,50]} borderRadius={[4,4,4,4]} colored={['#d002']} />
              <ViewLayout margin={[,,,15]}>
                <Text>playlist title</Text>
                <Text font={[10]} colored={[,'#0009']}>8 videos</Text>
              </ViewLayout>
            </ViewLayout>
          ))
        }

      </ViewLayout>

    </ScrollView>
  )
}

export default index
