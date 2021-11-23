import React, { useState } from 'react'
import { Line, Path } from 'react-native-svg'
import { Text, TopLayerView, ViewLayout, Svg } from '../../../layout'
import { Icons, SvgIcon, SvgIconPressable } from '../../../assets/Icons'
import { Download, SelectOptions, Yt_video } from '../../Yt-components';
import { handleStringLength } from '../../../constants';
import { ScrollView } from 'react-native';

const select = ['Manule', 'Date add (newest)', 'Date add (oldest)', 'Most popular', 'Date published (newest)', 'Date published (oldest)'];
const video = {chaanelName: 'name of channel',title: 'title of the video'}

const index = ({navigation}) => {

  // diplay the option
  const [sort, setSort] = useState(false)
  // save the selected option (received from childe commponent {SelectOption})
  const [selected, setSelected] = useState(0)
  // display download 
  const [download, setDownload] = useState(false)


  return (
    <ScrollView>

      {/* download cheate */}
      {
        download&&<Download onPress={()=>setDownload(false)} />
      }

      {/* header info */}
      <ViewLayout colored={['#0001']} padding={[10,,10,10]}>

        {/* screen title */}
        <ViewLayout flexFeatures={[,'row',,'center']}>

          <Text font={[13]} margin={[,10,,]}>Watch later</Text>
          <Svg viewBox={'0 -20 100 100'} dimensions={[20,20]}>
          <Path d="M33.0163994,35.0409012c-2.2442989,0-4.0655994,1.8213005-4.0655994,4.0655975   c0,1.9070015,1.3201008,3.4966011,3.0921993,3.9350014c-0.0060997,0.0444984-0.0263977,0.0840988-0.0263977,0.1304016v8.1317978   c0,0.5527,0.4473,1,1,1c0.5527992,0,1-0.4473,1-1v-8.1317978c0-0.046402-0.0202026-0.0859032-0.0263023-0.1305008   c1.7719994-0.4384995,3.0918007-2.0280991,3.0918007-3.9349022C37.0820999,36.8622017,35.2607994,35.0409012,33.0163994,35.0409012   z"/>
          <Path d="M52.8995094,21.5h-7.7039108c-0.0139008-11.0937996-1.0898972-21-13.1945992-21   c-12.1055984,0-13.1826992,9.9062004-13.1964912,21h-7.703908c-2.8125,0-5.1005998,2.2821999-5.1005998,5.0879002v31.8242016   c0,2.8056984,2.2880998,5.0878983,5.1005998,5.0878983h41.7989082C55.711998,63.5,58,61.2178001,58,58.4121017V26.5879002   C58,23.7821999,55.711998,21.5,52.8995094,21.5z M32.0009995,2.5c9.406601,0,11.1721001,6.4027996,11.1931992,19h-22.388298   C20.8269997,8.9027996,22.5925999,2.5,32.0009995,2.5z M56,58.4121017C56,60.1152,54.6093979,61.5,52.8995094,61.5H11.1006002   c-1.7098999,0-3.1005993-1.3848-3.1005993-3.0878983V26.5879002C8.000001,24.8847008,9.3907003,23.5,11.1006002,23.5h41.7989082   C54.6093979,23.5,56,24.8847008,56,26.5879002V58.4121017z"/>
          </Svg>

        </ViewLayout>

        {/* the user fullname */}
        <Text font={[14]} colored={[,'#0008']}>the user name</Text>

        {/* download + random play */}
        <ViewLayout flexFeatures={[,'row']} margin={[25]}>

          <SvgIconPressable  onPress={()=>navigation.navigate('video')} svg={Icons.path.loopRandom}  color={'#0008'} width={40} viewBox={'0 0 30 30'} />

          <Svg onPress={()=>setDownload(true)} viewBox={'0 0 50 50'} dimensions={[20,20]} fill='#000a'>
          <Path d={Icons.path.download.d1} />
          <Path d={Icons.path.download.d2} />
          </Svg>

        </ViewLayout>

      </ViewLayout>

      {/* play + the total video + sort */}
      <ViewLayout flexFeatures={[1]} overflow={'display'}>

        {/* play videos (red circle) */}
        <TopLayerView onPress={()=>navigation.navigate('video')} colored={['#f00']} layerDimensions={[40,40]} dimensions={[40,40]} layerPosition={[-20,,,300]} layerColored borderRadius={['50%','50%','50%','50%']} padding={[3,,,4]}>
          <SvgIcon svg={Icons.path.play} color={'#fff'} />
        </TopLayerView>

        {/* this commponent have the options it by default hidden and display when press the sort button */}
        {
          sort&&<TopLayerView onPress={()=>setSort(false)} position={[15,-90]} layerColored colored={['#fff']} dimensions={[150]}>
            {/* send data as array + current selected options + hide layer function + set the new selected option function */}
            <SelectOptions arrayData={select} hideLayer={setSort} selected={selected} setSelected={setSelected} />
          </TopLayerView>
        }

        {/* total videos */}
        <ViewLayout flexFeatures={[,'row']} padding={[5,,,10]}>

          <Text>8 videos * </Text>

          <ViewLayout>

            <Svg onPress={()=>setSort(true)}>
              <Line stroke="#000000" strokeWidth=".8" strokeMiterlimit="8" x1="7" y1="5" x2="25" y2="5"/>
              <Line stroke="#000000" strokeWidth=".8" strokeMiterlimit="8" x1="7" y1="10" x2="20" y2="10"/>
              <Line stroke="#000000" strokeWidth=".8" strokeMiterlimit="8" x1="7" y1="15" x2="15" y2="15"/>
            </Svg>

          </ViewLayout>

          <Text onPress={()=>setSort(true)} padding={[,,,5]}>Sort</Text>

        </ViewLayout>

        {/* unavailable videos */}
        <ViewLayout flexFeatures={[, 'row', 'space-between']} margin={[5,10,,10]} padding={[5,,5,5]} colored={['#0001']} borderRadius={[3,3,3,3]}>
          <Text font={[13]}> 1 unavailable video is hidden</Text>
          <Svg onPress={()=>console.log('hide')} dimensions={[25, 20]} viewBox={'0 0 25 25'}>
            <Path d={Icons.path.delete_}/>
          </Svg>
        </ViewLayout>

        {/* render all the watch later videos */}
        <ViewLayout padding={[10,5,5,10]}>
          {
            Array(100).fill('').map((_,index) => (
              <ViewLayout key={index} flexFeatures={[,'row']} margin={[5]}>
                <Yt_video dimensions={[140,80]} />
                <ViewLayout flexFeatures={[1]} margin={[,,,10]}>
                  <Text font={[15,500]}>{handleStringLength(video.title+video.title+video.title+video.title)}</Text>
                  <Text font={[12]} colored={[,'#000a']}>{video.chaanelName}</Text>
                </ViewLayout>
              </ViewLayout>
            ))
          }
        </ViewLayout>

      </ViewLayout>


    </ScrollView>
  )
}

export default index
