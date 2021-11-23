import React from 'react'
import { Icons, SvgIcon } from '../../../assets/Icons';
import { PressableLayout, Text, TopLayerView, ViewLayout } from '../../../layout'

const { report, delete_} = Icons.path;

const index = ({isFilter, setisFilter, topComments, setTopComments, setisCommentActions, isCommentActions}) => {
  return (
    <>

      {

        isFilter 
        // filter top or newest comments
        ? <TopLayerView 
          onPress={()=>setisFilter(false)}
          colored={['#fff']}
          position={[25,-210]}
          dimensions={[120,60]}
        >
          <Text
            onPress={()=>setTopComments(!topComments)}
            padding={[,,,10]}
            font={[13,,,, 30]}
            colored={[topComments && '#0002']}
          >
            Top comments
          </Text>
          
          <Text
            onPress={()=>setTopComments(!topComments)}
            padding={[,,,10]}
            font={[13,,,, 30]}
            colored={[!topComments && '#0002' ]}
          >
            Newest first
          </Text>

        </TopLayerView>

          // comment report + cancel
          : isCommentActions 
            && <TopLayerView 
              onPress={()=>setisCommentActions(false)}
              position={[410]}
              colored={['#fff']}
            >

              {/* report button */}
              <ViewLayout padding={[10,,10,15]} flexFeatures={[1, 'row', ,'center']} >
              <TopLayerView onPress={()=>setisCommentActions(false)} layerColored />
                <SvgIcon svg={report} color={'#000a'} />
                <Text font={[17]} padding={[,,,15]} >Report</Text>
              </ViewLayout>

              {/* cancel button */}
              <ViewLayout padding={[10,,10,15]} flexFeatures={[1, 'row',, 'center']} borderWidth={[,,1]} >
              <TopLayerView onPress={()=>setisCommentActions(false)} layerColored />
                <SvgIcon svg={delete_} color={'#000a'} />
                <Text font={[17]} padding={[,,,15]} >Cancel</Text>
              </ViewLayout>

            </TopLayerView>

      }

    </>
  )
}

export default index
