import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import subscribStackData from './subscribStackData';

const Stack = createStackNavigator();

const index = () => {

  return (
    <Stack.Navigator>

      {
        subscribStackData.map((screen) => (
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
