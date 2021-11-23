import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBottomScreens from "./tabBottomScreens";
import rootStackScreen from "./data";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
          {/* bottom tab screen */}
        <Tab.Screen
          name='tabScreen'
          component={TabBottomScreens}
          options={{
            headerShown: false
          }}
        />

        {/*
          this is maping a multi stack screen
          if you need add new stack screen
          go to file name "rootStackScreen" in seem directory
          and add the new data as a object
        */}
        {
          rootStackScreen?.map((root) => (
            <Stack.Screen
              key={root.name}
              name={ root.name }
              component={ root.component }
              options={{
                headerShown: root.header
              }}
          />
          ))
        }

      </Stack.Navigator>


    </NavigationContainer>
  );
};

export default index;

