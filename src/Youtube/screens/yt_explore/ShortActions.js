import React from 'react'
import Svg, { Line, Path } from 'react-native-svg'
import { Icons, SvgIcon } from '../../../assets/Icons'
import { Text, TopLayerView, ViewLayout } from '../../../layout'

const ShortActions = ({onPress}) => {
  return (
    <TopLayerView onPress={onPress} position={[500]} colored={['#fff']}>

      <ViewLayout flexFeatures={[, 'row',,'center']} padding={[10,,10,10]}>
        <TopLayerView onPress={onPress} layerColored />
        <Svg width={30} height={20}>
        <Line stroke="#000000" strokeWidth="1" strokeMiterlimit="10" x1="7" y1="5" x2="25" y2="5"/>
        <Line stroke="#000000" strokeWidth="1" strokeMiterlimit="8" x1="7" y1="10" x2="20" y2="10"/>
        <Line stroke="#000000" strokeWidth="1" strokeMiterlimit="5" x1="7" y1="15" x2="15" y2="15"/>
        </Svg>
        <Text padding={[,,,15]}>Description</Text>
      </ViewLayout>

      <ViewLayout flexFeatures={[, 'row',,'center']} padding={[10,,10,10]}>
        <TopLayerView onPress={onPress} layerColored />
        <SvgIcon svg={Icons.path.caption} viewBox={' 6 0 24 24'} color={'#000'} />
        <Text padding={[,,,15]}>Caption</Text>
      </ViewLayout>

      <ViewLayout flexFeatures={[, 'row',,'center']} padding={[10,,10,10]}>
        <TopLayerView onPress={onPress} layerColored />
        <SvgIcon svg={Icons.path.report} color={'#000'} />
        <Text padding={[,,,15]}>Report</Text>
      </ViewLayout>

      <ViewLayout flexFeatures={[, 'row',,'center']} padding={[10,,10,10]}>
        <TopLayerView onPress={onPress} layerColored />
        <Svg width={30} height={20}>
          <Path fill="none" d="M0 0h24v24H0z"/>
          <Path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zM11 13h2v2h-2v-2zm0-6h2v5h-2V7z"/>
        </Svg>
        <Text padding={[,,,10]}>Send feedback</Text>
      </ViewLayout>

      <ViewLayout flexFeatures={[, 'row',,'center']} padding={[10,,10,10]} borderWidth={[1]} borderColor={['#0001']}>
        <TopLayerView onPress={onPress} layerColored />
        <SvgIcon svg={Icons.path.delete_} color={'#000'} />
        <Text padding={[,,,15]}>Cancel</Text>
      </ViewLayout>

    </TopLayerView>
  )
}

export default ShortActions
