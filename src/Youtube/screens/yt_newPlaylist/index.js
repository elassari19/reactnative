import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native'
import { Icons, SvgIcon, SvgIconPressable } from '../../../assets/Icons'
import { ConvertNumbers, ConvertTime, handleStringLength } from '../../../constants'
import { Text, TopLayerView, ViewLayout } from '../../../layout'
import { CheckedBox, Yt_video } from '../../Yt-components'

const index = () => {

  const [addPlaylist, setAddPlaylist] = useState(false)
  const [text, setText] = useState('')
  const [isSelect, setIsSelect] = useState(false)
  const [counts, setCount] = useState(0)

  const handle = () => {
    setIsSelect(!isSelect)
    setCount(counts+1)
  }

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
    >
      
      {/* create new playlist */}
      {
        addPlaylist&&<TopLayerView onPress={()=>setAddPlaylist(false)} colored={['#fff']} dimensions={[250,200]}  position={[100,-60]}>
          <Text font={[16,500]} padding={[10,10,20]}>New playlist</Text>

            {/* title of playlist */}
            <ViewLayout>
              <TextInput autoFocus maxLength='150' value={text} onChangeText={setText} placeholder='Title' style={{paddingVertical: 5, marginHorizontal: 20, borderBottomWidth: 1,borderBottomColor: '#33d'}} />
              <ViewLayout flexFeatures={[,'row']} margin={[,20]}>
                <ViewLayout flexFeatures={[1]} />
                <Text font={[10]}>{text.length}/150</Text>
              </ViewLayout>
            </ViewLayout>

            {/* playlist permition of view playlist */}
            <ViewLayout flexFeatures={[,'row', 'space-between']} margin={[20]} borderWidth={[,,1]} borderColor={[,,'#000']}>
              <SvgIcon svg={Icons.path.lock} color={'#000'} viewBox={'0 -5 40 40'} />
              <Text padding={[,120,,0]}>Privet</Text>
              <SvgIcon svg={Icons.path.arrow} viewBox={'0 0 30 30'} />
            </ViewLayout>

            {/* cancer or create playlist */}
            <ViewLayout flexFeatures={[,'row']} margin={[10,,,]}>
              <Text onPress={()=>setAddPlaylist(false)} margin={[, 15,,120]} colored={[,'#33f']} font={[11,500]}>CANCEL</Text>
              <Text colored={[,text.length>0?'#33f':'#0004']} font={[11,500]}>CREATE</Text>
            </ViewLayout>


        </TopLayerView>
      }

      {/* header content */}
      <ViewLayout flexFeatures={[,'row', 'space-between']} padding={[8,10]}>
        <ViewLayout flexFeatures={[,'row']}>
          <SvgIconPressable svg={Icons.path.delete_} color={'#000'} />
          <Text margin={[,,,5]} font={[16,500]}>Add videos</Text>
        </ViewLayout>
        <Text  onPress={()=>setAddPlaylist(true)} colored={[,'#33f']} font={[,500]}>NEXT</Text>
      </ViewLayout>

      <ViewLayout flexFeatures={[,'row','space-between']} margin={[5,15]}>
        <Text font={[11, 500]}>Recently watched</Text>
        <Text font={[11]}>{counts} video selected</Text>
      </ViewLayout>

      <ViewLayout>
        {
          Array(10).fill('').map((_,index) => (
            <ViewLayout key={index} flexFeatures={[,'row']} padding={[5,8]}>

              <TopLayerView layerColored onPress={handle} />

              <Yt_video dimensions={[140,80]} />

              <ViewLayout margin={[,5]} flexFeatures={[1]}>
                <Text font={[,500]}>{handleStringLength('video video title video title video title title video title video title video title',60,'...')}</Text>
                <Text font={[12]} colored={[,'#000a']}>{handleStringLength('channel name',30,'...')}</Text>
                <Text font={[12]} colored={[,'#000a']}>{ConvertNumbers(Math.random()*10000)} Views - {ConvertTime(Math.random()*2000000000)} </Text>
              </ViewLayout>

              <CheckedBox isSelect={isSelect} />

            </ViewLayout>
          ))
        }
      </ViewLayout>

    </ScrollView>
  )
}

export default index
