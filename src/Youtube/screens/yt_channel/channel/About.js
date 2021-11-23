import React from 'react'
import { Linking } from 'react-native';
import { Icons, SvgIconPressable } from '../../../../assets/Icons'
import { Text, ViewLayout } from '../../../../layout'
import links from './channelData';

const { info ,stock ,world } = Icons.path;

const about = () => {

  return (
    <ViewLayout flexFeatures={[1]} padding={[10,5,,5]}>

      {/* Description about channel */}
      <ViewLayout>

        <Text font={[15,500]}>Description</Text>
        <Text font={[12,400]}>lorim sdfss sdfsfs sdfsfs sdfsfdsf sdfsfs sdfsfdsf sdfsfs sdfsfdsf sdfsfs sdfsfdsf sdfsfs sdfsfdsf sdfsfs sdfsfdsf sdfsfs sdfsfdsf sdfsfs sdfsfdsf sdfsfs sdfsfdsf sdfsfs sdfsfdsf sdfsfsd sdfsfs sdfsf sdfsf sdfsfs sdfsf sdfsfdsf</Text>

      </ViewLayout>

      {/* links for out contact and our social media */}
      <ViewLayout padding={[15]}>

        <Text font={[15,500]}>Links</Text>
        {
          links.map((icon, index) => (
            <ViewLayout key={index} flexFeatures={[1, 'row',,'center']} padding={[10]}>
              <SvgIconPressable svg={icon.icon} viewBox={icon.view} color={icon.color} />
              <Text onPress={()=>Linking.openURL(`https://${icon.link}`)} margin={[,,,15]} font={[14]} colored={[, '#008']}>{icon.name}</Text>
            </ViewLayout>
          ))
        }

      </ViewLayout>

      {/* more information our us */}
      <ViewLayout padding={[15]}>

        {/* more info text */}
        <Text font={[15,500]}>More info</Text>

        {/* our url browser */}
        <ViewLayout flexFeatures={[1, 'row',,'center']} padding={[8,,10,5]}>

          <SvgIconPressable svg={world} viewBox={'-100 -200 750 750'} color={['#000a']} />
          <Text
            onPress={()=>Linking.openURL('https://youtube.com')}
            padding={[,,,5]} font={[14]} colored={[, '#008']}
          >
            https://youtube.com/c/nameOfChannel
          </Text>

        </ViewLayout>

        {/* location of owner */}
        <ViewLayout flexFeatures={[1, 'row',,'center']} padding={[8,,10,5]}>

          <SvgIconPressable svg={world} viewBox={'-100 -200 750 750'} color={['#000a']} />
          <Text padding={[,,,5]}>Morocco</Text>

        </ViewLayout>

        {/* total views */}
        <ViewLayout flexFeatures={[1, 'row',,'center']} padding={[8,,10,5]}>

          <SvgIconPressable svg={stock} viewBox={'10 20 100 100'} color={['#000']} />
          <Text padding={[,,,5]}>35451231 Views</Text>

        </ViewLayout>

        {/* date fo joining in youtube */}
        <ViewLayout flexFeatures={[1, 'row',,'center']} padding={[8,,10,5]}>

          <SvgIconPressable svg={info} viewBox={'5 0 28 28'} color={['#000']} />
          <Text padding={[,,,5]}>joined 01 septomber 2020</Text>

        </ViewLayout>

      </ViewLayout>

    </ViewLayout>
  )
}

export default about
