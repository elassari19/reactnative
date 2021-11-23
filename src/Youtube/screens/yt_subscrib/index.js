import React, { useState } from 'react'
import Svg, { Polyline } from 'react-native-svg';
import { Icons, SvgIcon, SvgIconPressable } from '../../../assets/Icons';
import { ScrollViewLayout, Text, ViewLayout, TopLayerView } from '../../../layout'
import { Yt_avatar, Yt_information, Yt_video } from '../../Yt-components';
import actions from './actions_data'

const array = ['','','','','','','','','','','','','','','','','','','','','','','','',''];
const channel = 'channel names';
const options = ['All', 'Today', 'Continue watching', 'Unwatched', 'Live', 'Posts'];

const index = ({navigation}) => {
  
  const [active, setActive] = useState('All');
  const [videoActions, setVideoActions] = useState(false)
  
  const [isSetting, setIsSetting] = useState(false)
  const [select, setSelect] = useState(0)

  const handelSelect = (index) => {
    setSelect(index);
    setIsSetting(false)
  }

  return (
    <ScrollViewLayout flexFeatures={[1]}>

      {/* this for handle the setting of subscrib */}
      {
        isSetting && <TopLayerView onPress={()=>setIsSetting(false)} colored={['#fff']} position={[575]}>
          <Text padding={[8,,8,10]}>What do you want to see in your subscritions feed?</Text>

          <ViewLayout flexFeatures={[,'row']} padding={[5,,5,10]}>
            <TopLayerView layerColored onPress={()=>handelSelect(0)} />
            <Svg width={24} height={24} viewBox='0 0 30 30'><Polyline points={select==0?"4 13 9 18 20 7":''}/></Svg>
            <Text>Videos and posts</Text>
          </ViewLayout>

          <ViewLayout flexFeatures={[,'row']} padding={[5,,5,10]}>
            <TopLayerView layerColored onPress={()=>handelSelect(1)} />
            <Svg width={24} height={24} viewBox='0 0 30 30'><Polyline points={select==1?"4 13 9 18 20 7":''}/></Svg>
            <Text>Videos only</Text>
          </ViewLayout>

          <ViewLayout flexFeatures={[,'row']} padding={[8,,8,10]} borderWidth={[1]} borderColor={['#0001']}>
            <TopLayerView layerColored onPress={()=>setIsSetting(false)} />
            <SvgIcon svg={Icons.path.delete_} color={'#000'}/>
            <Text>Cancel</Text>
          </ViewLayout>

        </TopLayerView>
      }

      {/* hirozontal scroll subscribed channels + show all button */}
      <ViewLayout flexFeatures={[,'row']} borderWidth={[,,1]} borderColor={[,,'#0001']}>

        {/* hirozontal scroll subscribed channels */}
        <ScrollViewLayout scrollHorizontall padding={[10,,5]}>
          {
            array.map((_,index) => (
              <ViewLayout key={index} flexFeatures={[,,,'center']} margin={[,5,2,5]}>
                <Yt_avatar source={require('../../../assets/account.jpg')} />
                <Text font={[10]} colored={[,'#0008']} margin={[2]}>{channel<11?channel:channel.slice(0,10)+'...'}</Text>
              </ViewLayout>
            ))
          }
        </ScrollViewLayout>

        {/* show all channels */}
        <Text onPress={()=>navigation.navigate('subscribed')} colored={[,'#11f']} font={[12,600,,,70]} padding={[,12,,15]}>ALL</Text>

      </ViewLayout>

      {/* options + setting */}
      <ViewLayout flexFeatures={[,'row']} padding={[5,,5]}  borderWidth={[,,1]} borderColor={[,,'#0001']}>

        <ScrollViewLayout scrollHorizontall>
          {
            options.map((item,index) => (
              <Text
                key={index}
                onPress={()=>setActive(item)}
                padding={[3,8,3,8]}
                margin={[,5,,5]}
                colored={active==item?['#666','#eee']:['#0001']}
                border={[1,'#0001',10]}
                font={[12,400]}
              >
                {item}
              </Text>
            ))
          }

          {/* setting */}
          <Text onPress={()=>setIsSetting(true)} font={[11,600,,,25]} colored={[,'#00d']} margin={[,10,,15]}>SETTINGS</Text>

        </ScrollViewLayout>

      </ViewLayout>

      {/* render the subscrib new content */}
      <ScrollViewLayout>

        {/* this a top layer view to display the options of video action */}
        {
          videoActions
          && <TopLayerView onPress={()=>setVideoActions(false)} colored={['#fff']} position={[290]} padding={[,,,5]}>
            {
              actions.map((item,index) => (
                <ViewLayout key={index} flexFeatures={[1, 'row']} padding={[8,,8,8]}>
                  <SvgIconPressable onPress={()=>setVideoActions(false)} svg={item.icon} color={'#000'} viewBox={item.view} />
                  <Text onPress={()=>setVideoActions(false)} padding={[,,,10]}>{item.label}</Text>
                </ViewLayout>
              ))
            }
            <ViewLayout flexFeatures={[1, 'row']} padding={[8,,8,8]} borderWidth={[1]} borderColor={['#0001']}>
                <SvgIconPressable onPress={()=>setVideoActions(false)} svg={Icons.path.delete_} color={'#000'} />
                <Text onPress={()=>setVideoActions(false)} padding={[,,,10]}>Cancel</Text>
              </ViewLayout>
          </TopLayerView>
        }

        {/* use the map method to render subscrib videos */}
        {
          array.map((_,index) => (
            <ViewLayout key={index} margin={[,,5]}>

              <Yt_video id={index} onPress={()=>navigation.navigate('video', {id: index}) } />

              {/* video details */}
              <ViewLayout
                flexFeatures={[1, 'row']}
                padding={[10,,15,10]}
              >

                {/* avatar */}
                <Yt_avatar source={require('../../../assets/account.jpg')} width={30} height={30} />

                {/* title & statistic infromation */}
                <Yt_information padding={[,,,5]} title={'title'} views={1564654} times={1265465415546} />

                {/* the three dots to handle the video actions */}
                <SvgIconPressable  onPress={()=>setVideoActions(true)} svg={Icons.path.threeDots} viewBox={'0 0 30 30'} color={'#000'} rotate={90} />

              </ViewLayout>
            </ViewLayout>
          ))
        }
      </ScrollViewLayout>

    </ScrollViewLayout>
  )
}

export default index
