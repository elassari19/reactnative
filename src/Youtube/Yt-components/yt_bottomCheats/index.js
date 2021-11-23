import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native'
import { CommentCard, LayerOfFilter, Yt_avatar } from '..'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { ConvertNumbers } from '../../../constants'
import { Text, ViewLayout } from '../../../layout'

const { filter, delete_ } = Icons.path;


const index = ({state, setState ,data}) => {

  const [isFilter, setisFilter] = useState(false);
  const [isCommentActions, setisCommentActions] = useState(false);
  const [topComments, setTopComments] = useState(false);

  return (
    <ViewLayout
      flexFeatures={[1]}
    >

      {/* this is a view layer has a absolute position use to handle the filter and actions of comments */}
      <LayerOfFilter
        isFilter={isFilter} setisFilter={setisFilter}
        topComments={topComments} setTopComments={setTopComments}
        isCommentActions={isCommentActions} setisCommentActions={setisCommentActions}
      />


      {/* header nav -> total comments + icon filter of comments + icon delete (goback) */}
      <ViewLayout 
        flexFeatures={[, 'row', 'space-between', 'center']}
        dimensions={[, 40]}
        padding={[,3,,8]}
        styles={{borderBottomWidth: 1, borderBottomColor: '#0002'}}
      >

        {/* total comments */}
        <Text font={[, 500]}>Comments {ConvertNumbers(8453)}</Text>

        {/* filter comments button and back */}
        <ViewLayout flexFeatures={[, 'row']} >

          {/* filter comments */}
          <SvgIconPressable onPress={()=>setisFilter(!isFilter)} svg={filter} width={40} color={'#000a'} />

          {/* goback == hide the comment */}
          <SvgIconPressable onPress={()=>setState(!state)} svg={delete_} width={40} color={'#000a'} />

        </ViewLayout>

      </ViewLayout>

      {/* render all comments */}
      <ScrollView 
        flexFeatures={[1]}
        colored={['#0002']}
        >

          {/* respect and add comments */}
          <ViewLayout dimensions={[, 100]} flexFeatures={[,, 'center']}>

            {/* respectful comments component */}
            <Text colored={['#0003']} padding={[5,8,,8]} dimensions={[, 50]} >
              remember to keep comments respectful and to follow our <Text colored={[, '#00fd']}>Community Guidlines</Text>
            </Text>

            {/* add public comment component */}
            <ViewLayout flexFeatures={[1, 'row',, 'center']} dimensions={[, 50]} padding={[,8,,8]}>

              <Yt_avatar source={require('../../../assets/account.jpg')} width={24} height={24} />
              <TextInput style={{paddingLeft: 8,width: '100%', height: 40}} placeholder='add a public comment...' />

            </ViewLayout>

          </ViewLayout>

        {// render comments component
          data?.map((_, index)=>(
            <CommentCard onPress={()=>setisCommentActions(!isCommentActions)} key={index} />
          ))
        }
      </ScrollView>

    </ViewLayout>
  )
}

export default index