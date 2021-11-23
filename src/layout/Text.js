import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { handleArray, handleShorts } from '../constants';

const Container = (
  {
    children,
    onPress,
    flexFeatures= [ {flex: 1}, {flexDirection: 'column'}, {justifyContent: 'center'} , {alignItems: 'stretch'}, {alignSelf: 'stretch'} ],
    font=       [ {fontSize: 16}, {fontWeight: 400}, {letterSpacing: null}, {lineHeight: null} ],
    textstyle=  [{flexWrap: 'wrap'}, {textAlign: 'auto'}, {textTransformations: 'none'} ],
    dimensions= [ {width: null}, {height: null}],
    padding=    [{paddingTop: 0}, {paddingRight: 0}, {paddingButtom: 0}, {paddingLeft: 0}],
    margin=     [{marginTop: 0}, {marginRight: 0}, {marginButtom: 0}, {marginLeft: 0}],
    border =    [ {width:1}, {color: '#000'}, {radius: 0}],
    borderWidth = [ {top: 0}, {right: 0}, {bottom: 0}, {left: 0}],
    borderColor = [ {top: ''}, {right: ''}, {bottom: ''}, {left: ''}],
    borderRadius = [ {topLeft: 0},{topRight: 0}, {bottomRight: 0}, {bottomLeft: 0}],
    colored=    [ {backgroundColor :null}, {color: null}],
    styles
  }
) =>{

  // handle the array data of border width
  let widthBorder = handleShorts(borderWidth, border[0]);

  // handle the array data of border color
  let colorBorder = handleShorts(borderColor, border[1]);

  // handle the array data of border radius
  let radiusBorder = handleShorts(borderRadius, border[2]);

  // handle the array data of view padding
  let shortPadding = handleArray(padding);

  // handle the array data of view margin
  let shortMargin = handleArray(margin);

  return(
    <Pressable
      styles={{
        // flexbox features
        flex: flexFeatures[0],
        flexDirection: flexFeatures[1],
        justifyContent: flexFeatures[2],
        alignItems: flexFeatures[3],
        alignSelf: flexFeatures[4],
      }}
      onPress={onPress}
    >

      <Text
        style={[
          {
            // font options
            fontSize: font[0],
            fontWeight: font[1],
            letterSpacing: font[3],
            lineHeight: font[4],
            flexWrap: textstyle[0],
            textAlign : textstyle[1],
            textTransformations: textstyle[2],
            // dimensions of item
            width: dimensions[0],
            height: dimensions[1],
            // the border width
            borderTopWidth:  widthBorder[0] ,
            borderRightWidth: widthBorder[1] ,
            borderBottomWidth: widthBorder[2] ,
            borderLeftWidth: widthBorder[3] ,
            // the border color
            borderTopColor: colorBorder[0],
            borderRightColor: colorBorder[1],
            borderBottomColor: colorBorder[2],
            borderLeftColor: colorBorder[3],
            // the border radius
            borderTopLeftRadius: radiusBorder[0],
            borderTopRightRadius: radiusBorder[1],
            borderBottomRightRadius: radiusBorder[2],
            borderBottomLeftRadius: radiusBorder[3],
            // margin of item
            marginTop: shortMargin[0],
            marginRight: shortMargin[1],
            marginBottom: shortMargin[2],
            marginLeft: shortMargin[3],
            // padding of item
            paddingTop: shortPadding[0],
            paddingRight: shortPadding[1],
            paddingBottom: shortPadding[2],
            paddingLeft: shortPadding[3],
            // color of item
            backgroundColor: colored[0],
            color: colored[1],
            overflow: 'hidden'
          },
        styles
        ]}
      >
        {children}
      </Text>
      
    </Pressable>
  )
}

export default Container;
