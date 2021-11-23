import React, { useState } from 'react'
import { Text, ViewLayout } from '../../../layout'

const index = ({content, lenght= 100, font, readMore='read more'}) => {

  const [text, setText] = useState(false)

  return (
    <ViewLayout>
    {
      !text
      ?<Text  font={font || [14, 500]} onPress={()=>setText(true)} dimensions={[300]}>
        {content.slice(0,lenght)}... 
        <Text font={font || [11, 500]} colored={[,'#0008']}>
          {readMore}
        </Text>
      </Text>
      :<Text  font={font || [14, 500]} onPress={()=>setText(false)} dimensions={[300]}>{content}</Text>
    }
    </ViewLayout>
  )
}

export default index
