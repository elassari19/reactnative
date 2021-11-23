import React from 'react'
import { Text } from '../../../layout'

{
  /*
  received
  the data {arrayData} +
  current select options {selected} +
  hide layer function {hidelayer} +
  set the new select option function {setSelected}
*/
}

const index = ({arrayData, hideLayer, selected, setSelected}) => {

  // set new select option and send it to parrent commponent then hide the top layer view
  const handleSelect = (selectId) => {
    // save the new select option this saving detected by parrent commponent
    setSelected(selectId)
    // delay 100 millsecond hideLayer function
    setTimeout(()=>{let hide = hideLayer(false);return clearTimeout(hide)},100);
  }

  return (
    <>
      {
        arrayData.map((item,index) => (
          <Text key={index}
            onPress={()=>handleSelect(index)}
            font={[12]}
            colored={[selected==index?'#0002':'']}
            padding={[5,,5,10]}
          >

            {item}

          </Text>

          ))

}
    </>
  )
}

export default index
