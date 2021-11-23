import React from 'react'
import { Line } from 'react-native-svg'
import { ViewLayout, Svg } from '../../../layout'

const index = ({isSelect}) => {

  return (
    <ViewLayout flexFeatures={[,,,,'center']} dimensions={[15,15]} border={[1,'#000a',1]} colored={[isSelect&&'#11a']}>
      <Svg>
        <Line x1="0" y1="5" x2="6" y2="14" strokeWidth='2' stroke={isSelect?"#fff":''} />
        <Line x1="5" y1="14" x2="14" y2="1" strokeWidth='2' stroke={isSelect?"#fff":''} />
      </Svg>
  </ViewLayout>
  )
}

export default index
