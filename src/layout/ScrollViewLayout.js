import * as React from 'react';
import { ScrollView } from 'react-native';
import { ViewLayout } from '.';

const Container = (
  {
    children,
    scrollHorizontall,
    flexFeatures,
    dimensions,
    padding,
    margin,
    border,
    borderWidth,
    borderColor,
    borderRadius,
    colored,
    overflow,
    styles,
    pagingEnabled,
  }
) =>{


  return (
    <ViewLayout
      flexFeatures={flexFeatures}
      dimensions={dimensions}
      padding={padding}
      margin={margin}
      border={border}
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderRadius={borderRadius}
      colored={colored}
      overflow={overflow}
      styles={styles}
    >

      <ScrollView
        horizontal={scrollHorizontall || false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={pagingEnabled || false}
        style={{
          width: '100%',
          height: '100%'
        }}
      >

          {children}
          
        </ScrollView>

    </ViewLayout>
  )
}

export default Container;
