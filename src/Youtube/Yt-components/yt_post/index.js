import { useNavigation } from '@react-navigation/native'
import { Video } from 'expo-av'
import React from 'react'
import { Image } from 'react-native'
import { Yt_avatar } from '..'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { ConvertNumbers, ConvertTime } from '../../../constants'
import { Text, TopLayerView, ViewLayout } from '../../../layout'

const {like, disLike, liked, disLiked} = Icons.path;

const index = ({setReport, image, liking, setLike}) => {

  const navigation = useNavigation();

  return (
    <ViewLayout padding={[5,,8,8]} margin={[,,5]} colored={['#d00']}>
      {/* post container */}

    {/* post header container */}
    <ViewLayout flexFeatures={[, 'row']} margin={[,,5]} padding={[,,8,]}>

      {/* layer to handle press */}
      <TopLayerView layerDimensions={['92%']} layerColored={['#0000']} onPress={()=>navigation.navigate('channel_home')} />

      {/* channel avatar */}
      <Yt_avatar source={require('../../../assets/account.jpg')} width={35} height={35} />

      {/* channel name and post date created */}
      <ViewLayout flexFeatures={[1]} margin={[,,,10]}>
        <Text font={[14, 500]}>channel name</Text>
        <Text font={[12]} colored={[,'#0008']}>{ConvertTime(1000 * 60 * 60 * 24 * 31 * 12)}</Text>
      </ViewLayout>

      {/* icon three dots to report the post */}
      <SvgIconPressable svg={Icons.path.threeDots} rotate={90} onPress={()=>setReport(true)} />

    </ViewLayout>

    {/* post image/video */}

    {/* container of content */}
    <Text font={[14]} padding={[5,,5]}>text content</Text>

    {/* display the post image/video/none */}
    <ViewLayout>
      {image && <Image source={require('../../../assets/img.jpg')}style={{width: '98%', height: 300}}/>}
      {!image && <Video source={require('../../../assets/img.jpg')} style={{width: '98%', height: '70%'}}/>}
    </ViewLayout>

    <ViewLayout flexFeatures={[1, 'row']} padding={[10,10,10,10]}>
      <SvgIconPressable onPress={()=>setLike({like: !liking.like, disLike: false})} svg={liking.like?liked:like} color={"#000"} />
      <Text margin={[,10]}>{ConvertNumbers(165)}</Text>
      <SvgIconPressable onPress={()=>setLike({disLike: !liking.disLike, like: false})} svg={liking.disLike?disLiked:disLike} color={"#000"} />
      <Text margin={[,200]}>{ConvertNumbers(55)}</Text>
      <SvgIconPressable onPress={()=>navigation.navigate('comments')} svg={Icons.path.comments} color={"#000"} />
      <Text >{ConvertNumbers(4654)}</Text>
    </ViewLayout>

  </ViewLayout>
    
  )
}

export default index
