import React, { useState } from 'react'
import { Subsrib, Yt_avatar } from '..'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { Text, ViewLayout } from '../../../layout'
import { ConvertNumbers } from '../../../constants'

const index = () => {

  return (
    <ViewLayout
      flexFeatures={[,'row', 'space-between']}
      padding={[4,4,2,8]}
      dimensions={[, 50]}
      >

        {/* channel info + subscrib numbers */}
        <ViewLayout
        flexFeatures={[, 'row', , 'center']}
        padding={[2,2,2,2]}
      >
        <Yt_avatar
          source={require('../../../assets/account.jpg')}
          width={30}
          height={30} 
        />
        {/* channel name & subscribed numbers */}
        <ViewLayout
          padding={[,,,10]}
        >
          <Text >
            channel name
          </Text>
          <Text
            font={[11]}
            colored={[, '#000c']}
          >
            {ConvertNumbers(1230501)} subscribed
          </Text>
        </ViewLayout>
      </ViewLayout>

      {/* subscribed & notification */}
      <ViewLayout
        flexFeatures={[, 'row', 'space-between', 'center']}
      >

        <Subsrib />
        {/* subscrib state */}
        {/* <Text
          onPress={()=>setSubscribed(!subscribed)}
          font={[15, 'bold']}
          padding={[,10]}
          colored={[, subscribed ? '#0006' : '#d00']}
        >
          {subscribed ? 'SUBSCRIBED' : 'SUBSCRIB'}
        </Text> */}

        {/* notification state */}
        {
          // subscribed
          // && <SvgIconPressable
          //   onPress={()=>setOnNotifications(!onNotifications)}
          //   svg={onNotifications ? Icons.path.notification: Icons.path.offNotification}
          //   color={'#000'}
          // />
        }
      </ViewLayout>

    </ViewLayout>
  )
}

export default index
