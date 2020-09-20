import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ShopFrontPage from './ShopFrontPage';
import ShopItemPage from './ShopItemPage';
import { DrawerContent } from './CustomDrawer'

const Drawer = createDrawerNavigator();


export default function ShopStartPage(){

      return(
            <Drawer.Navigator initialRouteName="List"  drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="List" component={ShopFrontPage} />
                <Drawer.Screen name="Details" component={ShopItemPage}/>
            </Drawer.Navigator>
      );
}