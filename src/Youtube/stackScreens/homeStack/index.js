import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import homeStackData from './homeStackData';

const Stack = createStackNavigator();

const index = () => {

  return (
    <Stack.Navigator
      initialRouteName='home'
    >

      {/* 
        render screen by maping data wish was comming from file
        "homeStackData" exist in seem dirctory
      */}
      {
        homeStackData.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{ headerShown: screen.header }}
          />
        ))
      }

    </Stack.Navigator>
  )
}

export default index
