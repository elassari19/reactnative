import React from 'react'
import { ScrollView } from 'react-native'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { ConvertNumbers, handleStringLength } from '../../../constants'
import { Text, ViewLayout } from '../../../layout'

const title = 'video title video title video title video title video title video title video title video title '
const index = () => {
  return (
    <ScrollView>

      <ViewLayout flexFeatures={[1]} >

        <ViewLayout flexFeatures={[1,,,'center']} margin={[15,,15]} >
          <Text font={[12]} colored={[,'#0008']}>Videos that you download will apper her</Text>
        </ViewLayout>

        <ViewLayout padding={[,,,5]} colored={['#0001']}>
          {/* recommended videos */}
          <Text margin={[5,,5,5]} font={[12,500]}>Recommended downloads</Text>
          {
            Array(20).fill('').map((_,index) => (
              <ViewLayout key={index} flexFeatures={[1, 'row']} margin={[5,5,5]}>

                <ViewLayout dimensions={[140,80]} colored={['#d335']} />

                <ViewLayout flexFeatures={[1]} margin={[,5,,5]}>
                  <Text font={[13,500]}>{handleStringLength(title,80,'...')}</Text>
                  <Text font={[11]} colored={[,'#000a']}>channel name</Text>
                  <Text font={[11]} colored={[,'#000a']}>{ConvertNumbers(16545)} Views</Text>
                </ViewLayout>

                <SvgIconPressable flexFeatures={[,,,,'center']} svg={Icons.path.download.d2} color={'#000'} viewBox={'0 0 50 50'} />

              </ViewLayout>
            ))
          }
        </ViewLayout>

      </ViewLayout>
    </ScrollView>
  )
}

export default index
