import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ShopItemPage from './ShopItemPage';
import ShopFrontPage from './ShopFrontPage';
import ShopStartPage from './ShopStartPage';





const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
      return (

      <Tab.Navigator
            initialRouteName="Store"
            activeColor="#1abc9c"
            shifting = {true}
      >
            <Tab.Screen
                  name="Home"
                  component={ShopFrontPage}
                  options={{
                        tabBarLabel: 'List',
                        tabBarColor: '#fff',
                        tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="home" color='#000000' size={26} />
                        ),
                  }}
            />
            <Tab.Screen
                  name="About"
                  component={ShopItemPage}
                  options={{
                        tabBarLabel: 'Details',
                        tabBarColor: '#fff',
                        tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="details" color='#000000' size={26} />
                        ),
                  }}
            />

            <Tab.Screen
                  name="Store"
                  component={ShopStartPage}
                  options={{
                        tabBarLabel: 'Details',
                        tabBarColor: '#fff',
                        tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="cart" color='#000000' size={26} />
                        ),
                  }}
            />

      </Tab.Navigator>
      
      );
}