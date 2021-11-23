import React, { useState } from 'react'
import { Icons, SvgIcon, SvgIconPressable } from '../../../assets/Icons';
import { ScrollViewLayout, Text, TopLayerView, ViewLayout } from '../../../layout'
import { SelectNotificatio, Yt_avatar } from '../../Yt-components';

const array = ['','','','','','','','','','','','','','','','','','','','','','','','',''];
const options = ['Most relevent','New activity','A-Z'];
const { allNotifications, notification, offNotification } = Icons.path;

const index = () => {

  const [option, setOption] = useState(0)
  const [isOption, setIsOption] = useState(false)
  const [isManage, setIsManage] = useState(false)
  const [isNotification, setIsNotification] = useState(false)
  const handelOptions = (index) => {
    setOption(index);
    setIsOption(false);
  }

  return (
    <ScrollViewLayout padding={[10,10,,10]}>

      {/* sheat layer for select options of display channel */}
      {
        isOption && <TopLayerView onPress={()=>setIsOption(false)} layerColored dimensions={[100,80]} colored={['#fff']} >
          <Text onPress={()=>handelOptions(0)} padding={[3,,3,5]} colored={[option==0?'#0001':'']}>Most relevent</Text>
          <Text onPress={()=>handelOptions(1)} padding={[3,,3,5]} colored={[option==1?'#0001':'']}>New activity</Text>
          <Text onPress={()=>handelOptions(2)} padding={[3,,3,5]} colored={[option==2?'#0001':'']}>A-Z</Text>
        </TopLayerView>
      }

      {/* select options + manage */}
      <ViewLayout flexFeatures={[,'row','space-between','center']}>

        {/* select options */}
        <ViewLayout flexFeatures={[,'row',,'center']} dimensions={[100]}>
          <TopLayerView onPress={()=>setIsOption(true)} layerColored />
          <Text font={[11, 600]}>{options[option]}</Text>
          <SvgIcon svg={Icons.path.arrow} viewBox={'0 -5 35 35'} />
        </ViewLayout>

        {/* manage */}
        <Text onPress={()=>setIsManage(!isManage)} font={[12, 600]} colored={[,'#33f']}>{isManage? 'FINISHED': 'MANAGE'}</Text>

      </ViewLayout>

      {/* render all channels wish was subscibed */}
      {
        array.map((_,index) => (
          <ViewLayout key={index} flexFeatures={[1,'row','space-between','center']}>

            <ViewLayout flexFeatures={[,'row',,'center']}>
              <Yt_avatar source={require('../../../assets/account.jpg')} />
              <Text flexFeatures={[1]} font={[,,,,60]} padding={[,,,15]}>channel name</Text>
            </ViewLayout>

            {
              !isManage
              ?<SvgIconPressable svg={Icons.path.dot} color={'#55f'} height={30} width={20} viewBox={'0 0 70 70'} />
              :<SelectNotificatio/>

            }

          </ViewLayout>
        ))
      }
    </ScrollViewLayout>
  )
}

export default index
