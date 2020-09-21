import React from 'react'
import { View,Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ShopStartPage from './ShopStartPage';



function News(){
      return(
            <View>
                  <Text>
                        News Page
                  </Text>
            </View>
      )
}

function Score(){
      return(
            <View>
                  <Text>
                        Score Page
                  </Text>
            </View>
      )
}




const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
      return (

      <Tab.Navigator
            initialRouteName="Store"
            activeColor="#1abc9c"
            shifting = {true}
      >
            <Tab.Screen
                  name="Score"
                  component={Score}
                  options={{
                        tabBarLabel: 'Score',
                        tabBarColor: '#fff',
                        tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="home" color='#000000' size={26} />
                        ),
                  }}
            />
            <Tab.Screen
                  name="News"
                  component={News}
                  options={{
                        tabBarLabel: 'News',
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