import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { ConvertNumbers } from '../../../constants'
import { ScrollViewLayout, Text, ViewLayout, TopLayerView } from '../../../layout'
import { CommentCard, Yt_avatar } from '../../Yt-components'

const array = [0,0,0,0,0,0,0,0];

const index = () => {

  const [isCommentActions, setisCommentActions] = useState(false)
  const [filter, setFilter] = useState(false)
  const [top, setTop] = useState(true)



  useEffect(() => {

    let timeout = setTimeout(() => { setFilter(false) }, 5000);

    return ()=> clearTimeout(timeout);

  }, [filter])

  return (
    <ScrollViewLayout>

      {/* this is a view layer has a absolute position use to handle the filter and actions of comments */}
      {
        filter&&<TopLayerView onPress={()=>setFilter(false)} position={[15,-240]} layerColored={['#0000']} colored={['#fff']} dimensions={[120]}>

          <Text onPress={()=>setTop(true)} dimensions={[,30]} padding={[5,,5,10]} colored={[top?'#0005':'#fff']}>Top comments</Text>
          <Text onPress={()=>setTop(false)} dimensions={[,30]} padding={[5,,5,10]} colored={[!top?'#0005':'#fff']}>Newest first</Text>

        </TopLayerView>
      }

      {/* this is a view layer has a absolute position use to handle the filter and actions of comments */}
      {
        isCommentActions&&<TopLayerView onPress={()=>setisCommentActions(false)} position={[640,]} layerColored={['#0003']} colored={['#fff']}>

          <Text onPress={()=>setisCommentActions(false)} dimensions={[,40]} padding={[5,,5,10]}>Report</Text>
          <Text onPress={()=>setisCommentActions(false)} dimensions={[,40]} padding={[5,,5,10]}>Cancel</Text>

        </TopLayerView>
      }

      {/* the header of comment screen */}
      <ViewLayout  padding={[5,5,5,5]}>
        <ViewLayout flexFeatures={[1, 'row', 'space-between']}>

          <Text>Comments {ConvertNumbers(6484)}</Text>
          <SvgIconPressable onPress={()=>setFilter(true)} svg={Icons.path.filter} color={'#000'} />

        </ViewLayout>

        {/* add new comment */}
        <ViewLayout flexFeatures={[1, 'row',,'center']} padding={[5,,10]} >

          <Yt_avatar source={require('../../../assets/account.jpg')} width={30} height={30} />

          <TextInput placeholder='Add a public comment...' style={{flex: 1, height: 40, marginLeft: 10}} />

        </ViewLayout>


        {/* render the comments of post */}
        {
          array.map((_,index) => (
            <CommentCard key={index} onPress={()=>setisCommentActions(true)} />
          ))
        }
        
      </ViewLayout>

    </ScrollViewLayout>
  )
}

export default index
