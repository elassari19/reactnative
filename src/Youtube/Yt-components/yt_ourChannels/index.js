import React, { useState } from 'react'
import { Yt_avatar, Yt_information } from '..'
import { ConvertNumbers } from '../../../constants'
import { Text, ViewLayout } from '../../../layout'

const index = () => {

  const [subscrib, setSubscrib] = useState(false)

  return (
    <ViewLayout flexFeatures={[1, 'row',,'center']} padding={[8,,8]}>

      <ViewLayout flexFeatures={[2,,,'center']}>
        <Yt_avatar source={require('../../../assets/account.jpg')} />
      </ViewLayout>

      <ViewLayout flexFeatures={[3,, 'space-around']} dimensions={[,60]}>

        <Text>channel name</Text>
        <Text font={[12]} colored={[,'#0008']}>{ConvertNumbers(164654)} subscribers * {ConvertNumbers(12545)} videos </Text>
        {
          subscrib
          ?<Text onPress={()=>setSubscrib(false)} font={[12, 500]} colored={[,'#000d']} >SUBSCRIBED</Text>
          :<Text onPress={()=>setSubscrib(true)} font={[12, 500]} colored={[,'#f00e']} >SUBSCRIBE</Text>
        }

      </ViewLayout>

    </ViewLayout>
  )
}

export default index
