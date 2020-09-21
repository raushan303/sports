import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import {Appbar, Title} from 'react-native-paper';

export default function ShopCartPage(props){
      return(
      <ScrollView style={{ marginTop:"8%",width:"100%"}} showsVerticalScrollIndicator={false}>

            <Appbar.Header style={{height:30}}>
                  <Appbar.Action  style={{marginTop:-25}} icon="arrow-left" size={30} 
                        onPress={()=>{props.navigation.goBack();}} 
                  />
                  <Appbar.Content style={{marginTop:-30}} title="Cart" subtitle="Your Favourite" />
                  <Appbar.Action  style={{marginTop:-25}} icon="magnify" size={30} 
                        onPress={()=>{props.navigation.navigate("Search");}} 
                  />     
            </Appbar.Header>

            <Title style={{marginTop:200,marginLeft:170}}>Cart</Title>
      </ScrollView>
      );
}