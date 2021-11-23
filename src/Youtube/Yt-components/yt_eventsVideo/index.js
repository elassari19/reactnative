import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import RenderList from './RenderList';

const index = () => {

  const [state, setstate] = useState({
    liked: true,
    disLiked: false,
    chat: false,
    share: false,
    download: false,
    playlist: false,
  })

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingHorizontal: 25, borderBottomWidth: 1, borderBottomColor: '#0002'}}
    >

      <RenderList  state={state} setstate={setstate} />


    </ScrollView>
  )
}

export default index
