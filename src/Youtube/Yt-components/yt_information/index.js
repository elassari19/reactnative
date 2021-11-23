import React from 'react'
import { SvgIconPressable } from '../../../assets/Icons'
import { ConvertNumbers, ConvertTime } from '../../../constants'
import { Text, TopLayerView, ViewLayout } from '../../../layout'

const index = ({children, padding, onPress, dimensions, title, views, times, icon}) => {
  return (
    <ViewLayout
      flexFeatures={[1, 'row',,'start']}
      padding={padding || [10,4,10,4]}
      dimensions={dimensions}
    >

      <TopLayerView onPress={onPress} layerColored />

      <ViewLayout flexFeatures={[1]} padding={[,,,5]}>

        {/* video title */}
        <ViewLayout>
            <Text
              font={[13, 500]}
            >
              {title}
            </Text>

        </ViewLayout>

          {children}

          {/* video statistic */}
          <ViewLayout flexFeatures={[1]}>
            <Text font={[11, 500]} colored={[, '#0008']} >
              {ConvertNumbers(views)} views - {ConvertTime(times)}
            </Text>
          </ViewLayout>

      </ViewLayout>

      {
      icon && <SvgIconPressable 
        svg={icon} color={'#000'} 
      />
      }

    </ViewLayout>
  )
}

export default index
