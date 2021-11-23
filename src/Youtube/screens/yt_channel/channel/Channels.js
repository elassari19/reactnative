import React from 'react'
import { ScrollView } from 'react-native'
import { Yt_ourChannels } from '../../../Yt-components'

const array = ['','','','','','','','','','']

const channels = () => {
  return (
    <ScrollView>
      {
        array.map((_,index) => (
          <Yt_ourChannels key={index} />
        )) 
      }
    </ScrollView>
  )
}

export default channels
