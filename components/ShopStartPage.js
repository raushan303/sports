import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ShopFrontPage from './ShopFrontPage';
import ShopItemPage from './ShopItemPage';
import { DrawerContent } from './CustomDrawer'

const Drawer = createDrawerNavigator();

function Check(props){
      return(
            <View style={{marginTop:30}}>
                  <Appbar.Header style={{height:30,backgroundColor:"#1abc9c",borderTopRightRadius:130,width:"100%"}}>
			<Appbar.Content style={{marginTop:-30}} title="Title" subtitle="Subtitle" />
			<Appbar.Action  style={{marginTop:-25}} icon="menu" size={35} 
				onPress={()=>{
						props.navigation.openDrawer();
				}} 
			/>
		      </Appbar.Header>
                  <Text>hello</Text>
            </View>
      );

}


export default function ShopStartPage(){

      return(
            <Drawer.Navigator initialRouteName="Check"  drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="List" component={ShopFrontPage} />
                <Drawer.Screen name="Details" component={ShopItemPage}/>
                <Drawer.Screen name="Check" component={Check}/>
            </Drawer.Navigator>
      );
}