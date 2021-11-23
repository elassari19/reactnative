import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { activeColor } from '../../layout/colors'

const SvgWrap = ({svg, svg1, color, viewBox, width, height, rotate, styles}) => {

  return (
      <Svg 
        width={width || '24px'}
        height={height || '24px'}
        viewBox={viewBox || '0 0 25 25'}
        style={{ 
          transform: [{ rotate: `${rotate}deg` }],
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
  )
}

export default SvgWrap