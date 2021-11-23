import React from 'react'
import { ScrollView, TextInput } from 'react-native'
import { Icons, SvgIcon, SvgIconPressable } from '../../../assets/Icons'
import { ConvertNumbers, handleStringLength, calculateDays } from '../../../constants'
import { ViewLayout, Text } from '../../../layout'

const title = '73 ring programming language Declare Or Create ring programming language Declare Or Create'

const index = () => {


  return (
    <ScrollView>

      <ViewLayout flexFeatures={[,'row',,'center']} padding={[,,,10]} colored={['#0001']}>
        <SvgIcon svg={Icons.path.search} />
        <TextInput 
          placeholder='Search watch history'
          keyboardType="numeric"
          style={{fontSize: 15, flex: 1, paddingHorizontal: 10, paddingVertical: 10, marginLeft: 5}}
        />
      </ViewLayout>

      {/* videos watched today */}
      <Text padding={[5,,5,10]}>{calculateDays(new Date().getTime())}</Text>
      <ViewLayout>
        {
          Array(5).fill('').map((_,index) => (
            <ViewLayout key={index} flexFeatures={[,'row']} padding={[5,,5,10]}>
              
              <ViewLayout dimensions={[140,80]} colored={['#d008']} />
              
              <ViewLayout padding={[3,,,10]} flexFeatures={[1]}>
                <Text>{handleStringLength(title,50,'...')}</Text>
                <Text font={[10]} colored={[,'#0008']}>channel title {ConvertNumbers(1564) }veiws</Text>
              </ViewLayout>

              <SvgIconPressable onPress={()=>console.log('video actions')} svg={Icons.path.threeDots} rotate={90} viewBox={'0 0 28 28'} />

            </ViewLayout>
          ))
        }
      </ViewLayout>

      {/* videos watched yesterday */}
      <Text padding={[5,,5,10]}>{calculateDays(new Date()-(1000*60*60*25))}</Text>

      {/* render the videos */}
      <ViewLayout>
        {
          Array(5).fill('').map((_,index) => (
            <ViewLayout key={index} flexFeatures={[,'row']} padding={[5,,5,10]}>
              
              <ViewLayout dimensions={[140,80]} colored={['#d008']} />
              
              <ViewLayout padding={[3,,,10]} flexFeatures={[1]}>
                <Text>{handleStringLength(title,50,'...')}</Text>
                <Text font={[10]} colored={[,'#0008']}>channel title {ConvertNumbers(1564) }veiws</Text>
              </ViewLayout>

              <SvgIconPressable onPress={()=>console.log('video actions')} svg={Icons.path.threeDots} rotate={90} viewBox={'0 0 28 28'} />

            </ViewLayout>
          ))
        }
      </ViewLayout>

      {/* videos watched this week */}
      <Text padding={[5,,5,10]}>{calculateDays(new Date()-(1000*60*60*24*3))}</Text>

      {/* render the videos */}
      <ViewLayout>
        {
          Array(5).fill('').map((_,index) => (
            <ViewLayout key={index} flexFeatures={[,'row']} padding={[5,,5,10]}>
              
              <ViewLayout dimensions={[140,80]} colored={['#d008']} />
              
              <ViewLayout padding={[3,,,10]} flexFeatures={[1]}>
                <Text>{handleStringLength(title,50,'...')}</Text>
                <Text font={[10]} colored={[,'#0008']}>channel title {ConvertNumbers(1564) }veiws</Text>
              </ViewLayout>

              <SvgIconPressable onPress={()=>console.log('video actions')} svg={Icons.path.threeDots} rotate={90} viewBox={'0 0 28 28'} />

            </ViewLayout>
          ))
        }
      </ViewLayout>

    </ScrollView>
  )
}

export default index
