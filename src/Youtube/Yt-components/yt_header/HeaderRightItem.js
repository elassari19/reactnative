import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import {SvgIconPressable} from '../../../assets/Icons'
import { useNavigation } from "@react-navigation/native";

const HeaderRightItem = ({ data }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {data?.map((item) => (
        <Pressable
          key={item.icon}
          
        >
          <SvgIconPressable
            onPress={() => navigation.navigate(item.name)}
            svg={item.icon}
            viewBox={item.viewBox}
            rotate={item?.rotate}
            width={item.width}
            height={item.height}
            color={ item.color || '#333'}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default HeaderRightItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%"
  },
})