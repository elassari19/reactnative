import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SvgIconPressable } from "../../../assets/Icons";

const TabItemDetails = ({ icon , name, color}) => {
  return (
    <View  style={styles.tab}>
      
      {/* tab icon */}
      <SvgIconPressable svg={ [icon] } color={ color }
      />

      {/* tab label */}
      <Text style={[
        { color },
        styles.text
      ]}
      >
        {name}
      </Text>

    </View>
  )
}

export default TabItemDetails

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 10,
    fontWeight: "500"
  }
});