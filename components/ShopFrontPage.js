import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import { Avatar, Card, Title, Paragraph, Appbar} from 'react-native-paper';


export default function ShopFrontPage(props){

      return(

      <ScrollView style={{ marginTop:"8%",width:"100%"}} showsVerticalScrollIndicator={false}>

                  <Appbar.Header style={{height:30}}>
                        
                  <Appbar.Action  style={{marginTop:-25}} icon="menu" size={30} 
                        onPress={()=>{props.navigation.openDrawer();}} 
                  />
                  <Appbar.Content style={{marginTop:-30}} title="Item" subtitle="Special Offer" />
                  <Appbar.Action  style={{marginTop:-25}} icon="magnify" size={30} 
                        onPress={()=>{props.navigation.navigate("Search");}} 
                  />
                  <Appbar.Action  style={{marginTop:-25}} icon="cart" size={30} 
                        onPress={()=>{props.navigation.navigate("Cart");}} 
                  />

                  </Appbar.Header>

            <Title style={{marginTop:200,marginLeft:150}}>Front Page</Title>
      </ScrollView>

      )

}