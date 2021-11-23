import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Icons } from '../../../assets/Icons';
import { ScrollViewLayout, Text, TopLayerView, ViewLayout } from '../../../layout';
import { Yt_bottomCheats, Yt_chaneelState, Yt_comments, Yt_description, Yt_eventsVideo, Yt_information, Yt_playVideoDetails, Yt_video, Yt_videoDetails } from '../../Yt-components';

const array = [0,0,0,0,0,0,0,0];
const videoTitle = ' video title video title video title video title video title video title video title';

const index = ({navigation}) => {

  const [isCommnets, setisCommnets] = useState(false)
  const [isDescription, setIsDescription] = useState(false)

  return (
    <ViewLayout flexFeatures={[1]}>

      {/* video play */}
      <Yt_video id={index} />



      {
      isCommnets 
      ?<Yt_bottomCheats state={isCommnets} setState={setisCommnets} data={[...array,...array,...array]} />

      :isDescription
      ?<ScrollViewLayout borderRadius={[20,20]}>
          <TopLayerView layerDimensions={[, 500]}>
            <Yt_description onPress={()=>setIsDescription(false)} />
          </TopLayerView>
      </ScrollViewLayout>

      :<ScrollViewLayout>

        {/* details of the current video wish played */}
        <ViewLayout flexFeatures={[1]}>
          {/* title & views & time */}
          <Yt_information
            onPress={()=>setIsDescription(true)}
            title={videoTitle}
            views={345421} times={134541231234} 
            icon={Icons.path.arrow}
          />

          {/* channel avatar + name + subscribed + notifications */}
          <Yt_chaneelState />

          {/* icons events */}
          <Yt_eventsVideo />

          {/* the comments nav */}
          <Yt_comments onPress={()=>setisCommnets(!isCommnets)}/>

        </ViewLayout>


        {/* scroll list video */}
        <ViewLayout flexFeatures={[11]}>
          {
            array.map((_, index) => (
            <ViewLayout
              key={index}
              dimensions={[, 300]}
              styles={{marginBottom: 5}}
            >
  
              <Yt_video onPress={()=>navigation.push('video', {id: index}) } />
  
              <Yt_videoDetails title={'title'} statistic={'statistic'} />
  
  
            </ViewLayout>
          ))
        }
        </ViewLayout>

      </ScrollViewLayout>
      }
        

    </ViewLayout>
  )
}

export default index
