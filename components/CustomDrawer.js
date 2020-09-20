import React, { useContext,useState } from 'react'
import { View, StyleSheet } from 'react-native'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Button, Menu, Divider, Provider,
    List
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const arr=["raju","pappu"];

export function DrawerContent(props) {


      return (
            <View style={{flex: 1}}>

            <DrawerContentScrollView {...props}>
            <Drawer.Section style={styles.drawerSection}>

            <List.Section title="Shop">

                  <List.Accordion
                        left={(props) => 
                              <View style={{flexDirection:"row"}}>
                                    <Button onPress={()=>{props.navigation.navigate('Home')}}>Item</Button>
                              </View>
                        }
                  >
                        <List.Item title="First item" onPress={()=>{props.navigation.navigate('Home')}}/>
                        <List.Item title="Second item" onPress={()=>{props.navigation.navigate('Home')}}/>                  
                  </List.Accordion>

                  <List.Accordion
                        left={(props) => 
                              <View style={{flexDirection:"row"}}>
                                    <Button onPress={()=>{props.navigation.navigate('Home')}}>Item</Button>
                              </View>
                        }
                  >
                        <List.Item title="First item" onPress={()=>{props.navigation.navigate('Home')}}/>
                        <List.Item title="Second item" onPress={()=>{props.navigation.navigate('Home')}}/>                  
                  </List.Accordion>

                  <List.Accordion
                        left={(props) => 
                              <View style={{flexDirection:"row"}}>
                                    <Button onPress={()=>{props.navigation.navigate('Home')}}>Item</Button>
                              </View>
                        }
                  >
                        <List.Item title="First item" onPress={()=>{props.navigation.navigate('Home')}}/>
                        <List.Item title="Second item" onPress={()=>{props.navigation.navigate('Home')}}/>                  
                  </List.Accordion>

            </List.Section>

            
            </Drawer.Section>
            </DrawerContentScrollView>

            </View>
      )
} 

const styles = StyleSheet.create({

      menuItem:{
            // marginLeft:80,
            height:50,
            shadowOpacity:0,
            elevation:0
      },
      nested_drawer:{
            width:"80%",
            marginLeft:"20%",
            borderWidth:0
      },
      drawerContent: {
            flex: 1,
      },
      userInfoSection: {
            paddingLeft: 20,
      },
      title: {
            fontSize: 16,
            marginTop: 3,
            fontWeight: 'bold',
      },
      caption: {
            fontSize: 14,
            lineHeight: 14,
      },
      row: {
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
      },
      section: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 15,
      },
      paragraph: {
            fontWeight: 'bold',
            marginRight: 3,
      },
      drawerSection: {
            marginTop: 15,
            // backgroundColor:"red"
      },
      bottomDrawerSection: {
            marginBottom: 15,
            borderTopColor: '#f4f4f4',
            borderTopWidth: 1
      },
      preference: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 12,
            paddingHorizontal: 16,
      }
})