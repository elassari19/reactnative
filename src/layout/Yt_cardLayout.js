import * as React from 'react';
import { Dimensions, View } from 'react-native';

const Yt_cardLayout = ({children, height, width, styles}) =>{
  return(
    <View 
    style={[
      {
        width: width || Dimensions.get('window').width,
        height: height || '325px',
      },
    styles
   ]}>

      {children}
      
    </View>
  )
}

export default Yt_cardLayout;