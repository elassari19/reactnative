import React, { useState } from 'react'
import { Image } from 'react-native'
import { ConvertNumbers } from '../../../../constants'
import { ScrollViewLayout, Text, TopLayerView, ViewLayout } from '../../../../layout'
import { Yt_avatar, Yt_smallVideo, Yt_video, Yt_videoDetails } from '../../../Yt-components'

const home = ({navigation}) => {

  const [SUBSCRIBE, setSUBSCRIBE] = useState(true);
  let scrib = SUBSCRIBE ? 'SUBSCRIBED' : 'SUBSCRIBE';
  let clr = SUBSCRIBE ? '#d00' : '#000';

  const array = ['','','','','','','','','','',''];

  return (
    <ScrollViewLayout styles={{flex: 1}}>
      {/* channel thumbnail */}
      <ViewLayout dimensions={[, 150]} colored={['#d003']}>
        <TopLayerView colored={['#fff0']} flexFeatures={[,, 'center', 'center']}>
          <Text colored={[, '#f00']} font={[30, 500, , 2]}>
            channel description
          </Text>
        </TopLayerView>
        <Image style={{width: '100%', height: '100%'}} source={require('../../../../assets/img.jpg')} />
      </ViewLayout>

      {/* channel avatar + name + subsribing */}
      <ViewLayout dimensions={[, 110]} flexFeatures={[, 'row', 'center', 'center']}>
        {/* avatar */}
        <Yt_avatar source={require('../../../../assets/account.jpg')} width={70} height={70} />

        {/* channel info */}
        <ViewLayout flexFeatures={[,, 'space-around', 'space-around']} dimensions={['65%', 70]} padding={[,,, 10]}>

          <Text font={[18, 600,,,,'capitalize']}>channel name</Text>
          <Text font={[12, 500]} colored={[, '#0008']}>{ConvertNumbers(236546)} Subsribers</Text>
          <Text 
            onPress={()=>setSUBSCRIBE(!SUBSCRIBE)}
            font={[12, 600]} colored={[, clr]}>{scrib}
          </Text>

        </ViewLayout>

      </ViewLayout>

      {/* root video channel */}
      <ViewLayout borderWidth={[,,1]} borderColor={[,,'#0003']} padding={[,,15]}>
        <Yt_video onPress={()=>navigation.navigate('video')} />
        <Yt_videoDetails title={'title'} statistic={'statistic'} views={5892045} times={65756123485} />
      </ViewLayout>

      {/* other channel videos */}
      <ViewLayout padding={[5,5,5,5]}>
        {
          array.map((_, index) => (
            <Yt_smallVideo key={index} onPress={()=>navigation.navigate('video')} />
          ))
        }
      </ViewLayout>

      {/* short videos */}
      <ViewLayout padding={[5,,5]}>

        <Text font={[17, 400]} dimensions={[, 30]} padding={[,,,15]}>Shorts</Text>
        <ViewLayout flexFeatures={[1, 'row']} styles={{ flexWrap: 'wrap' }}>
          {
            array.map((_, index) => (
              <Yt_video key={index} dimensions={[150, 220]} margin={[1,1,1, ]} onPress={()=>navigation.navigate('video')} />
            ))
          }

        </ViewLayout>

      </ViewLayout>

    </ScrollViewLayout>

  )
}

export default home
