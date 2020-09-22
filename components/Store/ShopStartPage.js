import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ShopItemsPage from './ShopItemsPage';
import ShopDetailsPage from './ShopDetailsPage';
import ShopCartPage from './ShopCartPage';
import ShopSearchPage from './ShopSearchPage';
import ShopFrontPage from './ShopFrontPage'
import { DrawerContent } from './CustomDrawer'

const Drawer = createDrawerNavigator();


export default function ShopStartPage(){

      return(
            <Drawer.Navigator initialRouteName="Front"  drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Items" component={ShopItemsPage} />
                <Drawer.Screen name="Details" component={ShopDetailsPage}/>
                <Drawer.Screen name="Cart" component={ShopCartPage}/>
                <Drawer.Screen name="Search" component={ShopSearchPage}/>
                <Drawer.Screen name="Front" component={ShopFrontPage}/>
            </Drawer.Navigator>
      );
}