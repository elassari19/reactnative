import React from 'react'
import { ScrollViewLayout } from '../../../../layout'
import { Yt_playlistVideo, Yt_sortedVideos } from '../../../Yt-components'

const array = ['','','','','','','','','','',''];

const playlists = () => {

  return (
    <ScrollViewLayout flexFeatures={[1]} dimensions={[,80]}>

      {/* how to display the playlist by newest or oldest */}
      <Yt_sortedVideos />

      {/* map method to render all playlist */}
      {
        [...array,...array].map((_,index) => (

          // this component containe the structur of playlist
          <Yt_playlistVideo key={index} playlistLenght={array.length} />
        ))
      }

    </ScrollViewLayout>
  )
}

export default playlists
