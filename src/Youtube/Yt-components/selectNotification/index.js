import React, { useState } from 'react'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { Text, TopLayerView, ViewLayout } from '../../../layout'

const { allNotifications, notification, offNotification } = Icons.path;

const index = () => {

  const [isNotification, setIsNotification] = useState(false)
  const [notificationType, setNotificationType] = useState(0)

  return (
    <>
      {
        isNotification 
        ?<TopLayerView layerColored onPress={()=>setIsNotification(false)} colored={['#fff']} dimensions={[110]}  position={[0,-240]}>

        <ViewLayout colored={[notificationType==0?'#0001':'']} padding={[3,,3,5]} flexFeatures={[,'row','space-between']}>
          <Text onPress={()=>setNotificationType(0)}>All</Text>
          <SvgIconPressable viewBox={'0 -3 30 30'} height={25} svg={allNotifications} color={'#000'}/>
        </ViewLayout>

        <ViewLayout colored={[notificationType==1?'#0001':'']} padding={[3,,3,5]} flexFeatures={[,'row','space-between']}>
          <Text onPress={()=>setNotificationType(1)}>Presonalised</Text>
          <SvgIconPressable viewBox={'0 -3 30 30'} height={25} svg={notification} color={'#000'}/>
        </ViewLayout>

        <ViewLayout colored={[notificationType==2?'#0001':'']} padding={[3,,3,5]} flexFeatures={[,'row','space-between']}>
          <Text onPress={()=>setNotificationType(2)}>None</Text>
          <SvgIconPressable viewBox={'0 -3 30 30'} height={25} svg={offNotification} color={'#000'}/>
        </ViewLayout>

        </TopLayerView>
        :<SvgIconPressable onPress={()=>setIsNotification(true)} svg={notificationType==0?allNotifications:notificationType==1?notification:offNotification} color={'#000'}  viewBox={'0 0 25 25'} />
      }
    </>
  )
}

export default index
