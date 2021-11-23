import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SvgIcon } from "../../assets/Icons";

const TabItemDetails = ({ icon , name, color}) => {
  
  const navigation = useNavigation();

  return (
    <View  style={styles.tab}>
      
      {/* tab icon */}
      <SvgIcon svg={ [icon] } color={ color } />

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