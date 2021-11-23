import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import tabScreenData from './tabScreenData'
import TabItemDetails from './TabItemDetails'
import {Yt_header} from '../Yt-components'
import { activeColor, desActiveColor } from '../../layout/colors';
import { View } from 'react-native'

const Tab = createBottomTabNavigator();
const { headerRight, headerLeft, tabScreen } = tabScreenData;

const index = () => {

  return (
    <View style={{flex: 1}}>

      {/* header component */}
      <Yt_header title={'YouTube'} headerLeft={headerLeft} headerRight={headerRight}/>

      {/* bottom tab screen  */}
      <Tab.Navigator>
        {
          tabScreen.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}

            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: [{display: 'flex'}],

              tabBarIcon: ({ focused }) => (

                // tab item component exist in the seem directory
                <TabItemDetails 
                  icon={ tab.icon }
                  name={ tab.name }
                  color={ focused ? activeColor : desActiveColor }
                />
              )
            }}
          />
          ))
        }
      </Tab.Navigator>
    </View>
  )
}

export default index
