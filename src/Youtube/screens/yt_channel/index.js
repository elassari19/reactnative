import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import tabScreenData from './tabScreenData';

const Tab = createMaterialTopTabNavigator();

const index = () => {

  return (
    <Tab.Navigator
      initialRouteName="channel_home"
      // tabBarPosition='bottom'
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#0005',
      }}
    >

      {
        tabScreenData?.map((tab)=> (
          <Tab.Screen
            key={tab.name}
            name={tab.navigate}
            component={tab.component}

            options={({route, navigation})=> ({
              
                tabBarLabel: tab.name,
                tabBarItemStyle: {width: 90}
                // try handle the item style but not working
                // tabBarItemStyle: () => {
                //   let length = navigation.getState().history.length-1;
                //   let history = navigation.getState().history[length].key.split('_')[1].split('-')[0].toUpperCase();

                //   let style = {width: 90, backgroundColor: tab.name===history ? null : '#0003', borderBottomWidth: tab.name===history ? 5 : 0, borderBottomColor: tab.name===history ? '#d00' : null}
                //   return style;
                // }
              })
            }

          />)
        )
      }


    </Tab.Navigator>
  )
}

export default index
