import React from 'react'
import { PressableLayout, ScrollViewLayout, ViewLayout } from '..'

const index = ({ 
  children ,
  onPress,
  zIndex= 1,
  layerFlexFeatures,
  layerDimensions = ['100%', '100%'],
  layerColored= ['#0008', '#000'],
  position= [{top: null},{right: null},{bottom: null},{left: null}],
  layerPosition= [0, 0, 0, 0],
  layerBorder,
  layerBorderColor,
  layerBorderWidth,
  border,
  borderColor,
  borderWidth,
  borderRadius,
  layerBorderRadius,
  colored,
  dimensions,
  overflow,
  layerPadding,
  layerMargin,
  padding,
  margin,
  styles
 }) => {

  return (
    <PressableLayout
      onPress={onPress}
      flexFeatures={layerFlexFeatures}
      dimensions={[layerDimensions[0], layerDimensions[1]]}
      colored={[layerColored[0], layerColored[1]]}
      borderRadius={layerBorderRadius}
      overflow={overflow}
      padding={layerPadding}
      margin={layerMargin}
      border={layerBorder}
      borderWidth={layerBorderWidth}
      borderColor={layerBorderColor}
      styles={{
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        zIndex: zIndex,
        overFlow: 'hidden',
        top:    layerPosition[0],
        right:  layerPosition[1],
        bottom: layerPosition[2],
        left:   layerPosition[3],
      }}
    >

      <ScrollViewLayout
        colored={colored}
        dimensions={dimensions}
        border={border}
        borderWidth={borderWidth}
        borderColor={borderColor}
        borderRadius={borderRadius}
        overflow={overflow}
        padding={padding}
        margin={margin}
          styles={styles, {
          top:    position[0],
          right:  position[1],
          bottom: position[2],
          left:   position[3],
        }}
      >

        { children }

      </ScrollViewLayout>

    </PressableLayout>
  )
}

export default index