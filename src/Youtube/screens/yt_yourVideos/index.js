import React, { useState } from 'react'
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { Text, TopLayerView, ViewLayout } from '../../../layout'

const index = () => {

  const [sort, setSort] = useState(false);
  const [by, setBy] = useState(0);
  const [option, setOption] = useState(-1);

  return (
    <ViewLayout flexFeatures={[1]}>

      {/* handle select of sort */}
      {
        sort&&<TopLayerView  onPress={()=>setSort(false)} colored={['#fff']} position={[530]}>

          <Text padding={[15]} font={[,500]}>Sort by</Text>

          {/* most recent */}
          <ViewLayout flexFeatures={[,'row',,'center']} borderWidth={[1,,,]} borderColor={['#0001']}>
            <TopLayerView layerColored onPress={()=>setBy(0)} />
            <ViewLayout margin={[15]} dimensions={[16,16]} border={[1,'#0005', '50%']}>
              <Text dimensions={[10,10]} colored={[by == 0 && '#d00']} margin={[2,,,2]} border={[,, '50%']}/>
            </ViewLayout>
            <Text>Most recent (default)</Text>
          </ViewLayout>

          {/* most viewed */}
          <ViewLayout flexFeatures={[,'row',,'center']}>
            <TopLayerView layerColored onPress={()=>setBy(1)} />
            <ViewLayout margin={[15]} dimensions={[16,16]} border={[1,'#0005', '50%']}>
              <Text dimensions={[10,10]} colored={[by == 1 && '#d00']} margin={[2,,,2]} border={[,, '50%']}/>
            </ViewLayout>
            <Text>Most viewed</Text>
          </ViewLayout>

          {/* cancel */}
          <ViewLayout flexFeatures={[,'row',,'center']} padding={[10]} borderWidth={[1,,,]} borderColor={['#0001']}>
            <TopLayerView layerColored onPress={()=>setSort(false)} />
            <SvgIconPressable svg={Icons.path.delete_} viewBox={'0 -2 25 25'} color={'#000'} />
            <Text margin={[,,,15]} font={[16]}>Cancel</Text>
          </ViewLayout>

        </TopLayerView>
      }

      {/* header  */}
      <ViewLayout flexFeatures={[,'row']} margin={[10]}>
        <SvgIconPressable onPress={()=>setSort(true)} svg={Icons.path.filter} border={[1,'#0002','25%']} colored={['#0001']} color={'#000d'} viewBox={'0 -5 28 28'} padding={[,5,,5]} margin={[,5]} />
        <Text onPress={()=>setOption(0)} padding={[3,8]} margin={[,10]} border={[1,'#0002','30%']} colored={option==0?['#000d','#fff']:['#0001']} >Videos</Text>
        <Text onPress={()=>setOption(1)} padding={[3,8]} margin={[,10]} border={[1,'#0002','30%']} colored={option==1?['#000d','#fff']:['#0001']} >Lives</Text>
        <Text onPress={()=>setOption(2)} padding={[3,8]} margin={[,10]} border={[1,'#0002','30%']} colored={option==2?['#000d','#fff']:['#0001']} >Shorts</Text>
      </ViewLayout>

      <ViewLayout flexFeatures={[1,,'center','center']}>
        <Text font={[12]} colored={[,'#000a']}>Share videos with anyoune, or everyone</Text>
        <Text padding={[5,8]} margin={[15]} border={[1,'#00f',3]} font={[,500]} colored={['#33f', '#fff']}>CREATE</Text>
      </ViewLayout>


    </ViewLayout>
  )
}

export default index
