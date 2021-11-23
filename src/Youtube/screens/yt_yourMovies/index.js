import React from 'react'
import { Icons, SvgIcon } from '../../../assets/Icons'
import { Text, ViewLayout } from '../../../layout'

const index = () => {
  return (
    <ViewLayout flexFeatures={[1,,'center', 'center']}>
      <SvgIcon svg={Icons.path.bookMark} width={250} height={250} viewBox={'0 -4 50 50'} color={'#0001'} rotate={135} />
      <Text font={[,500]} margin={[15,,15]}>You don't have any purchases</Text>
      <Text font={[12]} colored={[,'#000a']}>Movies and shows that you rent or buy will appear here</Text>
    </ViewLayout>
  )
}

export default index
