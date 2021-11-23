import React from 'react'
import { ViewLayout } from '../../../layout'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { Yt_avatar, Yt_information } from '..'

const index = ({title, onPress, views, times}) => {

  return (
    <ViewLayout
      flexFeatures={[1, 'row', ,'center']}
      padding={[,,,10]}
    >

      <Yt_avatar source={require('../../../assets/account.jpg')} width={30} height={30} />

      <Yt_information title={title} views={views} times={times} />

      {/* the three dots */}
      <SvgIconPressable onPress={onPress} svg={Icons.path.threeDots} viewBox={'0 0 35 35'} color={'#000'} rotate={90} />

    </ViewLayout>
  )
}

export default index
