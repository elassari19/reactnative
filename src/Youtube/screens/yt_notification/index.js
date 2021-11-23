import React from 'react'
import { View } from 'react-native';
import { Icons, SvgIcon } from '../../../assets/Icons';
import { Text, ViewLayout } from '../../../layout';
import Yt_header from '../../Yt-components/yt_header';
import notificationData from '../yt_notification/data';

const index = () => {

  const { headerLeft, headerRight } = notificationData;

  return (
    <View style={{ flex: 1 }}>

      <Yt_header title={'Notifications'} headerLeft={headerLeft} headerRight={headerRight} />

      <ViewLayout flexFeatures={[1,,'center','center']}>
        <SvgIcon svg={Icons.path.notification} width={'100%'} height={200} />
        <Text font={[,500]}>Your notifications live here</Text>
        <Text colored={[,'#000a']} margin={[15]} dimensions={[280]} textstyle={[,'center']}>Subscribe to your favourite channels to receive notifications about theiiratest videos</Text>
      </ViewLayout>

    </View>
  )
}

export default index;
