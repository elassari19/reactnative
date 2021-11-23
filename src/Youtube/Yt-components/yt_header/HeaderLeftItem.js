import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { SvgIconPressable } from '../../../assets/Icons'

const HeaderLeftItem = ({ data }) => {

  const navigation = useNavigation();

  const { icon, color, width, height, rotate, viewBox } = data;

  return (
        <SvgIconPressable
          onPress={() => navigation.dispatch(StackActions.pop(1))}
          svg={icon}
          color={color || '#333'}
          width={width || 50}
          height={height || '100%'}
          rotate={rotate}
          viewBox={viewBox}
        />
  );
};

export default HeaderLeftItem;