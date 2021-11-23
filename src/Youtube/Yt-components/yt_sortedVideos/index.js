import React, { useState } from 'react'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { Text, TopLayerView, ViewLayout } from '../../../layout'

const index = () => {

  const [LastVideoAdded, setLastVideoAdded] = useState(false)
  const [layerOfSelectVideo, setlayerOfSelectVideo] = useState(false)
  const added = LastVideoAdded ? 'LAST VIDEO ADDED' : 'DATE ADDED (newest)'

  const handSelect = (add = false) => {
    setLastVideoAdded(add);
    setlayerOfSelectVideo(false);
  }

  return (
    <>
      {/* layer of selecting type of display video, by default is hidding */}
      { 
        layerOfSelectVideo && <TopLayerView
          onPress={()=>setlayerOfSelectVideo(false)}
          colored={['#fff1']}
          dimensions={[130]}
          position={[10,,,20]}
        >

          {/* select type component */}
          <ViewLayout colored={['#fff']}>

            <Text onPress={()=>handSelect(false)} font={[11, 400]} padding={[5,,,10]} dimensions={[, 25]} colored={[!LastVideoAdded ? '#0002' : null]} >DATE ADDED (newest)</Text>
            <Text onPress={()=>handSelect(true)} font={[11, 400]} padding={[5,,,10]} dimensions={[, 25]} colored={[LastVideoAdded ? '#0002' : null]} >LAST VIDEO ADDED</Text>

          </ViewLayout>

        </TopLayerView>
      }

      {/* the body of selecting */}
      <ViewLayout flexFeatures={[, 'row',, 'center']} padding={[,,,10]} dimensions={[, 30]} borderWidth={[,,1]} borderColor={[,,'#0001']}>

        <Text onPress={()=>setlayerOfSelectVideo(true)} font={[11, 500]} colored={[, '#0008']}>
          {added}
        </Text>

        <SvgIconPressable onPress={()=>setlayerOfSelectVideo(true)} svg={Icons.path.arrow} />

      </ViewLayout>
    </>
  )
}

export default index
