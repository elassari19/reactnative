import React from 'react'
import { Yt_information, Yt_video } from '..'
import { Text, ViewLayout } from '../../../layout'

const index = ({onPress}) => {
  return (
    <ViewLayout flexFeatures={[, 'row']} padding={[5,5,50,5]} dimensions={[, 100]} >
      <Yt_video dimensions={[ 150, 90]} onPress={onPress} />
      <Yt_information dimensions={[, 130]} title={'title sfsdf sfsfsdfsfsdsdfs sdfsfdsfss sdfsfsfdsf sdfsdfsf sdfsdfs '} statistic={'statistic'} views={5892045} times={65756123485}>
        <Text font={[12, 400]} colored={[, '#0008']}>
          channel name
        </Text>
      </Yt_information>
    </ViewLayout>
  )
}

export default index
