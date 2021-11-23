import React from 'react'
import { ScrollViewLayout } from '../../../../layout';
import { Yt_smallVideo, Yt_sortedVideos } from '../../../Yt-components'

const array = ['','','','','','','','','','',''];
 
const videos = ({navigation}) => {
  return (
    <ScrollViewLayout>

      {/* how to display the playlist by newest or oldest */}
      <Yt_sortedVideos />

      {/* map method to render the videos of channel */}
      {
          array.map((_, index) => (
            <Yt_smallVideo key={index} onPress={()=>navigation.navigate('video')} />
          ))
        }
    </ScrollViewLayout>
  )
}

export default videos
