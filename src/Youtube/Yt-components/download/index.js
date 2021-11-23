import React, { useState } from 'react'
import { Text, TopLayerView, ViewLayout } from '../../../layout'
const arrayOfQuality = ['High (760p)','Medium (480p)','Normal (360p)','Low (144p)'];

const index = ({onPress}) => {

  const [isSelected, setSelection] = useState(true);
  const [quality, setQuality] = useState(0)

  return (
    <TopLayerView onPress={onPress} colored={['#fff']} flexFeatures={[1]} position={[400]}>

      {/* download quality */}
      <Text font={[15, 500]} padding={[15,,15,15]}>Download quality</Text>

      {/* select the quality */}
      <ViewLayout border={[1,'#0001']}>
        {
          arrayOfQuality.map((item,index) => (

            <ViewLayout key={index} margin={[10,,10,15]} flexFeatures={[,'row',,'center']}>
              <TopLayerView layerColored layerPosition={[5]} layerDimensions={[15,15]} layerBorder={[1,quality==index?'#00f':'#0008',10]} >
                <Text onPress={()=>setQuality(quality==index?-1:index)} margin={[2,,,2]} colored={[quality==index&&'#00f']} dimensions={[9,9]} border={[,,5]} />
              </TopLayerView>
              <Text onPress={()=>setQuality(quality==index?-1:index)} margin={[,,,25]} font={[15]}>{item}</Text>
            </ViewLayout>
  
          ))
        }
      </ViewLayout>

      {/* Remember the settings */}
      <ViewLayout flexFeatures={[,'row',,'center']} padding={[15,,15,10]} borderWidth={[,,1]} borderColor={[,,'#0001']}>
        <Text onPress={()=>setSelection(!isSelected)} textstyle={[,'center']} font={[13,700,,,13]} colored={[isSelected&&'#00f',isSelected&&'#fff']} margin={[,10,,5]} dimensions={[18,18]} border={[2,isSelected?'#33f':'#0008',3]}>{isSelected?'X':''}</Text>
        <Text onPress={()=>setSelection(!isSelected)} font={[14, 500]} >Remember my settings</Text>
      </ViewLayout>

      {/* buttons (cancel and download) */}
      <ViewLayout flexFeatures={[,'row','space-around']} margin={[10,,20]}>
        <Text onPress={onPress} textstyle={[,'center']} dimensions={[130]} padding={[5,,5,]} font={[,500]} colored={[,'#00f']} border={[1,'#00f',3]}>CANCEL</Text>
        <Text onPress={onPress} textstyle={[,'center']} dimensions={[130]} padding={[5,,5,]} font={[,500]} colored={['#00f','#fff']} border={[1,'#00f',3]}>DOWNLOAD</Text>
      </ViewLayout>

    </TopLayerView>
  )
}

export default index
