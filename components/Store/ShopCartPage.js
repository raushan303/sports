import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import {Appbar, Title, Card, Paragraph, Button} from 'react-native-paper';

import InputSpinner from "react-native-input-spinner";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
      C_row:{
            display:"flex", 
            flexDirection:"row"
      }
})


function CartItemCard(props){
      return(
      <Card style={{marginBottom:20}}>
            <View style={styles.C_row}>
            <View  style={{width:"35%"}}>
            <Card.Cover style={{width:"70%",height:100,marginLeft:"15%",marginTop:10,marginBottom:10}} source={props.img}></Card.Cover>
            </View>
           
            <Card.Content style={{width:"65%",backgroundColor:"#f5f6fa"}}>
           
            <View style={[styles.C_row,{height:65,marginTop:10}]}>
                  
                  <Paragraph style={{width:"80%",textAlign:"center"}}>Veirdo Men's Regular Fit T-Shirt</Paragraph>
                        
                  <Button style={{marginTop:-5}} onPress={()=>{alert("hello")}}><Icon name="delete" size={25}/></Button>
                 
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
            <Paragraph style={{width:"50%",textAlign:"right",fontSize:22,fontWeight:"bold",lineHeight:25}}>50$</Paragraph>
            
            </View>

            </Card.Content>

            </View>
      </Card>      
      )
}



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

            <CartItemCard img={require("../../assets/tshirt1.jpg")}/>
            <CartItemCard img={require("../../assets/tshirt2.jpg")}/>
            <CartItemCard img={require("../../assets/tshirt3.jpg")}/>
            <CartItemCard img={require("../../assets/tshirt4.jpg")}/>
            <CartItemCard img={require("../../assets/tshirt5.jpg")}/>
            <CartItemCard img={require("../../assets/tshirt6.jpg")}/>  

            <View style={[styles.C_row,{width:"100%",height:60,backgroundColor:"white",marginBottom:10}]}>
                  <Paragraph style={{width:"53%",marginTop:15,textAlign:"center",fontSize:22,fontWeight:"bold",lineHeight:25}}>238</Paragraph>
                  <Button color="white" style={{width:"45%",height:40,backgroundColor:"blue",marginTop:10}}>Place Order</Button>
            </View>  
              
            
           
      </ScrollView>

    

              

             

     

      );
}