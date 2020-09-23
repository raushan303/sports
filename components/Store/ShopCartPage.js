import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, AsyncStorage} from 'react-native';
import { useIsFocused } from "@react-navigation/native";

import {Appbar, Title, Card, Paragraph, Button} from 'react-native-paper';

import InputSpinner from "react-native-input-spinner";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Data } from '../../shared/TshirtData';

const styles = StyleSheet.create({
      C_row:{
            display:"flex", 
            flexDirection:"row"
      }
})


function CartItemCard(props){

      var ItemName= props.item.Paragraph;

      if(ItemName.length>40){
            ItemName = ItemName.substring(0,40)+"....";
      }

      return(

      <Card onPress={()=>{props.navigation.navigate("Details",{item:props.item})}} style={{marginBottom:20}}>
            <View style={styles.C_row}>
            
            <View  style={{width:"35%"}}>
            <Card.Cover style={{width:"70%",height:100,marginLeft:"15%",marginTop:10,marginBottom:10}} source={props.item.img}></Card.Cover>
            </View>
           
            <Card.Content style={{width:"65%",backgroundColor:"#f5f6fa"}}>
           
            <View style={[styles.C_row,{height:65,marginTop:10}]}>
                  <Paragraph style={{width:"80%",textAlign:"center"}}>{ItemName}</Paragraph>      
                  <Button style={{marginTop:-5}} onPress={()=>{props.removeItems(props.item)}}><Icon name="delete" size={25}/></Button>
            </View>

            <View style={[styles.C_row]}>
            
            <InputSpinner
                  min={1}
                  step={1}
                  value={1}
                  showBorder={true}
                  rounded={false}
                  color={"#58B19F"}
                  height={30}
                  width={100}
                  style={{marginLeft:10}}
                  onChange={(num) => {
                  }}
            />
            <Paragraph style={{width:"50%",textAlign:"right",fontSize:22,fontWeight:"bold",lineHeight:25}}>{props.item.price}$</Paragraph>
            
            </View>
            </Card.Content>

            </View>
      </Card>      
      )
}



export default function ShopCartPage(props){

      const [CartItems,setCartItems]=useState([]);
      const [Price,setPrice]=useState(0);
      const isFocused = useIsFocused();

      useEffect(()=>{
            const getListItem = async()=>{
                  
                  var Cart_Items = await AsyncStorage.getItem('Cart');
            
                  if(Cart_Items===null){
                        Cart_Items=[]
                  }
                  Cart_Items=JSON.parse(Cart_Items);
                  setCartItems(Cart_Items);

            }
            getListItem();
            CalculateCost();
      },[isFocused,CartItems])

      const removeItems=async(item)=>{

            var Cart_Items=CartItems;
           
            Cart_Items=Cart_Items.filter((c_item)=>{
                  return c_item._id!==item._id;
            });
           
            await AsyncStorage.setItem('Cart',JSON.stringify(Cart_Items));
            setCartItems(Cart_Items);
            CalculateCost();
            console.log(Price);
      }

      const CalculateCost = () => {
            var cost=0;
            console.log(CartItems)
            CartItems.map((item)=>{
                  cost+=item.price;
            })
            setPrice(cost);
      }

      return(
      
            <View style={{flex:1}}>
      
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

            {
                  CartItems.map((item,index)=>{
                        return(
                              <CartItemCard key={index.toString()} {...props} item={item} removeItems={removeItems}/> 
                        );
                  })
            }
                          
      </ScrollView>

            <View style={[styles.C_row,{width:"100%",height:60,backgroundColor:"white",marginBottom:3}]}>
                  <Paragraph style={{width:"53%",marginTop:15,textAlign:"center",fontSize:22,fontWeight:"bold",lineHeight:25}}>{Price}$</Paragraph>
                  <Button color="white" style={{width:"45%",height:40,backgroundColor:"blue",marginTop:10}}>Place Order</Button>
            </View>  

      </View>
      );
}