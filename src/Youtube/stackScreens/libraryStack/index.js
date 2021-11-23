import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import libraryStackData from './libraryStackData';

const Stack = createStackNavigator();

const index = () => {

  return (
    <Stack.Navigator>

      {
        libraryStackData.map((screen) => (
          <Stack.Screen
            key={screen.component}
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
