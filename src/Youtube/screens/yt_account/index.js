import React from 'react'
import { Path } from 'react-native-svg';
import { Icons, SvgIcon, SvgIconPressable } from '../../../assets/Icons';
import { Svg, Text, ViewLayout } from '../../../layout';
import { Yt_avatar } from '../../Yt-components';

const index = ({navigation}) => {

  return (
    <ViewLayout flexFeatures={[1]}>

      <SvgIconPressable onPress={()=>navigation.goBack()} padding={[10]} svg={Icons.path.delete_} color={'#000'} />

      <ViewLayout padding={[10]}>

        <ViewLayout padding={[,,20]}>
          <ViewLayout flexFeatures={[1,'row','space-between', 'center']} padding={[5]}>
            <Yt_avatar source={require('../../../assets/account.jpg')} width={30} height={30} />
            <Text font={[16]} dimensions={[260]} >name of user</Text>
            <SvgIconPressable svg={Icons.path.arrow} rotate={-90} />
          </ViewLayout>
          <Text margin={[,,,40]} colored={[,'#33f']}>Manage your account</Text>
        </ViewLayout>

        {/* Turn in incognito */}
        <ViewLayout flexFeatures={[,'row']} padding={[10,0]}>
          <SvgIcon svg={Icons.path.incognito} color={'#000'} />
          <Text margin={[,15]}>Turn in incognito</Text>
        </ViewLayout>

        {/* Add account */}
        <ViewLayout flexFeatures={[,'row']} padding={[10,0]}>
          <Text font={[10]}>+</Text>
          <Svg viewBox={'70 0 350 350'} dimensions={[20,20]}>
            <Path d={Icons.path.person.d1} />
            <Path d={Icons.path.person.d2} />
          </Svg>
          <Text margin={[,15]}>Add account </Text>
        </ViewLayout>

      </ViewLayout>

      <ViewLayout padding={[15,0]} borderWidth={[1,,1]} borderColor={['#0001',,'#0001']}>

        {/* Your channel */}
        <ViewLayout flexFeatures={[,'row']} padding={[10,]}>
          <SvgIcon svg={Icons.path.account} viewBox={'0 0 50 50'} color={'#000'} />
          <Text margin={[,15]}>Your channel</Text>
        </ViewLayout>

        {/* Youtube studio */}
        <ViewLayout flexFeatures={[,'row']} padding={[15,10]}>
          <SvgIcon svg={Icons.path.camera} color={'#000'} />
          <Text margin={[,15]}>Youtube studio</Text>
        </ViewLayout>

        {/* Time watched */}
        <ViewLayout flexFeatures={[,'row']} padding={[15,10]}>
          <SvgIcon svg={Icons.path.history} color={'#000'} />
          <Text margin={[,15]}>Turn in incognito</Text>
        </ViewLayout>

        {/* Purshases and memberships */}
        <ViewLayout flexFeatures={[,'row']} padding={[15,10]}>
          <Svg viewBox={'0 0 500 500'}>
            <Path d={Icons.path.money.d1} />
            <Path d={Icons.path.money.d3} />
          </Svg>
          <Text margin={[,15]}>Purshases and memberships</Text>
        </ViewLayout>

        {/* Your data in YouTube */}
        <ViewLayout flexFeatures={[,'row']} padding={[15,10]}>
          <ViewLayout border={[1,,5]} dimensions={[20,20]}>
            <Svg viewBox={'10 -100 500 500'}>
              <Path d={Icons.path.person.d1} />
              <Path d={Icons.path.person.d2} />
            </Svg>
          </ViewLayout>
          <Text margin={[,15]}>Your data in YouTube</Text>
        </ViewLayout>

      </ViewLayout>

      {/* Setting */}
      <ViewLayout flexFeatures={[,'row']} padding={[25,10,10]}>
        <Svg viewBox={'0 0 100 100'}>
          <Path d={Icons.path.setting.d1} />
          <Path d={Icons.path.setting.d2} />
        </Svg>
        <Text margin={[,15]}>Setting</Text>
      </ViewLayout>

      {/* Help and feedback */}
      <ViewLayout flexFeatures={[1,'row']} padding={[15,10]}>
        <SvgIcon svg={Icons.path.setting.d2} viewBox={'0 0 100 100'} color={'#000'} />
        <Text margin={[,15]}>Help and feedback</Text>
      </ViewLayout>

      {/* Privacy Policy & Terms of Service */}
      <ViewLayout flexFeatures={[,'row', 'center','center']}>
        <Text font={[10,500]} onPress={()=>console.log('privacy')}>Privacy Policy</Text>
        <Text padding={[5,10]}>-</Text>
        <Text font={[10,500]} onPress={()=>console.log('terms')}>Terms of Service</Text>
      </ViewLayout>

    </ViewLayout>
  )
}

export default index
