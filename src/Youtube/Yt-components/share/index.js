import React from 'react'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { ScrollViewLayout, Text, TopLayerView, ViewLayout } from '../../../layout'

const { facebook, twitter, instagram, whatsapp, telegram, tiktok, gmail, linkedin, threeDots } = Icons.path;

const index = ({onPress}) => {
  return (
    <TopLayerView onPress={onPress} position={[550]} colored={['#fff']}>

      <Text font={[15,500]} padding={[15]}>Share</Text>

      <ScrollViewLayout padding={[5,5,10]} scrollHorizontall>

        <ViewLayout dimensions={[50,50]} margin={[,15]}>
          <SvgIconPressable svg={facebook} width={50} height={50} viewBox={'0 0 50 50'} />
        </ViewLayout>

        <ViewLayout dimensions={[50,50]} margin={[,15]}>
          <SvgIconPressable svg={twitter} width={50} height={50} viewBox={'0 0 50 50'} />
        </ViewLayout>

        <ViewLayout dimensions={[50,50]} margin={[,15]}>
          <SvgIconPressable svg={whatsapp} width={50} height={50} viewBox={'0 0 55 55'} />
        </ViewLayout>

        <ViewLayout dimensions={[50,50]} margin={[,15]}>
          <SvgIconPressable svg={telegram} width={50} height={50} viewBox={'0 0 50 50'} />
        </ViewLayout>

        <ViewLayout dimensions={[50,50]} margin={[,15]}>
          <SvgIconPressable svg={tiktok} width={50} height={50} viewBox={'0 0 50 50'} />
        </ViewLayout>

        <ViewLayout dimensions={[50,50]} margin={[,15]}>
          <SvgIconPressable svg={gmail} width={50} height={50} viewBox={'0 0 50 50'} />
        </ViewLayout>

        <ViewLayout dimensions={[50,50]} margin={[,15]}>
          <SvgIconPressable svg={linkedin} width={50} height={50} viewBox={'0 0 50 50'} />
        </ViewLayout>

        <ViewLayout dimensions={[50,50]} border={[,,'50%']} colored={['#0001']}>
          <SvgIconPressable  svg={threeDots} width={50} height={50} viewBox={'-1 0 25 25'} />
        </ViewLayout>

      </ScrollViewLayout>

      <Text onPress={onPress} textstyle={[,'center']} padding={[17]} borderWidth={[1]} borderColor={['#0001']}>Cancel</Text>
    </TopLayerView>
  )
}

export default index
