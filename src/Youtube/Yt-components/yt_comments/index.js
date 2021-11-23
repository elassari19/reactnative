import React from 'react'
import { ReadMoreCard, Yt_avatar } from '..'
import { Icons, SvgIcon } from '../../../assets/Icons'
import { ConvertNumbers } from '../../../constants'
import { PressableLayout, Text, TopLayerView, ViewLayout } from '../../../layout'

const index = ({onPress}) => {

  return (
    <ViewLayout
      flexFeatures={[, , 'space-around']}
      padding={[5,2,5,10]}
    >

      <TopLayerView onPress={onPress} layerColored={['']} />

      {/* total comments + arrows icons */}
      <ViewLayout flexFeatures={[, 'row', 'space-between']}>

        {/* total of comments */}
        <Text font={[11, 400]}>
          Comments {ConvertNumbers(1354)}
        </Text>

        {/* the arrow icon */}
        <ViewLayout>

          <SvgIcon svg={Icons.path.arrow} width={15} height={10} color={'#000'} viewBox={'0 5 20 20'} rotate={180} />
          <SvgIcon svg={Icons.path.arrow} width={15} height={10} color={'#000'} viewBox={'3 5 23 20'} />

        </ViewLayout>

      </ViewLayout>

        {/* avatar and frist commnets */}
        <ViewLayout
        flexFeatures={[, 'row', 'space-around', 'center']}
        dimensions={['92%']}
      >

        {/* the avatar */}
        <Yt_avatar source={require('../../../assets/account.jpg')} width={20} height={20} />

        {/* first comment */}
        <ReadMoreCard font={[10]} content={'Lorem ipsumd dolor, sit amet consectetur adipisicing elit. Autem, fugiat?'} lenght={120}/>

      </ViewLayout>

    </ViewLayout>
  )
}

export default index
