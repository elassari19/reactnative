import React from 'react'
import { ViewLayout } from '../../../layout'
import { Yt_chaneelState, Yt_comments, Yt_eventsVideo, Yt_information } from '..'
import { Icons } from '../../../assets/Icons'

const index = ({onPress}) => {

  return (
    <ViewLayout
      flexFeatures={[1]}
      padding={[8]}
    >

      {/* title & views & time */}
      <Yt_information title={' video title video title video title video title video title video title video title'} views={345421} times={134541231234} icon={Icons.path.arrow} />

      {/* channel avatar + name + subscribed + notifications */}
      <Yt_chaneelState />

      {/* icons events */}
      <Yt_eventsVideo />

      {/* the comments nav */}
      <Yt_comments onPress={onPress}/>


    </ViewLayout>
  )
}

export default index

// thinking about handle the details items