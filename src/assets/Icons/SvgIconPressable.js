import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { PressableLayout } from '../../layout'
import { activeColor } from '../../layout/colors'

const SvgWrap = ({onPress, padding, margin, border, borderRadius, dimensions, colored, flexFeatures, svg, svg1, color, viewBox, width, height, rotate, styles}) => {

  return (
    <PressableLayout
      onPress={onPress}
      dimensions={dimensions}
      flexFeatures={flexFeatures}
      colored={colored}
      borderRadius={borderRadius}
      padding={padding}
      margin={margin}
      border={border}
    >

      <Svg 
        width={width || '24px'}
        height={height || '24px'}
        viewBox={viewBox || '0 0 25 25'}
        style={{ 
          transform: [{rotate: `${rotate}deg`}],
          styles
        }}>
        
        <Path
            fill={color || activeColor}
            d={svg}
          />
        <Path
            fill={color || activeColor}
            d1={svg1}
          />

      </Svg>
    </PressableLayout>
  )
}

export default SvgWrap