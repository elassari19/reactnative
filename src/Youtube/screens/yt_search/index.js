import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { Yt_header } from '..';
import { Icons, SvgIcon } from '../../../assets/Icons';
import { Text, ViewLayout } from '../../../layout';
import styles from '../styles';
import searchData from './data'


const index = () => {

  const { headerLeft, headerRight } = searchData;
  const [value, setvalue] = useState('')

  return (
    <View style={{ flex: 1 }}>

    <Yt_header headerLeft={headerLeft} headerRight={headerRight}>

      {/* search top nav */}
      <TextInput type="text" placeholder={headerLeft.name}
        style={styles.input}
        autoFocus
        defaultValue={value}
        onChangeText={setvalue}
      />

    </Yt_header>

    {/* search body */}
    <ViewLayout>
      {
        Array(30).fill('').map((_,idx) => (
          <ViewLayout flexFeatures={[1,'row','space-between']} padding={[10]}>
            <SvgIcon svg={Icons.path.history}/>
            <Text dimensions={[270]}>oddachi</Text>
            <SvgIcon svg={Icons.path.arrowDirection} viewBox={'0 0 80 80'} rotate={-45} />
          </ViewLayout>
        ))
      }
    </ViewLayout>

  </View>
  )
}

export default index
