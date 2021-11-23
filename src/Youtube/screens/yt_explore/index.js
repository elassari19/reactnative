import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, ImageBackground, ScrollView } from 'react-native'
import Svg, { Line, Path } from 'react-native-svg'
import { Icons, SvgIcon, SvgIconPressable } from '../../../assets/Icons'
import { ConvertNumbers } from '../../../constants'
import { Image, PressableLayout, ScrollViewLayout, Text, TopLayerView, ViewLayout } from '../../../layout'
import { Yt_avatar } from '../../Yt-components'
import ShortActions from './ShortActions'

const array = ['','','','','','','',''];
const {height} = Dimensions.get('window');

const index = () => {

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(true);
  const Subscrib = subscribe ? 'SUBSCRIBED' : 'SUBSCRIB';
  const [shortActions, setShortActions] = useState(false)
  const [liking, setLiking] = useState({like: false, dislike: true})

  return (
    <ScrollView pagingEnabled>
    {
      array.map((_,index)=>(
        <ImageBackground key={index} source={require('../../../assets/phone.jpg')} resizeMode='cover' style={{flex: 1, height: height-90}} >

        {
          // handle action of short
          shortActions && <ShortActions onPress={()=>setShortActions(false)} />
        }

        {/* container */}
        <ViewLayout flexFeatures={[, 'row']} dimensions={[, height-90]}>

          {/* title + avatar + channel name + subscrib status */}
          <ViewLayout flexFeatures={[13, 'row']} padding={[,10,,10]}>

            {/* this view for handle positon */}
            <ViewLayout flexFeatures={[,,,,'end']}>

              {/* title */}
              <Text colored={[, '#fff']} font={[16]}>shorts title</Text>

            <ViewLayout flexFeatures={[1, 'row']} padding={[10,,10,]}>

              {/* avatar */}
              <Yt_avatar source={require('../../../assets/account.jpg')} width={20} height={20} />

              {/* channel name */}
              <Text colored={[, '#fff']} font={[12]} margin={[,10,,10]}>the name fo channel</Text>

              {/* subscrib */}
              {
                subscribe
                ?<Text onPress={()=>setSubscribe(false)} colored={['#0005', '#fff8']} font={[11, 700]} padding={[,5,,5]}>{Subscrib}</Text>
                :<Text onPress={()=>setSubscribe(true)} colored={['#f00', '#fff']} font={[11, 700]} padding={[,5,,5]}>{Subscrib}</Text>
              }

            </ViewLayout>


            </ViewLayout>

          </ViewLayout>

          {/* contain all icons on right side */}
          <ViewLayout flexFeatures={[2,,,'center']} padding={[10,,10]}>

            {/* camera */}
            <ViewLayout flexFeatures={[, 'row',,'center']} padding={[10,,10,10]}>
              <TopLayerView onPress={()=>navigation.navigate('short_camera')} layerColored />
              <Svg width={50} height={30} fill='#fff' viewBox='0 0 350 350'  strokeWidth='5'>
                <Path d="M162.5,113.997c-37.016,0-67.131,30.114-67.131,67.13c0,37.016,30.115,67.13,67.131,67.13   c37.015,0,67.129-30.114,67.129-67.13C229.629,144.111,199.515,113.997,162.5,113.997z M162.5,236.257   c-30.399,0-55.131-24.731-55.131-55.13c0-30.398,24.731-55.13,55.131-55.13c30.398,0,55.129,24.731,55.129,55.13   C217.629,211.525,192.898,236.257,162.5,236.257z"/>
                <Path d="M287.566,110.029h-35.564c-3.313,0-6,2.687-6,6v22.343c0,3.314,2.687,6,6,6h35.564c3.314,0,6-2.686,6-6v-22.343   C293.566,112.716,290.88,110.029,287.566,110.029z M281.566,132.372h-23.564v-10.343h23.564V132.372z"/>
                <Path d="M308.754,80.548h-82.347l-16.569-33.892c-1.007-2.059-3.099-3.364-5.391-3.364h-83.898c-2.292,0-4.384,1.306-5.391,3.365   L98.591,80.548H16.242C7.286,80.548,0,87.647,0,96.374v169.507c0,8.727,7.286,15.826,16.242,15.826h292.512   c8.957,0,16.244-7.1,16.244-15.826V96.374C324.998,87.647,317.711,80.548,308.754,80.548z M312.998,265.881   c0,2.109-1.904,3.826-4.244,3.826H16.242c-2.339,0-4.242-1.717-4.242-3.826V96.374c0-2.109,1.903-3.826,4.242-3.826h86.094   c2.292,0,4.384-1.306,5.391-3.365l16.567-33.892h76.408l16.569,33.893c1.007,2.059,3.099,3.364,5.391,3.364h86.092   c2.34,0,4.244,1.717,4.244,3.826V265.881z"/>
              </Svg>
            </ViewLayout>

            {/* this view for take the space between the camera and three dots */}
            <ViewLayout flexFeatures={[1]} />

            {/* three dots */}
              <SvgIconPressable onPress={()=>setShortActions(true)} svg={Icons.path.threeDots} width={40} height={60} viewBox={'0 0 28 28'} color={'#fff'} />

            {/* like */}
            <ViewLayout dimensions={['100%',60]} flexFeatures={[,,'space-around','center']} margin={[,,15]}>
              <TopLayerView layerColored onPress={()=>setLiking({like: !liking.like, dislike: false})} />
              <SvgIconPressable svg={Icons.path.liked} width={40} height={30} viewBox={'0 0 22 22'} color={liking.like ? '#5f5fff' : '#fff'} />
              <Text font={[8]} colored={[,'#fff']}>{ConvertNumbers(1645789)!=0?ConvertNumbers(1645789):'Like'}</Text>
            </ViewLayout>

            {/* dislike */}
            <ViewLayout dimensions={['100%',60]} flexFeatures={[,,'space-around','center']} margin={[,,15]}>
              <TopLayerView layerColored onPress={()=>setLiking({like: false, dislike: !liking.dislike})} />
              <SvgIconPressable svg={Icons.path.disLiked} width={40} height={30} viewBox={'0 0 22 22'} color={liking.dislike ? '#5f5fff' : '#fff'} />
              <Text font={[8]} colored={[,'#fff']}>{ConvertNumbers(0)!=0?ConvertNumbers(1645789):'DisLike'}</Text>
            </ViewLayout>

            {/* comments */}
            <ViewLayout dimensions={['100%',60]} flexFeatures={[,,'space-around','center']} margin={[,,15]}>
              <TopLayerView layerColored onPress={()=>navigation.navigate('short_comment')} />
              <SvgIconPressable svg={Icons.path.comments} width={40} height={30} viewBox={'0 0 22 22'} color={'#fff'} />
              <Text font={[8]} colored={[,'#fff']}>{ConvertNumbers(0)!=0?ConvertNumbers(1645789):'Comments'}</Text>
            </ViewLayout>

            {/* share */}
            <ViewLayout dimensions={['100%',60]} flexFeatures={[,,'space-around','center']} margin={[,,15]}>
              <TopLayerView layerColored onPress={()=>console.log('share')} />
              <SvgIconPressable svg={Icons.path.share} width={40} height={30} viewBox={'0 0 22 22'} color={'#fff'} />
              <Text font={[8]} colored={[,'#fff']}>Share</Text>
            </ViewLayout>

            {/* short sound screen */}
            <PressableLayout onPress={()=>navigation.navigate('sound_shorts')} dimensions={[40,40]} colored={['#d00']} borderRadius={[6,6,6,6]} borderWidth={[3,3,3,3]} borderColor={['#fff','#fff','#fff','#fff']} >
              <Image source={require('../../../assets/phone.jpg')}/>
            </PressableLayout>

          </ViewLayout>

        </ViewLayout>

      </ImageBackground>
      )) 


    }

    </ScrollView>
  )
}

export default index
