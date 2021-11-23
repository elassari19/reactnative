import React, { useState } from 'react'
import { Icons, SvgIconPressable } from '../../../assets/Icons';
import { Text, ViewLayout } from '../../../layout'

const index = () => {

  const [onNotifications, setOnNotifications] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <ViewLayout flexFeatures={[,'row']} padding={[,10]} dimensions={[,30]}>

      {/* subscrib state */}
      <Text
        onPress={()=>setSubscribed(!subscribed)}
        font={[14, 700]}
        colored={[, subscribed ? '#0006' : '#d00']}
        padding={[,3]}
      >
        {subscribed ? 'SUBSCRIBED' : 'SUBSCRIB'}
      </Text>

      {/* notification state */}
      {
        subscribed
        && <SvgIconPressable
          onPress={()=>setOnNotifications(!onNotifications)}
          svg={onNotifications ? Icons.path.notification: Icons.path.offNotification}
          viewBox={'0 0 30 30'}
          color={'#000'}
        />
      }

    </ViewLayout>
  )
}

export default index
