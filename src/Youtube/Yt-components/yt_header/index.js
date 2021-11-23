import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import HeaderLeftItem from "./HeaderLeftItem";
import HeaderRightItem from "./HeaderRightItem";
import { useNavigation } from "@react-navigation/native";
// import styles from "../../screens/styles";

const index = ({ children = '', title = '', headerLeft, headerRight, height = 45 }) => {

  const navigation = useNavigation();

  return (
    <View style={[styles.container, { maxHeight: height }]}>

      <Pressable 
        onPress={() => navigation.goBack()} 
        style={[styles.brand]}>

        {/* left icon if exist */}
        <HeaderLeftItem data={headerLeft} />

        {/* left title screen if exist */}
        <Text style={styles.title}>{title || ''}</Text>
      
      </Pressable>

        {/* the hedeer nav children if exist */}
        <Text>{children}</Text>

      {/* the right header icon if exist */}
      <HeaderRightItem data={headerRight} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: "400"
  }

})