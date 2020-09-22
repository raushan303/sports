import React,{useState} from 'react';
import {ImageBackground, StyleSheet, Text, View, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper'

import { Avatar, Card, Title, Paragraph, Appbar, Divider} from 'react-native-paper';
import Button from 'apsl-react-native-button';


function FavouritesItem(props){
      return(
             
		<Card onPress={()=>{props.navigation.navigate("Details")}} style={styles.F_favourites_item}>
			<Card.Cover style={{height:265,width:"90%",marginLeft:"5%",marginTop:5}} source={props.img} />

			<Card.Content>
				<Paragraph>CHKOKKO Men Gym Tank Tops Sports Sleeveless Vest</Paragraph>
				<Paragraph style={{marginLeft:115,fontSize:25,marginTop:5,lineHeight:30}}>50$</Paragraph>
			</Card.Content>
		</Card>
      );
}



export default function ShopFrontPage(props){

      return(

      <ScrollView style={{ marginTop:"8%",width:"100%",backgroundColor:"white"}} showsVerticalScrollIndicator={false}>

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

            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
                  
                  <Card>
                        <Card.Cover style={styles.F_img} source={require("../../assets/poster1.jpg")}/>
                  </Card>

                  <Card>
                        <Card.Cover style={styles.F_img} source={require("../../assets/poster10.jpg")}/>
                  </Card>

                  <Card>
                        <Card.Cover style={styles.F_img} source={require("../../assets/football1.jpg")}/>
                  </Card>

                  <Card>
                        <Card.Cover style={styles.F_img} source={require("../../assets/poster3.jpg")}/>
                  </Card>
            </Swiper>

            <Title style={styles.F_title}>
                        Third Kit Has Arrived
            </Title>

            <Paragraph style={{textAlign:"center",fontWeight:"bold"}}>Black and Pink - Made for the Boldest</Paragraph>

            <Button onPress={()=>{props.navigation.navigate("Items")}} textStyle={{color:"white"}} style={styles.F_buy}>Shop Now</Button>
           

            <View style={{backgroundColor:"#f5f6fa"}}>
            <Title style={{textAlign:"center",fontWeight:"500",fontSize:30,marginTop:50}}>
                        Team Favourites
            </Title>

            <Paragraph style={{textAlign:"center",fontWeight:"bold"}}>Best Sellers</Paragraph>
            

            <Swiper style={styles.F_fav_container} showsButtons={false}
                  dotStyle={{marginLeft:18,marginRight:18,marginBottom:18}}
                  activeDotStyle={{marginLeft:18,marginRight:18,marginBottom:18}}
            >
                        <FavouritesItem {...props} img={require("../../assets/tshirt1.jpg")}/>
                        <FavouritesItem {...props} img={require("../../assets/tshirt2.jpg")}/>
                        <FavouritesItem {...props} img={require("../../assets/tshirt3.jpg")}/>
                        <FavouritesItem {...props} img={require("../../assets/tshirt4.jpg")}/>
                        <FavouritesItem {...props} img={require("../../assets/tshirt5.jpg")}/>
                        <FavouritesItem {...props} img={require("../../assets/tshirt6.jpg")}/>
            </Swiper>
            </View>


            <Card>
                  <Card.Cover style={styles.F_img} source={require("../../assets/player1.jpg")}/>
            </Card>


            <Title style={{fontSize:30,textAlign:"center",marginTop:40,fontWeight:"bold"}}>
                        Home Kit
            </Title>

            <Paragraph style={{textAlign:"center",fontWeight:"bold"}}>Black and Pink - Made for the Boldest</Paragraph>

            <Button onPress={()=>{props.navigation.navigate("Items")}} textStyle={{color:"white"}} style={styles.F_buy}>Shop Now</Button>
    
      </ScrollView>

      )

}



const styles = StyleSheet.create({
      wrapper: {
            height:400,
            marginTop:15
      },
      F_img:{
            height:400
      },
      F_title:{
            width:"50%",
            marginLeft:"25%",
            fontSize:30,
            textAlign:"center",
            marginTop:40,
            fontWeight:"bold"
      },
      F_buy:{
            backgroundColor:"black",
            width:"50%",
            marginLeft:"25%",
            height:50,
            marginTop:20,
            borderRadius:50,
            marginBottom:70

      },
      F_favourites_item:{
            width:"75%",
            height:360,
            marginLeft:"12%",
      },
      F_fav_container:{
            height:450,
            marginTop:30
      }
})