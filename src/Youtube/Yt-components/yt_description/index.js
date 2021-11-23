import React from 'react'
import { Yt_avatar } from '..'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { Text, ViewLayout } from '../../../layout'

const index = ({onPress}) => {
  return (
    <ViewLayout
      flexFeatures={[1]}
      colored={['#fff']}
      padding={[,,30]}
    >

      <ViewLayout margin={[5]} borderRadius={[50,50,50,50]} colored={['#0001']} dimensions={[40, 5]} flexFeatures={[,,,,'center']} borderWidth={[,,1]} borderColor={[,,'#0001']} />

      {/* descripton & goback button */}
      <ViewLayout flexFeatures={[1, 'row', 'space-between']} borderWidth={[,,1]} borderColor={[,,'#0001']} padding={[10,8,10,8]}>
        <Text>Description</Text>
        <SvgIconPressable onPress={onPress} svg={Icons.path.delete_} color={'#000'} />
      </ViewLayout>

      {/* title & channel name & avatar & video statistic */}
      <ViewLayout padding={[10,8,10,8]} borderWidth={[,,1]} borderColor={[,,'#0001']}>

        {/* video title */}
        <Text font={[16, 600]}>video title video title video title video title video title video title video title video title video title video title video title</Text>

        {/* avatar & channel name */}
        <ViewLayout flexFeatures={[, 'row']} padding={[10,,10]}>
          <Yt_avatar source={require('../../../assets/account.jpg')} width={20} height={20} />
          <Text padding={[,,,5]} font={[15, 500]}>channel name</Text>
        </ViewLayout>

        {/* video statistic */}
        <ViewLayout flexFeatures={[1, 'row', 'space-around']} padding={[5,,10]}>

          <ViewLayout flexFeatures={[,,,'center']}>
            <Text font={[15, 700]}>651</Text>
            <Text font={[11]} colored={[,'#000a']}>Likes</Text>
          </ViewLayout>

          <ViewLayout flexFeatures={[,,,'center']}>
            <Text font={[15, 700]}>651</Text>
            <Text font={[11]} colored={[,'#000a']}>Views</Text>
          </ViewLayout>

          <ViewLayout flexFeatures={[,,,'center']}>
            <Text font={[15, 700]}>7 Sep</Text>
            <Text font={[11]} colored={[,'#000a']}>2020</Text>
          </ViewLayout>

        </ViewLayout>

      </ViewLayout>

      {/* description details */}
      <ViewLayout padding={[10,8,10,8]}>

      {/* description title */}
        <Text font={[13]}>descriptin title descriptin title descriptin title descriptin title descriptin title descriptin title descriptin title</Text>

        {/* the description details*/}
        <Text padding={[10]} font={[13]}>descriptin content descriptin content descriptin content descriptin content descriptin content descriptin content descriptin content</Text>

        {/* likn details */}
        <Text padding={[15]} font={[13]}>description of link</Text>
        <Text padding={[10]} font={[13]} colored={[,'blue']}>http://google.com</Text>

        {/* likn details */}
        <Text padding={[15]} font={[13]}>description of link</Text>
        <Text padding={[10]} font={[13]} colored={[,'blue']}>http://google.com</Text>

        {/* hashtag  */}
        <ViewLayout padding={[15]}>
          <Text padding={[8]} font={[13]} colored={[,'blue']}>#sdfsf sdfsdf sfdsf</Text>
          <Text padding={[8]} font={[13]} colored={[,'blue']}>#sdfsf sdfsdf sfdsf</Text>
          <Text padding={[8]} font={[13]} colored={[,'blue']}>#sdfsf sdfsdf sfdsf</Text>
          <Text padding={[8]} font={[13]} colored={[,'blue']}>#sdfsf sdfsdf sfdsf</Text>
          <Text padding={[8]} font={[13]} colored={[,'blue']}>#sdfsf sdfsdf sfdsf</Text>
          <Text padding={[8]} font={[13]} colored={[,'blue']}>#sdfsf sdfsdf sfdsf</Text>
        </ViewLayout>

      </ViewLayout>

    </ViewLayout>
  )
}

export default index
